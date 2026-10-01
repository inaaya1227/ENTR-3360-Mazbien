import AppShell from "@/components/AppShell";
import DashboardClient from "@/components/DashboardClient";

export default function DashboardPage() {
  return (
    <AppShell
      eyebrow="Workflow 03"
      title="Consultant dashboard"
      lede="Review the draft recommendation, adjust judgment, then Send For Review. This never bills or messages the client."
    >
      <DashboardClient />
    </AppShell>
  );
}
