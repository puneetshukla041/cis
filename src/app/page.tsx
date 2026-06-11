export const dynamic = "force-dynamic";
import Link from "next/link";
import StatCard from "@/components/StatCard";
import { getDashboardData } from "@/lib/serverData";

export default async function HomePage() {
  const data = await getDashboardData();
  return (
    <div className="space-y-6 animate-in">
      <section className="hero-card p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <p className="eyebrow">Rajasthan Basic Computer Instructor</p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">A focused Paper 1 study system for serious practice.</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              Read one topic deeply, solve a full topic-wise set at night, and convert every wrong question into a revision cue.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <Link href="/learn" className="btn-primary">Start learning</Link>
              <Link href="/practice" className="btn-secondary">Build practice</Link>
              <Link href="/upload" className="btn-secondary">Upload JSON</Link>
            </div>
          </div>
          <div className="grid gap-3 rounded-3xl border p-4" style={{ borderColor: "var(--border)", background: "var(--panel-2)" }}>
            <div className="mini-card p-4"><p className="text-sm font-medium">Day study</p><p className="mt-1 text-sm text-muted">Theory, tables and traps</p></div>
            <div className="mini-card p-4"><p className="text-sm font-medium">Night practice</p><p className="mt-1 text-sm text-muted">100 topic MCQs</p></div>
            <div className="mini-card p-4"><p className="text-sm font-medium">Next morning</p><p className="mt-1 text-sm text-muted">Wrong-question revision</p></div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Tests Attempted" value={data?.summary?.totalTestsAttempted || 0} tone="blue" />
        <StatCard label="Questions Solved" value={data?.summary?.totalQuestionsSolved || 0} tone="green" />
        <StatCard label="Accuracy" value={`${data?.summary?.accuracy || 0}%`} tone="amber" />
        <StatCard label="Readiness" value={`${data?.summary?.readinessScore || 0}/100`} helper={data?.summary?.rankPrediction || "Start practicing"} />
      </section>

      <section className="grid gap-4 lg:grid-cols-3 xl:grid-cols-6">
        <Link href="/learn" className="card hover-lift p-5"><p className="font-medium">Learn</p><p className="mt-2 text-sm leading-6 text-muted">Paper 1 topic notes, fact banks, PYQ traps and full topic sets.</p></Link>
        <Link href="/practice" className="card hover-lift p-5"><p className="font-medium">Practice</p><p className="mt-2 text-sm leading-6 text-muted">Mix learning-library and uploaded JSON questions with balanced coverage.</p></Link>
        <Link href="/dashboard" className="card hover-lift p-5"><p className="font-medium">Review</p><p className="mt-2 text-sm leading-6 text-muted">Track weak topics, accuracy, time and readiness after attempts.</p></Link>
        <Link href="/coverage" className="card hover-lift p-5"><p className="font-medium">Coverage matrix</p><p className="mt-2 text-sm leading-6 text-muted">Check Paper 1 syllabus readiness and topic coverage.</p></Link>
        <Link href="/targets" className="card hover-lift p-5"><p className="font-medium">Daily targets</p><p className="mt-2 text-sm leading-6 text-muted">Know what to read, solve and revise today.</p></Link>
        <Link href="/admin/content" className="card hover-lift p-5"><p className="font-medium">Content audit</p><p className="mt-2 text-sm leading-6 text-muted">Faculty-style checks for question bank quality.</p></Link>
      </section>
    </div>
  );
}
