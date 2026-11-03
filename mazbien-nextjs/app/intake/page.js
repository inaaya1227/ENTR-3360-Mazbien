import { Suspense } from "react";
import AppShell from "@/components/AppShell";
import IntakeForm from "@/components/IntakeForm";

export default function IntakePage() {
  return (
    <AppShell
      eyebrow="Workflow 01"
      title="Discovery intake"
      lede="Capture the client conversation as structured inputs. Validation is required before follow-up questions are generated."
    >
      <Suspense fallback={<p>Loading intake…</p>}>
        <IntakeForm />
      </Suspense>
    </AppShell>
  );
}
