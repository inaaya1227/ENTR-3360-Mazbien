import { depositCents, tierRangeLowDollars } from "@/lib/deposit";
import { getStripe } from "@/lib/stripeServer";
import { bearerToken, requireUser, userClientFromRequest } from "@/lib/supabaseUser";

const ASSESSMENT_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function siteOrigin(request) {
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") || "http";
  return `${proto}://${host}`;
}

export async function POST(request) {
  const token = bearerToken(request);
  const supabase = userClientFromRequest(request);
  if (!supabase || !(await requireUser(supabase, token))) {
    return Response.json({ error: "Sign in before collecting a deposit." }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Send the assessment id as JSON." }, { status: 400 });
  }

  const assessmentId = String(body?.assessmentId || "").trim();
  if (!ASSESSMENT_ID.test(assessmentId)) {
    return Response.json({ error: "Send a saved assessment id." }, { status: 400 });
  }

  const assessmentResult = await supabase
    .from("assessments")
    .select("id, tier, status")
    .eq("id", assessmentId)
    .maybeSingle();
  if (assessmentResult.error) {
    return Response.json({ error: assessmentResult.error.message }, { status: 500 });
  }
  const assessment = assessmentResult.data;
  if (!assessment) {
    return Response.json({ error: "That assessment is not available for this consultant." }, { status: 404 });
  }
  if (assessment.status !== "sent_for_review") {
    return Response.json({ error: "A deposit can be collected only after Send For Review." }, { status: 409 });
  }

  const tierLow = tierRangeLowDollars(assessment.tier);
  if (tierLow == null) {
    return Response.json({ error: "This tier has no fixed price, so a deposit cannot be calculated." }, { status: 400 });
  }

  const addonResult = await supabase
    .from("assessment_addons")
    .select("price_at_selection")
    .eq("assessment_id", assessmentId);
  if (addonResult.error) {
    return Response.json({ error: addonResult.error.message }, { status: 500 });
  }
  const addonDollars = (addonResult.data || []).reduce((sum, row) => sum + Number(row.price_at_selection || 0), 0);
  const amountCents = depositCents(tierLow, addonDollars);
  if (!amountCents || amountCents < 50) {
    return Response.json({ error: "The calculated deposit is too small to charge." }, { status: 400 });
  }

  const origin = siteOrigin(request);
  let session;
  try {
    const stripe = getStripe();
    session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${origin}/payments/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/dashboard`,
      metadata: { assessment_id: assessmentId },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "cad",
            unit_amount: amountCents,
            product_data: { name: "Mazbien training deposit (test mode)" },
          },
        },
      ],
    });
  } catch (error) {
    const message = String(error.message || "Stripe could not start the deposit.").replace(/sk_(test|live)_[A-Za-z0-9]+/g, "[redacted]");
    return Response.json({ error: message }, { status: error.status || 502 });
  }

  const inserted = await supabase.from("payments").insert({
    assessment_id: assessmentId,
    stripe_session_id: session.id,
    amount_cents: amountCents,
    currency: "cad",
    status: "pending",
  });
  if (inserted.error) {
    return Response.json({ error: inserted.error.message }, { status: 500 });
  }

  return Response.json({ url: session.url });
}
