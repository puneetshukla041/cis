export const dynamic = "force-dynamic";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { getReportData } from "@/lib/serverData";

type Filter = "all" | "wrong" | "skipped" | "bookmarked" | "correct";

export default async function ReviewPage({ params, searchParams }: { params: Promise<{ attemptId: string }>; searchParams: Promise<{ filter?: Filter }> }) {
  const { attemptId } = await params;
  const { filter = "all" } = await searchParams;
  const data = await getReportData(attemptId);
  if (!data) return <div className="card p-8 text-center">Report not found</div>;
  const { attempt, questions, answers } = data;
  const map = new Map(answers.map((a:any)=>[String(a.questionId), a]));
  const rows = questions.filter((q:any) => {
    const a:any = map.get(String(q._id));
    if (filter === "wrong") return a?.selectedOption && !a?.isCorrect;
    if (filter === "skipped") return a?.isSkipped || !a?.selectedOption;
    if (filter === "bookmarked") return a?.isBookmarked;
    if (filter === "correct") return a?.isCorrect;
    return true;
  });
  const wrongRows = questions.filter((q:any) => { const a:any = map.get(String(q._id)); return a?.selectedOption && !a?.isCorrect; });
  const filters: { label: string; value: Filter }[] = [
    { label: "All", value: "all" }, { label: "Wrong only", value: "wrong" }, { label: "Skipped only", value: "skipped" }, { label: "Bookmarked", value: "bookmarked" }, { label: "Correct", value: "correct" },
  ];
  return (
    <div className="space-y-6">
      <div className="card gradient p-6">
        <p className="text-sm font-medium text-muted">Result Review</p>
        <p className="mt-1 text-base font-medium">{attempt.testTitle}</p>
        <div className="mt-5 grid gap-3 md:grid-cols-5"><div className="mini-card p-4"><b>{attempt.score}</b><p className="text-xs text-muted">Score</p></div><div className="mini-card p-4"><b>{attempt.accuracy}%</b><p className="text-xs text-muted">Accuracy</p></div><div className="mini-card p-4"><b>{attempt.correct}</b><p className="text-xs text-muted">Correct</p></div><div className="mini-card p-4"><b>{attempt.wrong}</b><p className="text-xs text-muted">Wrong</p></div><div className="mini-card p-4"><b>{Math.round((attempt.elapsedSeconds || 0)/60)} min</b><p className="text-xs text-muted">Time</p></div></div>
        <div className="no-print mt-5 flex flex-wrap gap-3">
          <Link href="/dashboard" className="btn-secondary px-4 py-2">Dashboard</Link>
          <Link href={`/tests/${attempt.testId}`} className="btn-secondary px-4 py-2">Redo same test</Link>
          <Link href="/practice" className="btn-primary px-4 py-2">Generate weak-topic set</Link>
          <a href={`/api/export/${attemptId}/excel`} className="rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white">Export Excel</a>
          <PrintButton />
        </div>
        <div className="no-print mt-4 flex flex-wrap gap-2">{filters.map((f) => <Link key={f.value} href={`/review/${attemptId}?filter=${f.value}`} className={`rounded-xl border px-3 py-2 text-sm ${filter === f.value ? "bg-blue-600 text-white" : "text-muted"}`} style={{borderColor:'var(--border)'}}>{f.label}</Link>)}</div>
      </div>
      {wrongRows.length ? <section className="card p-5"><p className="font-medium">Mistake revision sheet</p><div className="mt-3 space-y-2 text-sm text-muted">{wrongRows.slice(0, 20).map((q:any) => { const a:any=map.get(String(q._id)); return <p key={q._id}>• {q.topic}: Your answer {a?.selectedOption}, correct {q.answer}. Revise: {q.whyCorrect || q.explanation}</p>; })}</div></section> : null}
      <div className="space-y-4 print-report">
        {rows.map((q:any)=>{const a:any=map.get(String(q._id)); const attempted=!!a?.selectedOption; const correct=a?.isCorrect; return <div key={q._id} className="card p-5"><div className="flex flex-wrap items-start justify-between gap-3"><p className="font-medium">{q.order}. {q.question}</p><span className="rounded-full px-3 py-1 text-xs font-medium" style={{background: correct?'#dcfce7': attempted?'#fee2e2':'#e2e8f0',color: correct?'#166534':attempted?'#991b1b':'#475569'}}>{correct?'Correct':attempted?'Wrong':'Not Attempted'}</span></div><div className="mt-3 grid gap-2 md:grid-cols-2">{(['A','B','C','D'] as const).map(k=><p key={k} className="rounded-xl border p-3 text-sm" style={{borderColor: q.answer===k?'#16a34a':a?.selectedOption===k?'#dc2626':'var(--border)', background:q.answer===k?'rgba(22,163,74,.08)':a?.selectedOption===k?'rgba(220,38,38,.08)':'transparent'}}><b>{k}.</b> {q.options[k]}</p>)}</div><div className="mt-3 space-y-2 text-sm text-muted"><p><b>Correct answer:</b> {q.answer}</p><p><b>Why correct:</b> {q.whyCorrect || q.explanation}</p><p><b>Why other options are wrong:</b> {q.whyOthersWrong || "Other options do not satisfy the question condition."}</p><p><b>Explanation:</b> {q.explanation}</p><p className="text-xs">{q.subject} / {q.chapter} / {q.topic} • Difficulty: {q.difficulty} • Source: {q.source || q.sourceHint || "Question bank"} • Pattern: {q.examPatternTag || "practice"} • Time: {a?.timeSpentSeconds || 0}s</p></div></div>})}
      </div>
    </div>
  );
}
