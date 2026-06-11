"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  studyTimeSeconds: number;
  revisionCount: number;
};

function keyFor(topicId: string) { return `bci-learning-progress-${topicId}`; }

function initialProgress(): ProgressState {
  return { completed: false, bookmarked: false, note: "", selectedAnswers: {}, submittedAnswers: {}, reviewMarks: {}, lastQuestionIndex: 0, studyTimeSeconds: 0, revisionCount: 0 };
}

function readLocal(topicId: string): ProgressState | null {
  try {
    const saved = localStorage.getItem(keyFor(topicId));
    if (!saved) return null;
    const data = JSON.parse(saved);
    return { ...initialProgress(), ...data, selectedAnswers: data.selectedAnswers || data.answers || {}, submittedAnswers: data.submittedAnswers || {}, reviewMarks: data.reviewMarks || {} };
  } catch {
    return null;
  }
}

export default function LearningTopicClient({ topic, microQuiz }: { topic: LearningTopic; microQuiz: LearningQuestion[] }) {
  const [state, setState] = useState<ProgressState>(() => initialProgress());
  const [index, setIndex] = useState(0);
  const [saving, setSaving] = useState(false);
  const studyTimer = useRef(0);

  const answerKey = useMemo(() => Object.fromEntries(microQuiz.map((q, i) => [i, q.answer])), [microQuiz]);
  const selected = state.selectedAnswers[index];
  const submitted = state.submittedAnswers[index];
  const current = microQuiz[index];
  const answeredCount = Object.keys(state.submittedAnswers).length;
  const correctCount = useMemo(() => Object.entries(state.submittedAnswers).filter(([i, ans]) => microQuiz[Number(i)]?.answer === ans).length, [state.submittedAnswers, microQuiz]);
  const wrongCount = Math.max(0, answeredCount - correctCount);
  const accuracy = answeredCount ? Math.round((correctCount / answeredCount) * 100) : 0;

  const persist = async (nextState: ProgressState, silent = true) => {
    const payload = {
      ...nextState,
      topicId: topic.id,
      topicTitle: topic.title,
      day: topic.day,
      totalQuestions: microQuiz.length,
      answerKey,
      lastQuestionIndex: index,
    };
    try { localStorage.setItem(keyFor(topic.id), JSON.stringify(payload)); } catch {}
    if (!silent) setSaving(true);
    try {
      await fetch("/api/learning/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {}
    if (!silent) setSaving(false);
  };

  const updateState = (updater: (prev: ProgressState) => ProgressState, silent = true) => {
    setState((prev) => {
      const next = updater(prev);
      void persist(next, silent);
      return next;
    });
  };

  useEffect(() => {
    const local = readLocal(topic.id);
    if (local) {
      setState(local);
      setIndex(Math.min(microQuiz.length - 1, Math.max(0, local.lastQuestionIndex || 0)));
    }
    fetch(`/api/learning/progress?topicId=${encodeURIComponent(topic.id)}`)
      .then((res) => res.json())
      .then((json) => {
        const p = json?.data?.progress;
        if (!p) return;
        const next: ProgressState = {
          completed: Boolean(p.completed),
          bookmarked: Boolean(p.bookmarked),
          note: p.note || "",
          selectedAnswers: p.selectedAnswers || {},
          submittedAnswers: p.submittedAnswers || {},
          reviewMarks: p.reviewMarks || {},
          lastQuestionIndex: p.lastQuestionIndex || 0,
          studyTimeSeconds: p.studyTimeSeconds || 0,
          revisionCount: p.revisionCount || 0,
        };
        setState(next);
        setIndex(Math.min(microQuiz.length - 1, Math.max(0, next.lastQuestionIndex || 0)));
      })
      .catch(() => null);
  }, [topic.id, microQuiz.length]);

  useEffect(() => {
    const id = setInterval(() => {
      studyTimer.current += 1;
      if (studyTimer.current % 15 === 0) {
        updateState((prev) => ({ ...prev, studyTimeSeconds: (prev.studyTimeSeconds || 0) + 15 }), true);
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.target as HTMLElement)?.tagName === "TEXTAREA") return;
      if (["1", "2", "3", "4"].includes(event.key)) {
        const key = ["A", "B", "C", "D"][Number(event.key) - 1] as Option;
        choose(key);
      }
      if (event.key === "Enter") submitAnswer();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key.toLowerCase() === "m") toggleReview();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const choose = (option: Option) => {
    updateState((prev) => ({ ...prev, selectedAnswers: { ...prev.selectedAnswers, [index]: option } }), true);
  };

  const submitAnswer = () => {
    if (!selected) return;
    updateState((prev) => ({ ...prev, submittedAnswers: { ...prev.submittedAnswers, [index]: selected } }), false);
  };

  const clearCurrent = () => {
    updateState((prev) => {
      const selectedAnswers = { ...prev.selectedAnswers };
      const submittedAnswers = { ...prev.submittedAnswers };
      delete selectedAnswers[index];
      delete submittedAnswers[index];
      return { ...prev, selectedAnswers, submittedAnswers };
    }, false);
  };

  const toggleReview = () => {
    updateState((prev) => ({ ...prev, reviewMarks: { ...prev.reviewMarks, [index]: !prev.reviewMarks[index] } }), true);
  };

  const goNext = () => {
    setIndex((prev) => {
      const next = Math.min(microQuiz.length - 1, prev + 1);
      updateState((state) => ({ ...state, lastQuestionIndex: next }), true);
      return next;
    });
  };

  const goPrev = () => {
    setIndex((prev) => {
      const next = Math.max(0, prev - 1);
      updateState((state) => ({ ...state, lastQuestionIndex: next }), true);
      return next;
    });
  };

  const optionClass = (key: Option) => {
    const isSelected = selected === key;
    const isSubmitted = Boolean(submitted);
    const isCorrect = current?.answer === key;
    if (isSubmitted && isCorrect) return "border-emerald-500/70 bg-emerald-500/10 text-emerald-100";
    if (isSubmitted && isSelected && !isCorrect) return "border-rose-500/70 bg-rose-500/10 text-rose-100";
    if (isSelected) return "border-blue-500/80 bg-blue-500/10";
    return "border-[color:var(--border)] bg-[color:var(--panel)] hover:border-blue-500/50 hover:bg-blue-500/5";
  };

  const paletteClass = (i: number) => {
    const isCurrent = i === index;
    const sub = state.submittedAnswers[i];
    if (isCurrent) return "bg-blue-600 text-white";
    if (state.reviewMarks[i]) return "bg-violet-500/20 text-violet-200 border-violet-500/50";
    if (sub && microQuiz[i]?.answer === sub) return "bg-emerald-500/20 text-emerald-200 border-emerald-500/50";
    if (sub) return "bg-rose-500/20 text-rose-200 border-rose-500/50";
    if (state.selectedAnswers[i]) return "bg-amber-500/20 text-amber-100 border-amber-500/50";
    return "bg-[color:var(--panel-2)] text-[color:var(--text)] border-[color:var(--border)]";
  };

  if (!current) return <div className="card p-6">No questions found for this topic.</div>;

  return (
    <div className="space-y-5">
      <div className="hero-card p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <p className="eyebrow">Day {topic.day} · {topic.bucket} · {topic.priority}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">{topic.title}</p>
            <p className="text-sm text-muted">Resume-ready topic lesson with MongoDB sync and local fallback.</p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <button onClick={() => updateState((p) => ({ ...p, bookmarked: !p.bookmarked }), false)} className="btn-secondary px-4 py-2">{state.bookmarked ? "Bookmarked" : "Bookmark"}</button>
            <button onClick={() => updateState((p) => ({ ...p, completed: !p.completed }), false)} className="btn-secondary px-4 py-2">{state.completed ? "Completed" : "Mark complete"}</button>
            <a href={`/api/learning/${topic.id}/questions`} target="_blank" className="btn-primary px-4 py-2">100 Q JSON</a>
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
          <textarea value={state.note} onChange={(e) => updateState((p) => ({ ...p, note: e.target.value }), true)} className="mt-3 min-h-28 w-full rounded-xl border px-3 py-2 outline-none" placeholder="Write your own memory trick, doubt, or one-line revision here." />
        </div>
      </section>

      <section className="card p-5 md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-lg font-semibold tracking-tight">Topic practice · 100 MCQs</p>
            <p className="mt-1 text-sm text-muted">Select an option, change it freely, then press Submit Answer. Shortcuts: 1-4 options, Enter submit, arrows navigate, M mark review.</p>
          </div>
          <div className="rounded-2xl border px-4 py-2 text-sm" style={{ borderColor: "var(--border)", background: "var(--panel-2)" }}>
            Answered {answeredCount}/{microQuiz.length} · Score {correctCount}/{microQuiz.length} · Accuracy {accuracy}%
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_260px]">
          <div className="mini-card p-4 md:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm text-muted">Question {index + 1} of {microQuiz.length}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="pill">{current.difficulty}</span>
                <span className="pill">{current.sourceHint || "Learning Library"}</span>
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
                  <span className="pill">Source: {current.source || current.sourceHint || "Learning Library"}</span>
                </div>
              </div>
            ) : null}

            <div className="mt-5 flex flex-wrap justify-between gap-3">
              <button onClick={goPrev} className="btn-secondary px-4 py-2">Previous</button>
              <div className="flex flex-wrap gap-2">
                <button onClick={toggleReview} className="btn-secondary px-4 py-2">{state.reviewMarks[index] ? "Unmark" : "Mark for review"}</button>
                <button onClick={clearCurrent} className="btn-secondary px-4 py-2">Clear</button>
                <button onClick={submitAnswer} disabled={!selected || saving} className="btn-primary px-4 py-2 disabled:opacity-50">{saving ? "Saving..." : "Submit Answer"}</button>
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
      </section>
    </div>
  );
}
