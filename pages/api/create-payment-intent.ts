import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email, name, address, city, state, zip } = req.body;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: 5000, // Example amount in cents
        currency: "usd",
        receipt_email: email,
        shipping: {
          name,
          address: {
            line1: address,
            city,
            state,
            postal_code: zip,
            country: "US",
          },
        },
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      res.status(500).json({ error: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
