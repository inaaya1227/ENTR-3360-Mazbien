import { TIER_COPY } from "./catalog";

const EXPERIENCE_WEIGHT = {
  None: 24,
  Some: 12,
  Advanced: 4,
};

export function scoreAssessment({ roles = [], departments = [], aiExperience = "Some" }) {
  const roleCount = roles.length;
  const deptCount = departments.length;
  const experiencePoints = EXPERIENCE_WEIGHT[aiExperience] ?? 12;
  const rolePoints = Math.min(roleCount, 10) * 6;
  const deptPoints = Math.min(deptCount, 5) * 8;
  const total = rolePoints + deptPoints + experiencePoints;

  let recommendedTier = "bronze";
  if (total >= 72) recommendedTier = "gold";
  else if (total >= 42) recommendedTier = "silver";

  const breakdown = [
    {
      input: "Role count",
      value: String(roleCount),
      rule: "6 points per role (cap 10)",
      points: rolePoints,
    },
    {
      input: "Department count",
      value: String(deptCount),
      rule: "8 points per department (cap 5)",
      points: deptPoints,
    },
    {
      input: "AI experience",
      value: aiExperience || "—",
      rule: "None 24 / Some 12 / Advanced 4",
      points: experiencePoints,
    },
  ];

  return {
    total,
    recommendedTier,
    thresholds: { silver: 42, gold: 72 },
    breakdown,
    copy: TIER_COPY[recommendedTier],
  };
}

export function resolveDisplayTier(recommendedTier, premiumOverride) {
  return premiumOverride ? "premium" : recommendedTier;
}
