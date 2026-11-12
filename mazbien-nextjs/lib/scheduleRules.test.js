import assert from "node:assert/strict";
import test from "node:test";
import {
  mondayOf,
  openSlots,
  rangeError,
  validateSessions,
  zonedParts,
  zonedTimeToUtc,
} from "./scheduleRules.js";

test("Edmonton winter and summer map to the right UTC instants", () => {
  assert.equal(zonedTimeToUtc(2026, 1, 15, 9, 0).toISOString(), "2026-01-15T16:00:00.000Z");
  assert.equal(zonedTimeToUtc(2026, 7, 15, 9, 0).toISOString(), "2026-07-15T15:00:00.000Z");
  assert.equal(zonedParts(new Date("2026-01-15T16:00:00.000Z")).hour, 9);
});

test("a session must be a future weekday inside 9:00 to 17:00", () => {
  const start = zonedTimeToUtc(2026, 11, 16, 9, 0);
  const good = validateSessions(
    [{ module_name: "Prompt foundations", starts_at: start.toISOString(), ends_at: new Date(start.getTime() + 60 * 60000).toISOString() }],
    { now: new Date("2026-11-01T00:00:00.000Z"), busy: [] },
  );
  assert.equal(good.ok, true);

  const saturday = zonedTimeToUtc(2026, 11, 14, 10, 0);
  assert.equal(zonedParts(saturday).weekday, "Sat");
  const weekend = validateSessions(
    [{ module_name: "Lab", starts_at: saturday.toISOString(), ends_at: new Date(saturday.getTime() + 60 * 60000).toISOString() }],
    { now: new Date("2026-11-01T00:00:00.000Z") },
  );
  assert.equal(weekend.ok, false);
  assert.match(weekend.errors[0], /weekday/);

  const late = zonedTimeToUtc(2026, 11, 16, 16, 30);
  const tooLate = validateSessions(
    [{ module_name: "Lab", starts_at: late.toISOString(), ends_at: new Date(late.getTime() + 60 * 60000).toISOString() }],
    { now: new Date("2026-11-01T00:00:00.000Z") },
  );
  assert.match(tooLate.errors.join(" "), /9:00 and 17:00/);

  const short = validateSessions(
    [{ module_name: "Lab", starts_at: start.toISOString(), ends_at: new Date(start.getTime() + 20 * 60000).toISOString() }],
    { now: new Date("2026-11-01T00:00:00.000Z") },
  );
  assert.match(short.errors.join(" "), /30 and 180/);

  const past = validateSessions(
    [{ module_name: "Lab", starts_at: start.toISOString(), ends_at: new Date(start.getTime() + 60 * 60000).toISOString() }],
    { now: new Date("2026-11-20T00:00:00.000Z") },
  );
  assert.match(past.errors.join(" "), /future/);
});

test("sessions cannot overlap a busy block or each other", () => {
  const start = zonedTimeToUtc(2026, 11, 16, 9, 0);
  const firstEnd = new Date(start.getTime() + 60 * 60000);
  const overlap = validateSessions(
    [
      { module_name: "Lab A", starts_at: start.toISOString(), ends_at: firstEnd.toISOString() },
      { module_name: "Lab B", starts_at: new Date(start.getTime() + 30 * 60000).toISOString(), ends_at: new Date(start.getTime() + 90 * 60000).toISOString() },
    ],
    { now: new Date("2026-11-01T00:00:00.000Z") },
  );
  assert.match(overlap.errors.join(" "), /overlaps session 2/);

  const busy = validateSessions(
    [{ module_name: "Lab A", starts_at: start.toISOString(), ends_at: firstEnd.toISOString() }],
    { now: new Date("2026-11-01T00:00:00.000Z"), busy: [{ start: start.toISOString(), end: firstEnd.toISOString() }] },
  );
  assert.match(busy.errors.join(" "), /busy block/);
});

test("open slots skip busy time and stay on weekdays", () => {
  const monday = mondayOf("2026-11-18");
  assert.deepEqual(monday, { year: 2026, month: 11, day: 16 });
  const blocked = zonedTimeToUtc(2026, 11, 16, 9, 0);
  const slots = openSlots({
    monday,
    now: new Date("2026-11-01T00:00:00.000Z"),
    busy: [{ start: blocked.toISOString(), end: new Date(blocked.getTime() + 30 * 60000).toISOString() }],
  });
  assert.equal(slots.some((slot) => slot.start === blocked.toISOString()), false);
  assert.equal(slots[0].start, new Date(blocked.getTime() + 30 * 60000).toISOString());
  assert.equal(slots.length, 5 * 16 - 1);
});

test("availability cannot cover more than 14 days", () => {
  assert.equal(rangeError("2026-11-01T00:00:00.000Z", "2026-11-20T00:00:00.000Z"), "The date range can be at most 14 days.");
  assert.equal(rangeError("2026-11-01T00:00:00.000Z", "2026-11-08T00:00:00.000Z"), "");
});
