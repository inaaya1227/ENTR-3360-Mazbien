import assert from "node:assert/strict";
import test from "node:test";
import { reviewModelSummary } from "./aiSummary.js";

const facts = {
  companyName: "Apex",
  industry: "Logistics",
  size: "51-150",
  departments: [{ department: "Sales", aiExperience: "Some" }],
  roles: [{ name: "Account Executive", department: "Sales", priority: "High" }],
  tier: "silver",
  score: 48,
  fixedPrice: "$12,000 – $18,000",
  selectedAddons: ["Change-management office hours"],
};

const addons = [4500];

function reply(summary) {
  return JSON.stringify(summary);
}

test("an invented role is rejected", () => {
  const result = reviewModelSummary(
    reply({
      overview: "Apex stays on the silver tier.",
      roles: [{ role: "Chief Imaginary Officer", why: "Owns a made-up function." }],
    }),
    facts,
    addons,
  );
  assert.equal(result.ok, false);
  assert.equal(result.reason, "role");
});

test("a tier word other than the assessment tier is rejected", () => {
  const result = reviewModelSummary(
    reply({
      overview: "Move Apex to the gold tier.",
      roles: [{ role: "Account Executive", why: "Owns the pipeline." }],
    }),
    facts,
    addons,
  );
  assert.equal(result.ok, false);
  assert.equal(result.reason, "tier");
});

test("a dollar amount that is not in the fixed price or an add-on is rejected", () => {
  const result = reviewModelSummary(
    reply({
      overview: "The engagement should be billed at $15,000.",
      roles: [{ role: "Account Executive", why: "Owns the pipeline." }],
    }),
    facts,
    addons,
  );
  assert.equal(result.ok, false);
  assert.equal(result.reason, "price");
});

test("malformed JSON is rejected", () => {
  assert.equal(reviewModelSummary("{overview: true", facts, addons).reason, "json");
  assert.equal(reviewModelSummary("Sure, here is the summary.", facts, addons).reason, "json");
});

test("a valid reply wrapped in a code fence is parsed and accepted", () => {
  const fenced = [
    "```json",
    reply({
      overview: "Apex stays on the silver tier. The fixed price is $12,000 – $18,000, plus the $4,500 add-on.",
      roles: [{ role: "Account Executive", why: "Owns the pipeline." }],
    }),
    "```",
  ].join("\n");
  const result = reviewModelSummary(fenced, facts, addons);
  assert.equal(result.ok, true);
  assert.equal(result.summary.ai_generated, true);
  assert.equal(result.summary.roles[0].role, "Account Executive");
});
