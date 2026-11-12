import { CALENDAR_UNAVAILABLE, createTrainingEvent, deleteTrainingEvent, fetchBusy } from "@/lib/googleCalendar";
import { cleanLabel, validateSessions } from "@/lib/scheduleRules";
import { bearerToken, requireUser, userClientFromRequest } from "@/lib/supabaseUser";

const ASSESSMENT_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function createdMessage(created) {
  if (!created.length) return CALENDAR_UNAVAILABLE;
  const names = created.map((session) => session.module_name).join(", ");
  return `${CALENDAR_UNAVAILABLE} Created: ${names}. The other sessions were not created.`;
}

export async function POST(request) {
  const token = bearerToken(request);
  const supabase = userClientFromRequest(request);
  if (!supabase || !(await requireUser(supabase, token))) {
    return Response.json({ error: "Sign in before scheduling training." }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Send the assessment and sessions as JSON." }, { status: 400 });
  }

  const assessmentId = String(body?.assessmentId || "").trim();
  if (!ASSESSMENT_ID.test(assessmentId)) {
    return Response.json({ error: "Send a saved assessment id." }, { status: 400 });
  }
  const requested = Array.isArray(body?.sessions) ? body.sessions.slice(0, 10) : [];
  if (!requested.length) return Response.json({ error: "Add at least one session." }, { status: 400 });

  const assessmentResult = await supabase
    .from("assessments")
    .select("id, status, company_name")
    .eq("id", assessmentId)
    .maybeSingle();
  if (assessmentResult.error) return Response.json({ error: assessmentResult.error.message }, { status: 500 });
  const assessment = assessmentResult.data;
  if (!assessment) {
    return Response.json({ error: "That assessment is not available for this consultant." }, { status: 404 });
  }
  if (assessment.status !== "sent_for_review") {
    return Response.json({ error: "Sessions can be scheduled only after the assessment is sent for review." }, { status: 409 });
  }

  const companyName = cleanLabel(assessment.company_name);
  if (!companyName) return Response.json({ error: "This assessment has no company name." }, { status: 400 });

  const shape = validateSessions(requested, { busy: [] });
  if (!shape.ok) return Response.json({ error: shape.errors[0], errors: shape.errors }, { status: 400 });

  const earliest = shape.sessions.reduce((min, session) => (session.starts_at < min ? session.starts_at : min), shape.sessions[0].starts_at);
  const latest = shape.sessions.reduce((max, session) => (session.ends_at > max ? session.ends_at : max), shape.sessions[0].ends_at);
  if (new Date(latest).getTime() - new Date(earliest).getTime() > 14 * 24 * 60 * 60 * 1000) {
    return Response.json({ error: "Schedule these sessions within a 14-day window." }, { status: 400 });
  }

  const existingResult = await supabase
    .from("scheduled_sessions")
    .select("starts_at, ends_at")
    .eq("assessment_id", assessmentId);
  if (existingResult.error) return Response.json({ error: existingResult.error.message }, { status: 500 });

  const busyResult = await fetchBusy(earliest, latest);
  if (!busyResult.ok) return Response.json({ error: CALENDAR_UNAVAILABLE }, { status: 502 });

  const busy = [
    ...busyResult.busy,
    ...(existingResult.data || []).map((row) => ({ start: row.starts_at, end: row.ends_at })),
  ];
  const checked = validateSessions(shape.sessions, { busy });
  if (!checked.ok) return Response.json({ error: checked.errors[0], errors: checked.errors }, { status: 400 });

  const created = [];
  for (const session of checked.sessions) {
    const event = await createTrainingEvent({
      companyName,
      moduleName: session.module_name,
      startsAt: session.starts_at,
      endsAt: session.ends_at,
    });
    if (!event.ok) {
      return Response.json({ error: createdMessage(created), created }, { status: 502 });
    }

    const insert = await supabase
      .from("scheduled_sessions")
      .insert({
        assessment_id: assessmentId,
        module_name: session.module_name,
        starts_at: session.starts_at,
        ends_at: session.ends_at,
        google_event_id: event.eventId,
      })
      .select("id, module_name, starts_at, ends_at")
      .single();
    if (insert.error) {
      console.error("scheduled_sessions insert failed", insert.error.message);
      await deleteTrainingEvent(event.eventId);
      return Response.json(
        {
          error: created.length
            ? `A session could not be saved. Created: ${created.map((item) => item.module_name).join(", ")}.`
            : "A session could not be saved. Nothing else was scheduled.",
          created,
        },
        { status: 500 },
      );
    }
    created.push(insert.data);
  }

  return Response.json({ created });
}
