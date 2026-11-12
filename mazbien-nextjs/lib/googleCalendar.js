import { google } from "googleapis";

const SCOPE = "https://www.googleapis.com/auth/calendar";
const TIMEOUT_MS = 8000;
const REQUEST_TIMEOUT = { timeout: TIMEOUT_MS };

export const CALENDAR_UNAVAILABLE = "Google Calendar could not be reached. You can keep working without scheduling.";

function readConfig() {
  const encoded = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_B64?.trim();
  const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim();
  if (!encoded || !calendarId) return null;
  try {
    const json = JSON.parse(Buffer.from(encoded, "base64").toString("utf8"));
    if (!json?.client_email || !json?.private_key) return null;
    return {
      calendarId,
      credentials: { client_email: json.client_email, private_key: json.private_key },
    };
  } catch {
    return null;
  }
}

function logGoogleError(error) {
  const status = error?.response?.status ?? error?.code ?? 0;
  const body = error?.response?.data ?? error?.message ?? "";
  console.error(status, typeof body === "string" ? body : JSON.stringify(body));
}

function clientFromEnv() {
  const config = readConfig();
  if (!config) {
    console.error(0, "Google Calendar is not configured");
    return null;
  }
  const auth = new google.auth.GoogleAuth({
    credentials: config.credentials,
    scopes: [SCOPE],
  });
  return {
    calendarId: config.calendarId,
    calendar: google.calendar({ version: "v3", auth, timeout: TIMEOUT_MS }),
  };
}

export async function fetchBusy(timeMin, timeMax) {
  const client = clientFromEnv();
  if (!client) return { ok: false };
  try {
    const response = await client.calendar.freebusy.query(
      {
        requestBody: {
          timeMin,
          timeMax,
          timeZone: "America/Edmonton",
          items: [{ id: client.calendarId }],
        },
      },
      REQUEST_TIMEOUT,
    );
    const entry = response.data?.calendars?.[client.calendarId];
    if (entry?.errors?.length) {
      console.error(response.status || 200, JSON.stringify(response.data));
      return { ok: false };
    }
    return {
      ok: true,
      busy: (entry?.busy || []).map((block) => ({ start: block.start, end: block.end })),
    };
  } catch (error) {
    logGoogleError(error);
    return { ok: false };
  }
}

export async function createTrainingEvent({ companyName, moduleName, startsAt, endsAt }) {
  const client = clientFromEnv();
  if (!client) return { ok: false };
  try {
    const response = await client.calendar.events.insert(
      {
        calendarId: client.calendarId,
        requestBody: {
          summary: `${companyName} — ${moduleName}`,
          description: `${companyName}: ${moduleName}`,
          start: { dateTime: startsAt, timeZone: "America/Edmonton" },
          end: { dateTime: endsAt, timeZone: "America/Edmonton" },
        },
      },
      REQUEST_TIMEOUT,
    );
    if (!response.data?.id) {
      console.error(response.status || 0, JSON.stringify(response.data || {}));
      return { ok: false };
    }
    return { ok: true, eventId: response.data.id };
  } catch (error) {
    logGoogleError(error);
    return { ok: false };
  }
}

export async function deleteTrainingEvent(eventId) {
  const client = clientFromEnv();
  if (!client) return;
  try {
    await client.calendar.events.delete({ calendarId: client.calendarId, eventId }, REQUEST_TIMEOUT);
  } catch (error) {
    logGoogleError(error);
  }
}
