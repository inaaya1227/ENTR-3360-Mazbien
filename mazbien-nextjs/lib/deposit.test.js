import assert from "node:assert/strict";
import test from "node:test";
import { depositCents, tierRangeLowDollars } from "./deposit.js";

test("deposit is 10 percent of the tier low end plus stored add-on dollars, in cents", () => {
  assert.equal(tierRangeLowDollars("bronze"), 12000);
  assert.equal(tierRangeLowDollars("silver"), 28000);
  assert.equal(tierRangeLowDollars("gold"), 54000);
  assert.equal(tierRangeLowDollars("premium"), null);
  assert.equal(depositCents(12000, 4500), 165000);
  assert.equal(depositCents(28000, 0), 280000);
});
