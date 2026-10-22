import { TIER_COPY } from "./catalog";

export const ADDON_CATALOG = [
  {
    id: "change-office-hours",
    name: "Change-management office hours",
    detail: "Weekly working sessions for teams that are new to AI.",
    why: "A department reports no AI experience — adoption risk is the binding constraint, not content volume.",
    price: 4500,
  },
  {
    id: "champion-network",
    name: "Department champion network",
    detail: "Local owners who keep the labs going after Mazbien leaves.",
    why: "Multiple departments need local owners so labs survive after Mazbien leaves.",
    price: 6000,
  },
  {
    id: "train-the-trainer",
    name: "Train-the-trainer cascade",
    detail: "Internal trainers who can teach the next cohort.",
    why: "Headcount tier is too large for a single consultant-led cohort.",
    price: 8500,
  },
  {
    id: "governance-lab",
    name: "AI governance & allowed-use lab",
    detail: "Policy, tool boundaries, and what staff may paste into a model.",
    why: "Engineering or Legal is in scope — policy and tool boundaries should be explicit.",
    price: 7000,
  },
  {
    id: "deflection-measurement",
    name: "Deflection measurement pack",
    detail: "Before-and-after ticket metrics for customer service.",
    why: "Customer Service is selected — leadership will ask for ticket-volume proof.",
    price: 3500,
  },
  {
    id: "executive-brief",
    name: "90-day executive impact brief",
    detail: "One measurable outcome for leadership after the labs.",
    why: "Keeps the engagement tied to one measurable outcome after the labs.",
    price: 2500,
  },
];

const ADDON_BY_ID = Object.fromEntries(ADDON_CATALOG.map((item) => [item.id, item]));

function pushId(ids, id) {
  if (!ids.includes(id)) ids.push(id);
}

export function suggestAddons(draft, recommendedTier) {
  const ids = [];
  const size = draft.size || "";
  const large = size === "501-2000" || size === "2000+";
  const departments = draft.departments || [];

  if (departments.some((department) => draft.departmentExperience?.[department] === "None")) {
    pushId(ids, "change-office-hours");
  }
  if (departments.length >= 3 || recommendedTier === "gold") pushId(ids, "champion-network");
  if (large) pushId(ids, "train-the-trainer");
  if (departments.includes("Engineering") || departments.includes("Legal & Compliance")) pushId(ids, "governance-lab");
  if (departments.includes("Customer Service")) pushId(ids, "deflection-measurement");
  if (ids.length === 0) pushId(ids, "executive-brief");

  return ids.map((id) => ADDON_BY_ID[id]);
}

const CATALOG_BY_NAME = new Map(ADDON_CATALOG.map((item) => [item.name, item]));

export function withCatalogPrices(rows) {
  return (rows || []).map((row) => {
    const known = CATALOG_BY_NAME.get(row.name);
    return {
      id: row.id,
      slug: known?.id,
      name: row.name,
      detail: row.description || known?.detail || "",
      why: known?.why || "",
      price: Number(row.price),
    };
  });
}

export function suggestedIdsFor(draft, recommendedTier, catalog = ADDON_CATALOG) {
  const suggestedSlugs = new Set(
    suggestAddons(draft, recommendedTier)
      .filter(Boolean)
      .map((item) => item.id),
  );
  return new Set(catalog.filter((item) => suggestedSlugs.has(item.slug || item.id)).map((item) => item.id));
}

export function isCatalogAddonSelected(draft, addonId, suggestedIds) {
  const override = draft.addonOverrides?.[addonId];
  if (typeof override === "boolean") return override;
  return suggestedIds.has(addonId);
}

export function isCustomAddonSelected(draft, addonId) {
  return draft.addonOverrides?.[addonId] !== false;
}

export function buildSelectedAddons(draft, recommendedTier, catalog = ADDON_CATALOG) {
  const suggestedIds = suggestedIdsFor(draft, recommendedTier, catalog);
  const selectedCatalog = catalog.filter((item) => isCatalogAddonSelected(draft, item.id, suggestedIds)).map((item) => ({
    id: item.id,
    name: item.name,
    price: Number(item.price) || 0,
    custom: false,
  }));
  const custom = (draft.customAddons || [])
    .filter((item) => item?.id && item?.name?.trim() && isCustomAddonSelected(draft, item.id))
    .map((item) => ({
      id: item.id,
      name: item.name.trim(),
      price: Number(item.price) || 0,
      custom: true,
    }));
  return [...selectedCatalog, ...custom];
}

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatAddonPrice(amount) {
  return money.format(Number(amount) || 0);
}

function formatRange(low, high) {
  return `${money.format(low)} – ${money.format(high)}`;
}

export function buildQuote(displayTier, selectedAddons = []) {
  const tier = TIER_COPY[displayTier] || TIER_COPY.bronze;
  const lines = selectedAddons.map((item) => ({
    id: item.id,
    name: item.name,
    price: Number(item.price) || 0,
    custom: Boolean(item.custom),
  }));
  const addonTotal = lines.reduce((sum, line) => sum + line.price, 0);
  const premium = displayTier === "premium" || tier.low == null;

  if (premium) {
    return {
      baseLabel: "Custom scoped",
      lines,
      addonTotal,
      totalLabel: addonTotal > 0 ? `Custom scoped + ${formatAddonPrice(addonTotal)}` : "Custom scoped",
    };
  }

  return {
    baseLabel: formatRange(tier.low, tier.high),
    lines,
    addonTotal,
    totalLow: tier.low + addonTotal,
    totalHigh: tier.high + addonTotal,
    totalLabel: formatRange(tier.low + addonTotal, tier.high + addonTotal),
  };
}
