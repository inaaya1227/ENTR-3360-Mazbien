import { getStripe } from "@/lib/stripeServer";
import { bearerToken, requireUser, userClientFromRequest } from "@/lib/supabaseUser";

export async function POST(request) {
  const token = bearerToken(request);
  const supabase = userClientFromRequest(request);
  if (!supabase || !(await requireUser(supabase, token))) {
    return Response.json({ error: "Sign in before confirming a deposit." }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Send the Checkout session id as JSON." }, { status: 400 });
  }
  const sessionId = String(body?.sessionId || "").trim();
  if (!sessionId.startsWith("cs_")) {
    return Response.json({ error: "Send the Checkout session id." }, { status: 400 });
  }

  let session;
  try {
    session = await getStripe().checkout.sessions.retrieve(sessionId);
  } catch (error) {
    const message = String(error.message || "Stripe could not look up the deposit.").replace(
      /sk_(test|live)_[A-Za-z0-9]+/g,
      "[redacted]",
    );
    return Response.json({ error: message }, { status: error.status || 502 });
  }

  if (session.payment_status !== "paid") {
    return Response.json({ error: "Stripe has not marked this deposit paid." }, { status: 409 });
  }

  const assessmentId = session.metadata?.assessment_id || "";
  const paymentResult = await supabase
    .from("payments")
    .select("id, assessment_id, status, amount_cents, currency, paid_at")
    .eq("stripe_session_id", session.id)
    .maybeSingle();
  if (paymentResult.error) {
    return Response.json({ error: paymentResult.error.message }, { status: 500 });
  }
  const payment = paymentResult.data;
  if (!payment || payment.assessment_id !== assessmentId) {
    return Response.json({ error: "This deposit does not match a payment you own." }, { status: 404 });
  }

  if (payment.status === "paid") {
    return Response.json({
      status: "paid",
      amountCents: payment.amount_cents,
      currency: payment.currency,
      paidAt: payment.paid_at,
    });
  }

  const paidAt = new Date().toISOString();
  const updated = await supabase
    .from("payments")
    .update({ status: "paid", paid_at: paidAt })
    .eq("id", payment.id)
    .select("status, amount_cents, currency, paid_at")
    .single();
  if (updated.error) {
    return Response.json({ error: updated.error.message }, { status: 500 });
  }

  return Response.json({
    status: updated.data.status,
    amountCents: updated.data.amount_cents,
    currency: updated.data.currency,
    paidAt: updated.data.paid_at,
  });
}
