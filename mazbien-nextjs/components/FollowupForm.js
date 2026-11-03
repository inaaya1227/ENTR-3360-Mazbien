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

  const questions = useMemo(() => {
    const generated = generateFollowups(draft);
    const shown = new Set(generated.map((item) => item.question.trim()));
    const saved = (draft.followupAnswers || [])
      .filter((item) => item?.question?.trim() && !shown.has(item.question.trim()))
      .map((item, index) => ({
        id: item.id || `saved-${index}`,
        question: item.question,
        answer: item.answer || "",
        depth: 1,
      }));
    return [...generated, ...saved];
  }, [draft]);

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
          <button type="button" className={ui.btn} style={{ marginTop: "1rem" }} onClick={() => router.push("/intake")}>
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
          Questions use the company name, industry, selected departments, roles, each department’s AI experience, and
          the pain points already captured. A specific answer can open one more question. The reason stays visible so
          the branch is explainable. Leave any item blank if the client has not answered yet.
        </div>
        {questions.map((question) => (
          <div key={question.id} className={question.depth === 2 ? `${ui.field} ${ui.nested}` : ui.field}>
            {question.depth === 2 ? <div className={ui.hint}>Deeper follow-up · {question.because}</div> : null}
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
        <button type="button" className={ui.btnSecondary} onClick={() => router.push("/intake?step=4")}>
          Back to readiness
        </button>
        <button type="button" className={ui.btn} onClick={continueToDashboard}>
          Open consultant dashboard
        </button>
      </div>
    </div>
  );
}
