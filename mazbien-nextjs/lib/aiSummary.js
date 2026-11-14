export const SUMMARY_SYSTEM_PROMPT =
  'Reply with JSON only. Do not use markdown or a code fence. The only shape is {"overview": string, "roles": [{"role": string, "why": string}]}. Use only the facts in the user JSON. overview is short plain text. Every roles[].role must be copied exactly from a role name in the facts. Do not add a role. The tier, score, and fixedPrice are already decided. Do not name a different tier, do not invent a score, and do not invent a dollar amount.';

export const SUMMARY_UNAVAILABLE =
  "The AI summary is unavailable right now. You can write one by hand or use the template.";

const TIER_WORD = "\\b(bronze|silver|gold|premium)\\b";

function moneyToCents(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return null;
  return Math.round(number * 100);
}

export function dollarAmounts(text) {
  const amounts = [];
  const pattern = /\$\s*(\d+(?:,\d{3})*)(?:\.(\d{1,2}))?/g;
  for (const match of String(text || "").matchAll(pattern)) {
    const cents = moneyToCents(`${match[1].replace(/,/g, "")}${match[2] ? `.${match[2]}` : ""}`);
    if (cents != null) amounts.push(cents);
  }
  return amounts;
}

export function allowedPriceCents(fixedPrice, addonPrices) {
  const allowed = new Set(dollarAmounts(fixedPrice));
  for (const price of addonPrices || []) {
    const cents = moneyToCents(price);
    if (cents != null) allowed.add(cents);
  }
  return allowed;
}

export function stripCodeFence(text) {
  const trimmed = String(text || "").trim();
  const fenced = trimmed.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);
  return fenced ? fenced[1].trim() : trimmed;
}

export function parseSummaryJson(text) {
  let value;
  try {
    value = JSON.parse(stripCodeFence(text));
  } catch {
    return { ok: false, reason: "json" };
  }
  if (!value || typeof value !== "object" || Array.isArray(value)) return { ok: false, reason: "shape" };
  if (typeof value.overview !== "string" || !Array.isArray(value.roles)) return { ok: false, reason: "shape" };
  const roles = [];
  for (const item of value.roles) {
    if (!item || typeof item !== "object" || Array.isArray(item)) return { ok: false, reason: "shape" };
    if (typeof item.role !== "string" || typeof item.why !== "string") return { ok: false, reason: "shape" };
    roles.push({ role: item.role.trim(), why: item.why });
  }
  return { ok: true, summary: { overview: value.overview, roles } };
}

function summaryText(summary) {
  return [summary.overview, ...summary.roles.flatMap((item) => [item.role, item.why])].join("\n");
}

export function reviewModelSummary(text, facts, addonPrices) {
  const parsed = parseSummaryJson(text);
  if (!parsed.ok) return parsed;

  const allowedRoles = new Set((facts?.roles || []).map((role) => String(role?.name || "").trim()).filter(Boolean));
  for (const item of parsed.summary.roles) {
    if (!allowedRoles.has(item.role)) return { ok: false, reason: "role" };
  }

  const body = summaryText(parsed.summary);
  const tier = String(facts?.tier || "").toLowerCase();
  const tierWords = body.match(new RegExp(TIER_WORD, "gi")) || [];
  if (tierWords.some((word) => word.toLowerCase() !== tier)) return { ok: false, reason: "tier" };

  const allowed = allowedPriceCents(facts?.fixedPrice, addonPrices);
  if (dollarAmounts(body).some((cents) => !allowed.has(cents))) return { ok: false, reason: "price" };

  return { ok: true, summary: { ...parsed.summary, ai_generated: true } };
}

export function templateSummary(facts) {
  const company = facts?.companyName || "This client";
  const tier = facts?.tier || "unspecified";
  const score = facts?.score == null || facts?.score === "" ? "unspecified" : String(facts.score);
  const price = facts?.fixedPrice ? ` The fixed price is ${facts.fixedPrice}.` : "";
  return {
    overview: `${company} is recommended at the ${tier} tier. The rule-engine score is ${score}.${price} This text was written by the app.`,
    roles: (facts?.roles || [])
      .filter((role) => role?.name)
      .map((role) => ({
        role: role.name,
        why: `${role.name} is part of this assessment${role.department ? ` in ${role.department}` : ""}${role.priority ? ` at ${role.priority} priority` : ""}.`,
      })),
    ai_generated: false,
  };
}

export function formFromSummary(saved, roleNames) {
  if (saved && typeof saved === "object" && typeof saved.overview === "string" && Array.isArray(saved.roles)) {
    return {
      overview: saved.overview,
      roles: saved.roles
        .filter((item) => item && typeof item.role === "string")
        .map((item) => ({ role: item.role, why: typeof item.why === "string" ? item.why : "" })),
      ai_generated: saved.ai_generated === true,
    };
  }
  return {
    overview: "",
    roles: (roleNames || []).filter(Boolean).map((role) => ({ role, why: "" })),
    ai_generated: false,
  };
}

export function normalizeHandSummary(value) {
  const form = formFromSummary(value, []);
  if (!value || typeof value.overview !== "string" || !Array.isArray(value.roles)) return null;
  return form;
}
