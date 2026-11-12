"use client";

import { useEffect, useMemo, useState } from "react";
import { getSupabaseClient } from "@/lib/supabaseClient";
import {
  SESSION_DURATIONS,
  edmontonDateIso,
  formatEdmonton,
  mondayOf,
  openSlots,
  validateSessions,
  weekRange,
  zonedParts,
} from "@/lib/scheduleRules";
import ui from "./ui.module.css";

const UNAVAILABLE = "Google Calendar could not be reached. You can keep working without scheduling.";

async function authorizedPost(url, body) {
  const supabase = getSupabaseClient();
  const session = supabase ? (await supabase.auth.getSession()).data.session : null;
  if (!session?.access_token) return { ok: false, error: "Sign in again before scheduling." };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) return { ok: false, error: data.error || UNAVAILABLE, errors: data.errors || [], created: data.created || [] };
    return { ok: true, data };
  } catch {
    return { ok: false, error: UNAVAILABLE, errors: [], created: [] };
  }
}

function dayKey(iso) {
  const parts = zonedParts(new Date(iso));
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export default function ScheduleSessions({ assessmentId, modules }) {
  const [weekDate, setWeekDate] = useState(edmontonDateIso());
  const [busy, setBusy] = useState([]);
  const [scheduled, setScheduled] = useState([]);
  const [pending, setPending] = useState([]);
  const [moduleName, setModuleName] = useState(modules[0] || "");
  const [slotStart, setSlotStart] = useState("");
  const [duration, setDuration] = useState(60);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [loadedWeek, setLoadedWeek] = useState("");

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase || !assessmentId) return undefined;
    let active = true;
    supabase
      .from("scheduled_sessions")
      .select("id, module_name, starts_at, ends_at")
      .eq("assessment_id", assessmentId)
      .order("starts_at")
      .then(({ data, error }) => {
        if (!active) return;
        if (error) {
          setMessage("Scheduled sessions could not be loaded. The rest of the dashboard is unchanged.");
          return;
        }
        setScheduled(data || []);
      });
    return () => {
      active = false;
    };
  }, [assessmentId]);

  const slots = useMemo(() => {
    const monday = mondayOf(loadedWeek);
    if (!monday) return [];
    return openSlots({
      monday,
      busy: [...busy, ...scheduled.map((session) => ({ start: session.starts_at, end: session.ends_at }))],
    });
  }, [loadedWeek, busy, scheduled]);

  const groups = useMemo(() => {
    const next = [];
    for (const slot of slots) {
      const key = dayKey(slot.start);
      let group = next.find((item) => item.key === key);
      if (!group) {
        group = {
          key,
          label: formatEdmonton(slot.start, { weekday: "short", month: "short", day: "numeric" }),
          slots: [],
        };
        next.push(group);
      }
      group.slots.push(slot);
    }
    return next;
  }, [slots]);

  async function loadWeek() {
    const monday = mondayOf(weekDate);
    if (!monday) {
      setErrors(["Choose a week."]);
      return;
    }
    setErrors([]);
    setMessage("");
    setConfirming(false);
    setLoading(true);
    const range = weekRange(monday);
    const result = await authorizedPost("/api/calendar/availability", {
      start: range.start.toISOString(),
      end: range.end.toISOString(),
    });
    setLoading(false);
    if (!result.ok) {
      setBusy([]);
      setLoadedWeek("");
      setErrors([result.error]);
      return;
    }
    setBusy(result.data.busy || []);
    setLoadedWeek(weekDate);
    setSlotStart("");
  }

  function addSession() {
    if (!moduleName || !slotStart) {
      setErrors(["Choose a module and an open time."]);
      return;
    }
    const ends = new Date(new Date(slotStart).getTime() + duration * 60000).toISOString();
    const occupied = [
      ...busy,
      ...scheduled.map((session) => ({ start: session.starts_at, end: session.ends_at })),
    ];
    const result = validateSessions([...pending, { module_name: moduleName, starts_at: slotStart, ends_at: ends }], {
      busy: occupied,
    });
    if (!result.ok) {
      setErrors(result.errors);
      setConfirming(false);
      return;
    }
    setPending(result.sessions);
    setErrors([]);
    setConfirming(false);
    setMessage("");
  }

  async function createSessions() {
    setCreating(true);
    setErrors([]);
    setMessage("");
    const result = await authorizedPost("/api/calendar/sessions", { assessmentId, sessions: pending });
    setCreating(false);
    setConfirming(false);
    const created = result.ok ? result.data?.created || [] : result.created || [];
    if (created.length) {
      setScheduled((current) => [...current, ...created].sort((a, b) => a.starts_at.localeCompare(b.starts_at)));
      const savedStarts = new Set(created.map((session) => session.starts_at));
      setPending((current) => current.filter((session) => !savedStarts.has(session.starts_at)));
      setLoadedWeek("");
      setBusy([]);
    }
    if (!result.ok) {
      setErrors(result.errors?.length ? result.errors : [result.error]);
      return;
    }
    setMessage("Sessions are on the calendar.");
  }

  return (
    <div className={ui.card} style={{ marginBottom: "1rem" }}>
      <div className={ui.header}>
        <h3>Schedule training sessions</h3>
      </div>
      <div className={ui.body}>
        <p className={ui.hint}>
          Times are America/Edmonton, weekdays 9:00–17:00, 30–180 minutes. Nothing is created until you confirm.
        </p>
        <div className={ui.grid2} style={{ marginTop: "0.85rem" }}>
          <label className={ui.field}>
            <span className={ui.label}>Week</span>
            <input className={ui.input} type="date" value={weekDate} onChange={(event) => setWeekDate(event.target.value)} />
          </label>
          <div className={ui.field}>
            <span className={ui.label}>Open times</span>
            <button type="button" className={ui.btnSecondary} disabled={loading} onClick={loadWeek}>
              {loading ? "Checking the calendar…" : "Show open times"}
            </button>
          </div>
        </div>

        {groups.length ? (
          groups.map((group) => (
            <div key={group.key} style={{ marginBottom: "0.75rem" }}>
              <div className={ui.label}>{group.label}</div>
              <div className={ui.chips} style={{ marginTop: "0.35rem" }}>
                {group.slots.map((slot) => (
                  <button
                    key={slot.start}
                    type="button"
                    className={slot.start === slotStart ? ui.chipOn : ui.chip}
                    onClick={() => {
                      setSlotStart(slot.start);
                      setConfirming(false);
                    }}
                  >
                    {formatEdmonton(slot.start, { hour: "numeric", minute: "2-digit" })}
                  </button>
                ))}
              </div>
            </div>
          ))
        ) : loadedWeek ? (
          <p className={ui.hint}>No open 30-minute times in that week.</p>
        ) : null}

        <div className={ui.grid2}>
          <label className={ui.field}>
            <span className={ui.label}>Module</span>
            <select className={ui.select} value={moduleName} onChange={(event) => setModuleName(event.target.value)}>
              {modules.length ? null : <option value="">No modules on this draft</option>}
              {modules.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <label className={ui.field}>
            <span className={ui.label}>Length</span>
            <select
              className={ui.select}
              value={String(duration)}
              onChange={(event) => setDuration(Number(event.target.value))}
            >
              {SESSION_DURATIONS.map((minutes) => (
                <option key={minutes} value={minutes}>
                  {minutes} minutes
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="button" className={ui.btnSecondary} onClick={addSession}>
          Add session
        </button>

        {pending.length ? (
          <ul style={{ margin: "0.9rem 0 0 1.1rem", fontSize: "0.88rem" }}>
            {pending.map((session) => (
              <li key={`${session.module_name}-${session.starts_at}`}>
                {session.module_name}: {formatEdmonton(session.starts_at, { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                {" – "}
                {formatEdmonton(session.ends_at, { hour: "numeric", minute: "2-digit" })}
                <button
                  type="button"
                  className={ui.btnSecondary}
                  style={{ marginLeft: "0.5rem" }}
                  onClick={() => {
                    setPending((current) => current.filter((item) => item.starts_at !== session.starts_at || item.module_name !== session.module_name));
                    setConfirming(false);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        {errors.map((error) => (
          <p key={error} className={ui.error} style={{ marginTop: "0.75rem" }}>
            {error}
          </p>
        ))}
        {message ? <p className={ui.hint} style={{ marginTop: "0.75rem" }}>{message}</p> : null}

        <div className={ui.label} style={{ marginTop: "1rem" }}>
          Already scheduled
        </div>
        {scheduled.length ? (
          <ul style={{ margin: "0.35rem 0 0 1.1rem", fontSize: "0.88rem" }}>
            {scheduled.map((session) => (
              <li key={session.id || `${session.module_name}-${session.starts_at}`}>
                {session.module_name}: {formatEdmonton(session.starts_at, { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                {" – "}
                {formatEdmonton(session.ends_at, { hour: "numeric", minute: "2-digit" })}
              </li>
            ))}
          </ul>
        ) : (
          <p className={ui.hint}>None yet.</p>
        )}
      </div>
      <div className={ui.footer}>
        <span className={ui.hint}>Events use the company name and module name only.</span>
        {confirming ? (
          <button type="button" className={ui.btn} disabled={creating || !pending.length} onClick={createSessions}>
            {creating ? "Creating…" : "Confirm and create sessions"}
          </button>
        ) : (
          <button
            type="button"
            className={ui.btn}
            disabled={!pending.length}
            onClick={() => {
              const occupied = [
                ...busy,
                ...scheduled.map((session) => ({ start: session.starts_at, end: session.ends_at })),
              ];
              const result = validateSessions(pending, { busy: occupied });
              if (!result.ok) {
                setErrors(result.errors);
                return;
              }
              setErrors([]);
              setConfirming(true);
            }}
          >
            Review sessions
          </button>
        )}
      </div>
    </div>
  );
}
