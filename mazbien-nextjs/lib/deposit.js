import { TIER_COPY } from "./catalog.js";

export function tierRangeLowDollars(tier) {
  const price = TIER_COPY[tier]?.price || "";
  const match = String(price).match(/\$(\d{1,3}(?:,\d{3})*)/);
  if (!match) return null;
  return Number(match[1].replaceAll(",", ""));
}

export function depositCents(tierLowDollars, addonDollars) {
  const base = Number(tierLowDollars);
  const addons = Number(addonDollars);
  if (!Number.isFinite(base) || base < 0 || !Number.isFinite(addons) || addons < 0) return null;
  return Math.round((base + addons) * 10);
}
