import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CustomCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    const response = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, address, city, state, zip }),
    });

    const { clientSecret } = await response.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement!,
        billing_details: {
          name,
          email,
          address: {
            line1: address,
            city,
            state,
            postal_code: zip,
          },
        },
      },
    });

    setLoading(false);

    if (result.error) {
      setError(result.error.message || "An error occurred");
    } else {
      if (result.paymentIntent?.status === "succeeded") {
        alert("Payment successful!");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-white px-5 flex gap-5 flex-col"
    >
      <div className="flex gap-5">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-black "
        />
      </div>
      <div className="flex gap-5">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex gap-5">
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="flex gap-5">
        <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div className="flex gap-5">
        <label>State</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </div>
      <div className="flex gap-5">
        <label>ZIP</label>
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          required
        />
      </div>
      <div className="flex gap-5">
        <label>Card Details</label>
        <CardElement />
      </div>
      {error && <div>{error}</div>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="p-5 bg-blue-600 mb-10"
      >
        {loading ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

const CustomCheckout = () => (
  <Elements stripe={stripePromise}>
    <CustomCheckoutForm />
  </Elements>
);

export default CustomCheckout;
