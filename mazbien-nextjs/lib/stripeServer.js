import Stripe from "stripe";

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) {
    const error = new Error("Set STRIPE_SECRET_KEY on the server.");
    error.status = 500;
    throw error;
  }
  return new Stripe(key);
}
