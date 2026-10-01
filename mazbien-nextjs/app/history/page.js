import AppShell from "@/components/AppShell";
import HistoryTable from "@/components/HistoryTable";

export default function HistoryPage() {
  return (
    <AppShell
      eyebrow="Reference library"
      title="Assessment history"
      lede="Look up how similar companies and department mixes were scored before you lock a new draft."
    >
      <HistoryTable />
    </AppShell>
  );
}
