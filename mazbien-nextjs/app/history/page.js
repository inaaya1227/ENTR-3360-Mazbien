import AppShell from "@/components/AppShell";
import HistoryTable from "@/components/HistoryTable";

export default function HistoryPage() {
  return (
    <AppShell
      eyebrow="Reference library"
      title="Assessment history"
      lede="Assessments you sent for review. Supabase only returns rows owned by the signed-in consultant."
    >
      <HistoryTable />
    </AppShell>
  );
}
