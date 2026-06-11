export const dynamic = "force-dynamic";
import Link from "next/link";
import { getCoverageMatrix, getOverallCoverage } from "@/lib/coverageMatrix";

export default function CoveragePage() {
  const rows = getCoverageMatrix();
  const overall = getOverallCoverage();
  return (
    <div className="space-y-6 animate-in">
      <section className="hero-card p-6 md:p-8">
        <p className="eyebrow">Paper 1 coverage matrix</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Syllabus readiness: {overall}%</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">Coverage is calculated from the 50-day Paper 1 learning library, 100-question topic sets and the official syllabus buckets.</p>
      </section>
      <section className="grid gap-4 lg:grid-cols-2">
        {rows.map((row) => (
          <div key={row.area} className="card p-5">
            <div className="flex items-start justify-between gap-3"><div><p className="text-lg font-medium">{row.area}</p><p className="mt-1 text-sm text-muted">{row.remark}</p></div><span className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: "var(--border)" }}>{row.priority}</span></div>
            <div className="mt-4 flex items-center gap-4"><div className="h-3 flex-1 rounded-full bg-[var(--panel-2)]"><div className="h-3 rounded-full bg-blue-600" style={{ width: `${row.coverage}%` }} /></div><b>{row.coverage}%</b></div>
            <div className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-3"><p>Topics: <b className="text-[var(--text)]">{row.coveredTopics}</b></p><p>MCQs: <b className="text-[var(--text)]">{row.totalMcqs}</b></p><p>Status: <b className="text-[var(--text)]">{row.status}</b></p></div>
            <div className="mt-4 flex flex-wrap gap-2">{row.topics.map((topic) => <Link key={topic.id} href={`/learn/${topic.id}`} className="pill hover:border-blue-500">Day {topic.day}: {topic.title}</Link>)}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
