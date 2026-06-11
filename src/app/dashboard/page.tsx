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

      <section className="card p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div><p className="text-lg font-semibold tracking-tight">Daily target engine</p><p className="mt-1 text-sm text-muted">Built from learning completion and weak-topic analytics.</p></div>
          <a href="/targets" className="btn-secondary px-4 py-2 text-sm">Open targets</a>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          <div className="mini-card p-4"><p className="text-sm font-medium">Read today’s notes</p><p className="mt-1 text-xs text-muted">Continue the next incomplete Paper 1 topic.</p></div>
          <div className="mini-card p-4"><p className="text-sm font-medium">100 topic MCQs</p><p className="mt-1 text-xs text-muted">Use Learning Practice after theory.</p></div>
          <div className="mini-card p-4"><p className="text-sm font-medium">30 wrong questions</p><p className="mt-1 text-xs text-muted">Review wrong/skipped/bookmarked items.</p></div>
          <div className="mini-card p-4"><p className="text-sm font-medium">One weak-topic set</p><p className="mt-1 text-xs text-muted">Let analytics choose weak areas.</p></div>
        </div>
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


      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card p-5 md:p-6">
          <p className="text-lg font-semibold tracking-tight">Learning progress</p>
          <div className="mt-5 space-y-3">
            {data.learningProgress?.length ? data.learningProgress.slice(0, 10).map((row: any) => <div key={row.topicId} className="mini-card p-4"><div className="flex justify-between gap-3 text-sm font-medium"><span>{row.day}. {row.topicTitle}</span><span>{row.completed ? "Complete" : `${row.accuracy || 0}%`}</span></div><p className="mt-2 text-sm text-muted">Attempted {row.attempted || 0}, Correct {row.correct || 0}, Revision {row.revisionCount || 0}, Study time {Math.round((row.studyTimeSeconds || 0) / 60)} min</p></div>) : <p className="text-muted">Open learning topics to start MongoDB-backed progress tracking.</p>}
          </div>
        </div>
        <div className="card p-5 md:p-6">
          <p className="text-lg font-semibold tracking-tight">Smart recommendations</p>
          <div className="mt-5 space-y-3">
            {data.recommendations?.length ? data.recommendations.map((item: any, i: number) => <div key={`${item.title}-${i}`} className="mini-card p-4"><div className="text-sm font-medium">{item.title}</div><p className="mt-2 text-sm text-muted">{item.reason}. {item.action}.</p></div>) : <p className="text-muted">Recommendations will appear after topic practice and submitted tests.</p>}
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
