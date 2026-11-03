import assert from "node:assert/strict";
import test from "node:test";
import { messageText, shouldRetryCompletion } from "./openrouter.js";

test("empty message content is not treated as a draft", () => {
  assert.equal(messageText({ content: null }), "");
  assert.equal(messageText({ content: "   " }), "");
  assert.equal(messageText(undefined), "");
});

test("string and part-array content are both read", () => {
  assert.equal(messageText({ content: " Ready " }), "Ready");
  assert.equal(
    messageText({
      content: [
        { type: "text", text: "Silver tier. " },
        { type: "text", text: "Score stays 48." },
      ],
    }),
    "Silver tier. Score stays 48.",
  );
});

test("an empty completion is retried once, and a finished draft is not", () => {
  assert.equal(shouldRetryCompletion({ status: 200, text: "", attempt: 0 }), true);
  assert.equal(shouldRetryCompletion({ status: 200, text: "", attempt: 1 }), false);
  assert.equal(shouldRetryCompletion({ status: 429, text: "", attempt: 0 }), true);
  assert.equal(shouldRetryCompletion({ status: 200, text: "Ready", attempt: 0 }), false);
});
