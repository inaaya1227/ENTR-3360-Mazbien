import AppShell from "@/components/AppShell";
import FollowupForm from "@/components/FollowupForm";

export default function FollowupPage() {
  return (
    <AppShell
      eyebrow="Workflow 02"
      title="Adaptive follow-up"
      lede="Short, rule-based questions from intake gaps. Answer what you heard, or leave blank for a later call."
    >
      <FollowupForm />
    </AppShell>
  );
}
