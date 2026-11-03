import { statusLabel } from "@/lib/assessments";
import ui from "./ui.module.css";

export default function PreviousStatus({ draft }) {
  if (!draft?.assessmentId) return null;
  return (
    <div className={ui.callout} style={{ marginBottom: "1rem" }}>
      Editing a saved assessment. Previous status: {statusLabel(draft.previousStatus)}.
    </div>
  );
}
