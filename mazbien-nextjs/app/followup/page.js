import AppShell from "@/components/AppShell";
import FollowupForm from "@/components/FollowupForm";

export default function FollowupPage() {
  return (
    <AppShell
      eyebrow="Workflow 02"
      title="Adaptive follow-up"
      lede="Rule-based questions from intake gaps. A specific answer can open one more, more specific question."
    >
      <FollowupForm />
    </AppShell>
  );
}
