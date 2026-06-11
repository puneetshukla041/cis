export const dynamic = "force-dynamic";
import Link from "next/link";
import { getLearningLibraryAudit, getTopicQualityRows, bannedQuestionPhrases } from "@/lib/contentQuality";
import { getCoverageMatrix } from "@/lib/coverageMatrix";

export default function ContentAdminPage() {
  const audit = getLearningLibraryAudit();
  const rows = getTopicQualityRows();
  const coverage = getCoverageMatrix();
  const issueGroups = audit.issues.reduce((acc: Record<string, number>, issue) => {
    acc[issue.type] = (acc[issue.type] || 0) + 1;
    return acc;
  }, {});
  return (
    <div className="space-y-6 animate-in">
      <section className="hero-card p-6 md:p-8">
        <p className="eyebrow">Hidden content control</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Question bank quality audit</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">Only approved, source-tagged Learning Library questions are allowed in practice. This page checks duplicates, banned phrases, weak explanations, missing tags and missing metadata.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="stat-card p-5"><p className="text-muted text-sm">Library MCQs</p><p className="mt-2 text-3xl font-semibold">{audit.total}</p></div>
        <div className="stat-card p-5"><p className="text-muted text-sm">Approved</p><p className="mt-2 text-3xl font-semibold text-emerald-400">{audit.approved}</p></div>
        <div className="stat-card p-5"><p className="text-muted text-sm">Duplicates</p><p className="mt-2 text-3xl font-semibold text-rose-400">{audit.duplicateCount}</p></div>
        <div className="stat-card p-5"><p className="text-muted text-sm">Open issues</p><p className="mt-2 text-3xl font-semibold text-amber-400">{audit.issues.length}</p></div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_360px]">
        <div className="card overflow-hidden">
          <div className="border-b p-5" style={{ borderColor: "var(--border)" }}>
            <p className="text-lg font-medium">Topic quality rows</p>
            <p className="mt-1 text-sm text-muted">Status uses approved ratio minus quality issues. Topics with zero approved questions are blocked from learning practice until verified questions are added.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-muted"><tr><th className="p-3">Day</th><th className="p-3">Topic</th><th className="p-3">MCQs</th><th className="p-3">Approved</th><th className="p-3">Issues</th><th className="p-3">Quality</th></tr></thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.topicId} className="border-t" style={{ borderColor: "var(--border)" }}>
                    <td className="p-3">{row.day}</td><td className="p-3"><Link className="hover:underline" href={`/learn/${row.topicId}`}>{row.title}</Link><p className="text-xs text-muted">{row.bucket}</p></td><td className="p-3">{row.total}</td><td className="p-3">{row.approved}</td><td className="p-3">{row.highIssues + row.mediumIssues}</td><td className="p-3"><span className={`rounded-full px-3 py-1 text-xs ${row.quality >= 90 ? "bg-emerald-500/15 text-emerald-300" : row.quality >= 75 ? "bg-amber-500/15 text-amber-300" : "bg-rose-500/15 text-rose-300"}`}>{row.quality}/100</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="card p-5"><p className="font-medium">Issue detector</p><div className="mt-4 space-y-2 text-sm text-muted">{Object.entries(issueGroups).length ? Object.entries(issueGroups).map(([k,v]) => <p key={k} className="flex justify-between"><span>{k.replaceAll("_", " ")}</span><b>{v}</b></p>) : <p>No open quality issues detected in the approved library.</p>}</div></div>
          <div className="card p-5"><p className="font-medium">Banned phrases</p><div className="mt-3 flex flex-wrap gap-2">{bannedQuestionPhrases.map((phrase) => <span key={phrase} className="pill">{phrase}</span>)}</div></div>
          <div className="card p-5"><p className="font-medium">Coverage health</p>{coverage.map((row) => <div key={row.area} className="mt-3"><div className="flex justify-between text-sm"><span>{row.area}</span><span>{row.coverage}%</span></div><div className="mt-1 h-2 rounded-full bg-[var(--panel-2)]"><div className="h-2 rounded-full bg-blue-600" style={{ width: `${row.coverage}%` }} /></div></div>)}</div>
        </aside>
      </section>
    </div>
  );
}
