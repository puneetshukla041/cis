"use client";

import { useEffect, useMemo, useState } from "react";
import type { LearningTopic, LearningQuestion } from "@/lib/paper1Learning";

type Option = "A" | "B" | "C" | "D";

type ProgressState = {
  completed: boolean;
  bookmarked: boolean;
  note: string;
  selectedAnswers: Record<number, Option>;
  submittedAnswers: Record<number, Option>;
  reviewMarks: Record<number, boolean>;
  lastQuestionIndex: number;
};

function keyFor(topicId: string) {
  return `bci-learning-progress-${topicId}`;
}

function initialProgress(): ProgressState {
  return { completed: false, bookmarked: false, note: "", selectedAnswers: {}, submittedAnswers: {}, reviewMarks: {}, lastQuestionIndex: 0 };
}

function readLocal(topicId: string): ProgressState | null {
  try {
    const saved = localStorage.getItem(keyFor(topicId));
    if (!saved) return null;
    return { ...initialProgress(), ...JSON.parse(saved) };
  } catch {
    return null;
  }
}

export default function LearningTopicClient({ topic, microQuiz }: { topic: LearningTopic; microQuiz: LearningQuestion[] }) {
  const [state, setState] = useState<ProgressState>(() => initialProgress());
  const [index, setIndex] = useState(0);
  const current = microQuiz[index];
  const selected = state.selectedAnswers[index];
  const submitted = state.submittedAnswers[index];
  const answeredCount = Object.keys(state.submittedAnswers).length;
  const correctCount = useMemo(
    () => Object.entries(state.submittedAnswers).filter(([i, ans]) => microQuiz[Number(i)]?.answer === ans).length,
    [state.submittedAnswers, microQuiz]
  );
  const accuracy = answeredCount ? Math.round((correctCount / answeredCount) * 100) : 0;

  const persist = (next: ProgressState) => {
    try { localStorage.setItem(keyFor(topic.id), JSON.stringify(next)); } catch {}
    fetch("/api/learning/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...next, topicId: topic.id, topicTitle: topic.title, day: topic.day, totalQuestions: microQuiz.length }),
    }).catch(() => null);
  };

  const updateState = (updater: (prev: ProgressState) => ProgressState) => {
    setState((prev) => {
      const next = updater(prev);
      persist(next);
      return next;
    });
  };

  useEffect(() => {
    const local = readLocal(topic.id);
    if (local) {
      setState(local);
      setIndex(Math.min(Math.max(local.lastQuestionIndex || 0, 0), Math.max(microQuiz.length - 1, 0)));
    }
  }, [topic.id, microQuiz.length]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const tag = (event.target as HTMLElement)?.tagName;
      if (tag === "TEXTAREA" || tag === "INPUT") return;
      if (["1", "2", "3", "4"].includes(event.key)) choose(["A", "B", "C", "D"][Number(event.key) - 1] as Option);
      if (event.key === "Enter") submitAnswer();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key.toLowerCase() === "m") toggleReview();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const choose = (option: Option) => {
    if (!current || submitted) return;
    updateState((prev) => ({ ...prev, selectedAnswers: { ...prev.selectedAnswers, [index]: option }, lastQuestionIndex: index }));
  };

  const submitAnswer = () => {
    if (!current || !selected) return;
    updateState((prev) => ({ ...prev, submittedAnswers: { ...prev.submittedAnswers, [index]: selected }, lastQuestionIndex: index }));
  };

  const clearCurrent = () => {
    updateState((prev) => {
      const selectedAnswers = { ...prev.selectedAnswers };
      const submittedAnswers = { ...prev.submittedAnswers };
      delete selectedAnswers[index];
      delete submittedAnswers[index];
      return { ...prev, selectedAnswers, submittedAnswers, lastQuestionIndex: index };
    });
  };

  const toggleReview = () => {
    updateState((prev) => ({ ...prev, reviewMarks: { ...prev.reviewMarks, [index]: !prev.reviewMarks[index] }, lastQuestionIndex: index }));
  };

  const goNext = () => setIndex((prev) => {
    const next = Math.min(Math.max(microQuiz.length - 1, 0), prev + 1);
    updateState((state) => ({ ...state, lastQuestionIndex: next }));
    return next;
  });

  const goPrev = () => setIndex((prev) => {
    const next = Math.max(0, prev - 1);
    updateState((state) => ({ ...state, lastQuestionIndex: next }));
    return next;
  });

  const optionClass = (key: Option) => {
    if (!current) return "border-[color:var(--border)]";
    const isSelected = selected === key;
    const isCorrect = current.answer === key;
    if (submitted && isCorrect) return "border-emerald-500/70 bg-emerald-500/10 text-emerald-100";
    if (submitted && isSelected && !isCorrect) return "border-rose-500/70 bg-rose-500/10 text-rose-100";
    if (isSelected) return "border-blue-500/80 bg-blue-500/10";
    return "border-[color:var(--border)] bg-[color:var(--panel)] hover:border-blue-500/50 hover:bg-blue-500/5";
  };

  const paletteClass = (i: number) => {
    const sub = state.submittedAnswers[i];
    if (i === index) return "bg-blue-600 text-white";
    if (state.reviewMarks[i]) return "bg-violet-500/20 text-violet-200 border-violet-500/50";
    if (sub && microQuiz[i]?.answer === sub) return "bg-emerald-500/20 text-emerald-200 border-emerald-500/50";
    if (sub) return "bg-rose-500/20 text-rose-200 border-rose-500/50";
    if (state.selectedAnswers[i]) return "bg-amber-500/20 text-amber-100 border-amber-500/50";
    return "bg-[color:var(--panel-2)] text-[color:var(--text)] border-[color:var(--border)]";
  };

  return (
    <div className="space-y-5">
      <div className="hero-card p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <p className="eyebrow">Day {topic.day} · {topic.bucket} · {topic.priority}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">{topic.title}</p>
            <p className="text-sm text-muted">Verified-content mode: only approved MCQs are shown. Draft/generated questions stay hidden.</p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <button onClick={() => updateState((p) => ({ ...p, bookmarked: !p.bookmarked }))} className="btn-secondary px-4 py-2">{state.bookmarked ? "Bookmarked" : "Bookmark"}</button>
            <button onClick={() => updateState((p) => ({ ...p, completed: !p.completed }))} className="btn-secondary px-4 py-2">{state.completed ? "Completed" : "Mark complete"}</button>
            <a href={`/api/learning/${topic.id}/questions`} target="_blank" className="btn-primary px-4 py-2">Approved Q JSON</a>
            <button onClick={() => window.print()} className="btn-secondary px-4 py-2">Print/PDF</button>
          </div>
        </div>
      </div>

      <section className="card p-5 md:p-6 space-y-6">
        <div className="note-box p-4">
          <p className="text-sm text-muted">Why this topic matters</p>
          <p className="mt-2 leading-7">{topic.why}</p>
        </div>

        <div>
          <p className="mb-3 text-sm text-muted">Concepts to master</p>
          <div className="flex flex-wrap gap-2">
            {topic.concepts.map((concept) => <span key={concept} className="pill">{concept}</span>)}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4">
            {topic.notes.map((noteBlock) => (
              <article key={noteBlock.heading} className="note-box p-4">
                <p className="text-sm font-medium text-muted">{noteBlock.heading}</p>
                <p className="mt-2 whitespace-pre-line leading-8">{noteBlock.body}</p>
              </article>
            ))}
          </div>
          <aside className="space-y-4">
            {topic.tables.map((table) => (
              <div key={table.title} className="note-box p-4">
                <p className="mb-3 text-sm font-medium text-muted">{table.title}</p>
                <div className="overflow-x-auto">
                  <table className="table-clean text-sm">
                    <thead><tr>{table.headers.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>{table.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              </div>
            ))}
          </aside>
        </div>

        <div className="note-box p-4">
          <p className="text-sm font-medium text-muted">MCQ-ready fact bank</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {topic.facts.map((fact, i) => (
              <div key={`${fact.key}-${i}`} className="mini-card p-3">
                <p className="text-sm"><span className="text-muted">{i + 1}.</span> {fact.key} <span className="text-muted">—</span> {fact.answer}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{fact.explanation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="note-box p-4"><p className="text-sm font-medium text-muted">Previous-year patterns</p><ul className="mt-3 list-disc space-y-2 pl-5 text-sm">{topic.pyqPatterns.map((x) => <li key={x}>{x}</li>)}</ul></div>
          <div className="note-box p-4"><p className="text-sm font-medium text-muted">Common mistakes</p><ul className="mt-3 list-disc space-y-2 pl-5 text-sm">{topic.mistakes.map((x) => <li key={x}>{x}</li>)}</ul></div>
          <div className="note-box p-4"><p className="text-sm font-medium text-muted">Exam tips</p><ul className="mt-3 list-disc space-y-2 pl-5 text-sm">{topic.tips.map((x) => <li key={x}>{x}</li>)}</ul></div>
        </div>

        <div className="note-box p-4">
          <label className="text-sm font-medium text-muted">Personal note for this topic</label>
          <textarea value={state.note} onChange={(e) => updateState((p) => ({ ...p, note: e.target.value }))} className="mt-3 min-h-28 w-full rounded-xl border px-3 py-2 outline-none" placeholder="Write your own memory trick, doubt, or one-line revision here." />
        </div>
      </section>

      <section className="card p-5 md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-lg font-semibold tracking-tight">Approved topic practice</p>
            <p className="mt-1 text-sm text-muted">Only approved, source-tagged questions are shown. Auto-generated draft questions are not used.</p>
          </div>
          <div className="rounded-2xl border px-4 py-2 text-sm" style={{ borderColor: "var(--border)", background: "var(--panel-2)" }}>
            Answered {answeredCount}/{microQuiz.length} · Score {correctCount}/{microQuiz.length} · Accuracy {accuracy}%
          </div>
        </div>

        {!current ? (
          <div className="note-box p-5">
            <p className="font-medium">No approved MCQs are available for this topic yet.</p>
            <p className="mt-2 text-sm leading-7 text-muted">The earlier generated question bank has been disabled because it was not faculty-verified. Upload verified JSON/PYQ questions or approve questions from the admin content workflow before using this topic for practice.</p>
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-[1fr_260px]">
            <div className="mini-card p-4 md:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm text-muted">Question {index + 1} of {microQuiz.length}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="pill">{current.difficulty}</span>
                  <span className="pill">{current.sourceHint || "Verified Library"}</span>
                  {state.reviewMarks[index] ? <span className="pill">Marked for review</span> : null}
                </div>
              </div>
              <p className="mt-4 text-base leading-8">{current.question.replace(/^\d+\.\s*/, "")}</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {(["A", "B", "C", "D"] as Option[]).map((key) => (
                  <button key={key} onClick={() => choose(key)} className={`rounded-2xl border p-4 text-left text-sm transition ${optionClass(key)}`}>
                    <span className="mr-2 text-xs text-muted">{key}</span>{current.options[key]}
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className={`mt-4 rounded-2xl border p-4 ${submitted === current.answer ? "border-emerald-500/50 bg-emerald-500/10" : "border-rose-500/50 bg-rose-500/10"}`}>
                  <p className="font-medium">Correct Answer: {current.answer}</p>
                  <p className="mt-2 text-sm leading-7"><span className="text-muted">Why correct:</span> {current.whyCorrect || current.explanation}</p>
                  <p className="mt-2 text-sm leading-7"><span className="text-muted">Why other options are wrong:</span> {current.whyOthersWrong || "Other options do not satisfy the exact association or condition."}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{current.explanation}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="pill">Difficulty: {current.difficulty}</span>
                    <span className="pill">Topic: {current.topic}</span>
                    <span className="pill">Pattern: {current.examPatternTag || "topic practice"}</span>
                    <span className="pill">Source: {current.source || current.sourceHint || "Verified Library"}</span>
                  </div>
                </div>
              ) : null}

              <div className="mt-5 flex flex-wrap justify-between gap-3">
                <button onClick={goPrev} className="btn-secondary px-4 py-2">Previous</button>
                <div className="flex flex-wrap gap-2">
                  <button onClick={toggleReview} className="btn-secondary px-4 py-2">{state.reviewMarks[index] ? "Unmark" : "Mark for review"}</button>
                  <button onClick={clearCurrent} className="btn-secondary px-4 py-2">Clear</button>
                  <button onClick={submitAnswer} disabled={!selected || Boolean(submitted)} className="btn-primary px-4 py-2 disabled:opacity-50">Submit Answer</button>
                  <button onClick={goNext} className="btn-primary px-4 py-2">Next</button>
                </div>
              </div>
            </div>

            <aside className="mini-card p-4">
              <p className="text-sm font-medium">Question palette</p>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {microQuiz.map((_, i) => <button key={i} onClick={() => setIndex(i)} className={`h-9 rounded-xl border text-xs transition ${paletteClass(i)}`}>{i + 1}</button>)}
              </div>
              <div className="mt-4 space-y-2 text-xs text-muted">
                <p>Green: correct after submit</p>
                <p>Red: wrong after submit</p>
                <p>Yellow: selected but not submitted</p>
                <p>Violet: marked for review</p>
              </div>
            </aside>
          </div>
        )}
      </section>
    </div>
  );
}
