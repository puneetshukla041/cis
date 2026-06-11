export const dynamic = "force-dynamic";
import Link from "next/link";
import StatCard from "@/components/StatCard";
import { getDashboardData } from "@/lib/serverData";

export default async function HomePage() {
  const data = await getDashboardData();
  return (
    <div className="space-y-5">
      <section className="card p-5">
        <p className="text-sm text-muted">Rajasthan Basic Computer Instructor preparation</p>
        <p className="mt-2 max-w-3xl leading-7 text-soft">Use the 50-day Paper 1 system: read deep notes in the day, practise 100 topic-wise MCQs at night, and revise wrong questions the next morning.</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <Link href="/learn" className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white">Start learning</Link>
          <Link href="/plan" className="rounded-xl border px-4 py-2 font-medium" style={{borderColor:'var(--border)'}}>50 Days</Link>
          <Link href="/tests" className="rounded-xl border px-4 py-2 font-medium" style={{borderColor:'var(--border)'}}>Tests</Link>
          <Link href="/syllabus" className="rounded-xl border px-4 py-2 font-medium" style={{borderColor:'var(--border)'}}>Syllabus</Link>
          <Link href="/upload" className="rounded-xl border px-4 py-2 font-medium" style={{borderColor:'var(--border)'}}>Upload</Link>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Tests Attempted" value={data?.summary?.totalTestsAttempted || 0} tone="blue"/>
        <StatCard label="Questions Solved" value={data?.summary?.totalQuestionsSolved || 0} tone="green"/>
        <StatCard label="Accuracy" value={`${data?.summary?.accuracy || 0}%`} tone="amber"/>
        <StatCard label="Readiness" value={`${data?.summary?.readinessScore || 0}/100`} helper={data?.summary?.rankPrediction || "Start practicing"}/>
      </section>
      <section className="grid gap-4 lg:grid-cols-3">
        <div className="card p-5"><p className="font-medium">Learn</p><p className="mt-2 text-sm text-muted">Deep topic notes, fixed memory facts, PYQ traps, mistake-control and micro quizzes across 50 days.</p></div>
        <div className="card p-5"><p className="font-medium">Practise</p><p className="mt-2 text-sm text-muted">Topic-wise and mixed tests with instant explanation in learning mode.</p></div>
        <div className="card p-5"><p className="font-medium">Review</p><p className="mt-2 text-sm text-muted">Use bookmarks, personal notes and wrong-question analysis for revision.</p></div>
      </section>
    </div>
  );
}
