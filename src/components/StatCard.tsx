type Props = { label: string; value: string | number; helper?: string; tone?: "blue" | "green" | "red" | "amber" | "slate" };
export default function StatCard({ label, value, helper, tone = "slate" }: Props) {
  const color = tone === "blue" ? "var(--brand)" : tone === "green" ? "var(--success)" : tone === "red" ? "var(--danger)" : tone === "amber" ? "var(--warning)" : "var(--text)";
  return (
    <div className="card hover-lift p-5 animate-in">
      <p className="text-xs font-medium uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-3 text-2xl font-semibold tracking-tight" style={{ color }}>{value}</p>
      {helper ? <p className="mt-2 text-xs leading-5 text-muted">{helper}</p> : null}
    </div>
  );
}
