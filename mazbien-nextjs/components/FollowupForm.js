"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { generateFollowups } from "@/lib/followups";
import { intakeIsComplete } from "@/lib/draftStore";
import { useDraft } from "@/lib/draftContext";
import ui from "./ui.module.css";

export default function FollowupForm() {
  const router = useRouter();
  const { draft, setDraft, ready } = useDraft();

  const questions = useMemo(() => generateFollowups(draft), [draft]);

  function answerFor(question) {
    return draft.followupAnswers.find((item) => item.id === question.id)?.answer || "";
  }

  function setAnswer(question, answer) {
    const next = {
      ...draft,
      followupAnswers: questions.map((item) => ({
        id: item.id,
        question: item.question,
        answer: item.id === question.id ? answer : answerFor(item),
      })),
    };
    setDraft(next);
  }

  function continueToDashboard() {
    const next = {
      ...draft,
      followupAnswers: questions.map((item) => ({
        id: item.id,
        question: item.question,
        answer: answerFor(item),
      })),
    };
    setDraft(next);
    router.push("/dashboard");
  }

  if (!ready) return <p>Loading follow-up…</p>;

  if (ready && !intakeIsComplete(draft)) {
    return (
      <div className={ui.card}>
        <div className={ui.body}>
          <p>Finish discovery intake before generating follow-up questions.</p>
          <button type="button" className={ui.btn} style={{ marginTop: "1rem" }} onClick={() => router.push("/")}>
            Return to intake
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={ui.card}>
      <div className={ui.header}>
        <h3>Adaptive follow-up</h3>
        <span className={ui.badge}>Rule-based gaps</span>
      </div>
      <div className={ui.body}>
        <div className={ui.callout}>
          These questions are generated from department mix, AI experience, and pain-point language. Leave any item
          blank if the client has not answered yet.
        </div>
        {questions.map((question) => (
          <div key={question.id} className={ui.field}>
            <label className={ui.label} htmlFor={question.id}>
              {question.question}
            </label>
            <textarea
              id={question.id}
              className={ui.textarea}
              value={answerFor(question)}
              onChange={(event) => setAnswer(question, event.target.value)}
              placeholder="Optional. Capture what you heard, or leave blank for a later call."
            />
          </div>
        ))}
      </div>
      <div className={ui.footer}>
        <button type="button" className={ui.btnSecondary} onClick={() => router.push("/")}>
          Back to intake
        </button>
        <button type="button" className={ui.btn} onClick={continueToDashboard}>
          Open consultant dashboard
        </button>
      </div>
    </div>
  );
}
