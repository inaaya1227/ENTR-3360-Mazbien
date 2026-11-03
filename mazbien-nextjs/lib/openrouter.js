const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const RETRY_STATUSES = new Set([408, 429, 500, 502, 503, 504]);

export function messageText(message) {
  const content = message?.content;
  if (typeof content === "string") return content.trim();
  if (!Array.isArray(content)) return "";
  return content
    .map((part) => {
      if (typeof part === "string") return part;
      if (typeof part?.text === "string") return part.text;
      return "";
    })
    .join("")
    .trim();
}

export function shouldRetryCompletion({ status, text, attempt }) {
  if (attempt > 0) return false;
  if (RETRY_STATUSES.has(status)) return true;
  return status === 200 && !text;
}

function redact(value) {
  return String(value ?? "").replace(/sk-or-[a-z0-9-]+/gi, "[redacted]");
}

function logOpenRouter({ status, id, finishReason, choicesEmpty, contentEmpty, errorBody }) {
  const error =
    errorBody == null ? null : redact(typeof errorBody === "string" ? errorBody : JSON.stringify(errorBody)).slice(0, 500);
  console.error("[openrouter]", { status, id: id || null, finish_reason: finishReason || null, choicesEmpty, contentEmpty, error });
}

function failure(message, status) {
  const error = new Error(message);
  error.status = status;
  return error;
}

async function requestCompletion({ apiKey, model, messages, maxTokens, disableReasoning }) {
  const body = { model, messages, max_tokens: maxTokens };
  if (disableReasoning) body.reasoning = { effort: "none" };

  const response = await fetch(OPENROUTER_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.OPENROUTER_SITE_URL?.trim() || "https://entr-3360-mazbien.vercel.app",
      "X-Title": "Mazbien",
    },
    body: JSON.stringify(body),
  });
  const payload = await response.json().catch(() => null);
  const choice = payload?.choices?.[0];
  const text = messageText(choice?.message);
  logOpenRouter({
    status: response.status,
    id: payload?.id,
    finishReason: choice?.finish_reason,
    choicesEmpty: !payload?.choices?.length,
    contentEmpty: !text,
    errorBody: payload?.error || null,
  });
  return { response, payload, choice, text };
}

export async function completeChat(messages, options = {}) {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim();
  if (!apiKey) throw failure("OpenRouter is not configured.", 500);

  const model = options.model?.trim() || process.env.OPENROUTER_MODEL?.trim();
  if (!model) throw failure("Set OPENROUTER_MODEL on the server.", 500);

  const requestedTokens = options.maxTokens ?? 800;
  let disableReasoning = true;
  let last = null;

  for (let attempt = 0; attempt < 2; attempt += 1) {
    if (attempt > 0) await new Promise((resolve) => setTimeout(resolve, 400));
    const maxTokens = attempt === 0 ? requestedTokens : Math.max(requestedTokens, 1600);
    last = await requestCompletion({ apiKey, model, messages, maxTokens, disableReasoning });

    if (last.response.ok && last.text) return last.text;

    const rejectedReasoning =
      !last.response.ok &&
      last.response.status === 400 &&
      /reasoning/i.test(JSON.stringify(last.payload?.error || ""));
    if (rejectedReasoning) disableReasoning = false;

    if (!shouldRetryCompletion({ status: last.response.status, text: last.text, attempt }) && !rejectedReasoning) {
      break;
    }
  }

  if (!last.response.ok) {
    const detail = last.payload?.error?.message || last.payload?.error || "OpenRouter request failed.";
    throw failure(redact(typeof detail === "string" ? detail : "OpenRouter request failed."), last.response.status);
  }

  const finishReason = last.choice?.finish_reason || "unknown";
  throw failure(
    `OpenRouter returned an empty draft (finish_reason: ${finishReason}, id: ${last.payload?.id || "none"}).`,
    502,
  );
}
