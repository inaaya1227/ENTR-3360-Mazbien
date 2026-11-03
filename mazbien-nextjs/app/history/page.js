import AppShell from "@/components/AppShell";
import HistoryTable from "@/components/HistoryTable";

export default function HistoryPage() {
  return (
    <AppShell
      eyebrow="Reference library"
      title="Assessment history"
      lede="Assessments you sent for review. Edit loads that record back into intake. Sending it again updates the same row and keeps its previous status visible."
    >
      <HistoryTable />
    </AppShell>
  );
}
