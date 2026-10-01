import AppShell from "@/components/AppShell";
import IntakeForm from "@/components/IntakeForm";

export default function HomePage() {
  return (
    <AppShell
      eyebrow="Workflow 01"
      title="Discovery intake"
      lede="Capture the client conversation as structured inputs. Validation is required before follow-up questions are generated."
    >
      <IntakeForm />
    </AppShell>
  );
}
