// components/Basket.tsx
import { useBasket } from "@/context/BasketContext";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Basket = () => {
  const { basket, removeFromBasket, updateQuantity } = useBasket();

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: basket }),
    });

    const session = await response.json();

    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result?.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="basket bg-black text-white p-5">
      <h2>Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {basket.map((seed) => (
            <li key={seed.id}>
              <h3>{seed.name}</h3>
              <p>Type: {seed.type}</p>
              <p>Price: {seed.price_per_seed}</p>
              <p>Quantity: {seed.quantity}</p>
              <button onClick={() => removeFromBasket(seed.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {basket.length > 0 && (
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white p-2 mt-4"
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default Basket;
