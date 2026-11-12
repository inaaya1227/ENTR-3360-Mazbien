import { CALENDAR_UNAVAILABLE, fetchBusy } from "@/lib/googleCalendar";
import { rangeError } from "@/lib/scheduleRules";
import { bearerToken, requireUser, userClientFromRequest } from "@/lib/supabaseUser";

export async function POST(request) {
  const token = bearerToken(request);
  const supabase = userClientFromRequest(request);
  if (!supabase || !(await requireUser(supabase, token))) {
    return Response.json({ error: "Sign in before checking the calendar." }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Send a start and end as JSON." }, { status: 400 });
  }

  const problem = rangeError(body?.start, body?.end);
  if (problem) return Response.json({ error: problem }, { status: 400 });

  const result = await fetchBusy(new Date(body.start).toISOString(), new Date(body.end).toISOString());
  if (!result.ok) return Response.json({ error: CALENDAR_UNAVAILABLE }, { status: 502 });
  return Response.json({ busy: result.busy });
}
