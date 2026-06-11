export default function ProgressBar({ value, label }: { value: number; label?: string }) {
  const width = Math.max(0, Math.min(100, Number(value) || 0));
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs font-medium text-muted"><span>{label}</span><span>{width}%</span></div>
      <div className="h-2 overflow-hidden rounded-full" style={{ background: "var(--panel-3)" }}>
        <div className="h-2 rounded-full" style={{ width: `${width}%`, background: "var(--brand)" }} />
      </div>
    </div>
  );
}
