export const dynamic = "force-dynamic";
import StatCard from "@/components/StatCard";
import ProgressBar from "@/components/ProgressBar";
import { getDashboardData } from "@/lib/serverData";

export default async function DashboardPage() {
  const data = await getDashboardData();
  if (!data) return <div className="card p-8 text-center">Dashboard unavailable</div>;
  const s = data.summary;
  return (
    <div className="space-y-6 animate-in">
      <section className="hero-card p-6 md:p-8">
        <p className="eyebrow">Performance</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Analytics dashboard</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">Track accuracy, topic mastery, weak areas and practice readiness after each test.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <StatCard label="Tests Attempted" value={s.totalTestsAttempted} tone="blue" />
        <StatCard label="Questions Solved" value={s.totalQuestionsSolved} tone="green" />
        <StatCard label="Accuracy" value={`${s.accuracy}%`} tone="amber" />
        <StatCard label="Daily Streak" value={s.dailyStreak} helper={`Best: ${s.bestStreak}`} />
        <StatCard label="Readiness" value={`${s.readinessScore}/100`} helper={s.rankPrediction} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card p-5 md:p-6">
          <p className="text-lg font-semibold tracking-tight">Paper-wise performance</p>
          <div className="mt-5 space-y-4">
            {data.paperWise.map((p: any) => <div key={p.paper} className="mini-card p-4"><div className="mb-3 flex justify-between text-sm font-medium"><span>{p.paper === "paper1" ? "Paper 1" : "Paper 2"}</span><span>{p.accuracy}%</span></div><ProgressBar value={p.accuracy} /><p className="mt-3 text-sm text-muted">Attempted {p.attempted}, Correct {p.correct}, Wrong {p.wrong}</p></div>)}
          </div>
        </div>
        <div className="card p-5 md:p-6">
          <p className="text-lg font-semibold tracking-tight">Difficulty analysis</p>
          <div className="mt-5 space-y-4">
            {data.difficultyWise.map((d: any) => <div key={d.key} className="mini-card p-4"><div className="mb-3 flex justify-between text-sm font-medium"><span>{d.key}</span><span>{d.accuracy}%</span></div><ProgressBar value={d.accuracy} /><p className="mt-3 text-sm text-muted">Attempted {d.attempted}, Avg time {d.averageTimeSeconds}s, Mastery {d.mastery}</p></div>)}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card p-5 md:p-6">
          <p className="text-lg font-semibold tracking-tight">Strongest topics</p>
          <div className="mt-5 space-y-3">
            {data.strongestTopics.length ? data.strongestTopics.map((t: any) => <div key={t.key} className="mini-card p-4"><div className="flex justify-between text-sm font-medium"><span>{t.key}</span><span>{t.accuracy}%</span></div><p className="mt-2 text-sm text-muted">Mastery {t.mastery} • Attempted {t.attempted}</p></div>) : <p className="text-muted">Attempt more questions to identify strong topics.</p>}
          </div>
        </div>
        <div className="card p-5 md:p-6">
          <p className="text-lg font-semibold tracking-tight">Weakest topics</p>
          <div className="mt-5 space-y-3">
            {data.weakestTopics.length ? data.weakestTopics.map((t: any) => <div key={t.key} className="mini-card p-4"><div className="flex justify-between text-sm font-medium"><span>{t.key}</span><span>{t.accuracy}%</span></div><p className="mt-2 text-sm text-muted">Do 30 focused MCQs and revise explanations. Avg time {t.averageTimeSeconds}s.</p></div>) : <p className="text-muted">Weak topics will appear after attempts.</p>}
          </div>
        </div>
      </section>

      <section className="card p-5 md:p-6">
        <p className="text-lg font-semibold tracking-tight">30-day performance trend</p>
        <div className="mt-6 flex h-48 items-end gap-2 overflow-x-auto rounded-2xl border p-4" style={{ borderColor: "var(--border)", background: "var(--panel-2)" }}>
          {data.monthlyProgress.length ? data.monthlyProgress.map((d: any) => <div key={d.date} className="min-w-10 flex-1 rounded-t-xl" title={`${d.date}: ${d.score}`} style={{ height: `${Math.max(8, Math.min(100, d.score || d.correct))}%`, background: "var(--brand)" }} />) : <p className="text-muted">Submit tests to build trend graph.</p>}
        </div>
      </section>
    </div>
  );
}
