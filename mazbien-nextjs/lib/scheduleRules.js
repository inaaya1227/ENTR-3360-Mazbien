export const EDMONTON = "America/Edmonton";
const WEEKDAYS = new Set(["Mon", "Tue", "Wed", "Thu", "Fri"]);
const DURATIONS = [30, 60, 90, 120, 180];

export function zonedParts(date, timeZone = EDMONTON) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const parts = Object.fromEntries(fmt.formatToParts(date).map((part) => [part.type, part.value]));
  let hour = Number(parts.hour);
  if (hour === 24) hour = 0;
  return {
    weekday: parts.weekday,
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour,
    minute: Number(parts.minute),
  };
}

export function zonedTimeToUtc(year, month, day, hour, minute, timeZone = EDMONTON) {
  let utc = Date.UTC(year, month - 1, day, hour, minute, 0);
  for (let pass = 0; pass < 3; pass += 1) {
    const parts = zonedParts(new Date(utc), timeZone);
    const shown = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, 0);
    const desired = Date.UTC(year, month - 1, day, hour, minute, 0);
    const delta = desired - shown;
    if (delta === 0) break;
    utc += delta;
  }
  return new Date(utc);
}

export function addCalendarDays(date, days) {
  const next = new Date(Date.UTC(date.year, date.month - 1, date.day + days));
  return { year: next.getUTCFullYear(), month: next.getUTCMonth() + 1, day: next.getUTCDate() };
}

export function edmontonDateIso(date = new Date()) {
  const parts = zonedParts(date);
  return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}`;
}

export function mondayOf(isoDate) {
  const [year, month, day] = String(isoDate || "").split("-").map(Number);
  if (!year || !month || !day) return null;
  const noon = zonedTimeToUtc(year, month, day, 12, 0);
  const index = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(zonedParts(noon).weekday);
  if (index < 0) return null;
  return addCalendarDays({ year, month, day }, -index);
}

export function weekRange(monday) {
  const start = zonedTimeToUtc(monday.year, monday.month, monday.day, 0, 0);
  const next = addCalendarDays(monday, 7);
  const end = zonedTimeToUtc(next.year, next.month, next.day, 0, 0);
  return { start, end };
}

export function rangeError(start, end) {
  const from = new Date(start);
  const to = new Date(end);
  if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime()) || to <= from) {
    return "Choose a start and end, with the end after the start.";
  }
  if (to.getTime() - from.getTime() > 14 * 24 * 60 * 60 * 1000) {
    return "The date range can be at most 14 days.";
  }
  return "";
}

export function cleanLabel(value) {
  return String(value || "").replace(/[\r\n]+/g, " ").trim().slice(0, 120);
}

function overlaps(start, end, blockStart, blockEnd) {
  return start.getTime() < blockEnd.getTime() && blockStart.getTime() < end.getTime();
}

export function validateSessions(sessions, { now = new Date(), busy = [] } = {}) {
  const errors = [];
  const parsed = [];

  (Array.isArray(sessions) ? sessions : []).forEach((session, index) => {
    const label = `Session ${index + 1}`;
    const moduleName = cleanLabel(session?.module_name);
    if (!moduleName) {
      errors.push(`${label} needs a module name.`);
      return;
    }
    const start = new Date(session?.starts_at);
    const end = new Date(session?.ends_at);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      errors.push(`${label} (${moduleName}) has a start or end time that cannot be read.`);
      return;
    }
    const minutes = (end.getTime() - start.getTime()) / 60000;
    if (minutes < 30 || minutes > 180) {
      errors.push(`${label} (${moduleName}) must be between 30 and 180 minutes.`);
    }
    if (start.getTime() <= now.getTime()) {
      errors.push(`${label} (${moduleName}) must start in the future.`);
    }
    const startParts = zonedParts(start);
    const endParts = zonedParts(end);
    const sameDay =
      startParts.year === endParts.year && startParts.month === endParts.month && startParts.day === endParts.day;
    if (!WEEKDAYS.has(startParts.weekday) || !sameDay) {
      errors.push(`${label} (${moduleName}) must be on a weekday in America/Edmonton.`);
    }
    const startMinutes = startParts.hour * 60 + startParts.minute;
    const endMinutes = endParts.hour * 60 + endParts.minute;
    if (!sameDay || startMinutes < 9 * 60 || endMinutes > 17 * 60) {
      errors.push(`${label} (${moduleName}) must stay between 9:00 and 17:00 America/Edmonton.`);
    }
    parsed.push({
      module_name: moduleName,
      starts_at: start.toISOString(),
      ends_at: end.toISOString(),
      start,
      end,
      index,
    });
  });

  for (const session of parsed) {
    for (const block of busy) {
      const blockStart = new Date(block.start);
      const blockEnd = new Date(block.end);
      if (Number.isNaN(blockStart.getTime()) || Number.isNaN(blockEnd.getTime())) continue;
      if (overlaps(session.start, session.end, blockStart, blockEnd)) {
        errors.push(`Session ${session.index + 1} (${session.module_name}) overlaps a busy block.`);
        break;
      }
    }
    for (const other of parsed) {
      if (other.index <= session.index) continue;
      if (overlaps(session.start, session.end, other.start, other.end)) {
        errors.push(
          `Session ${session.index + 1} (${session.module_name}) overlaps session ${other.index + 1} (${other.module_name}).`,
        );
      }
    }
  }

  return {
    ok: errors.length === 0 && parsed.length > 0,
    errors: parsed.length === 0 && errors.length === 0 ? ["Add at least one session."] : errors,
    sessions: parsed.map((session) => ({
      module_name: session.module_name,
      starts_at: session.starts_at,
      ends_at: session.ends_at,
    })),
  };
}

export function openSlots({ monday, busy = [], now = new Date() }) {
  const slots = [];
  for (let offset = 0; offset < 5; offset += 1) {
    const day = addCalendarDays(monday, offset);
    for (let minutes = 9 * 60; minutes <= 16 * 60 + 30; minutes += 30) {
      const start = zonedTimeToUtc(day.year, day.month, day.day, Math.floor(minutes / 60), minutes % 60);
      const end = new Date(start.getTime() + 30 * 60000);
      if (start.getTime() <= now.getTime()) continue;
      const blocked = busy.some((block) => {
        const blockStart = new Date(block.start);
        const blockEnd = new Date(block.end);
        return overlaps(start, end, blockStart, blockEnd);
      });
      if (blocked) continue;
      slots.push({ start: start.toISOString(), end: end.toISOString() });
    }
  }
  return slots;
}

export function formatEdmonton(iso, options) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: EDMONTON, ...options }).format(new Date(iso));
}

export const SESSION_DURATIONS = DURATIONS;
