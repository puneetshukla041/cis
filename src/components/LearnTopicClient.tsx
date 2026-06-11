"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Paper1Unit } from "@/data/paper1Units";

export default function LearnTopicClient({ unit }: { unit: Paper1Unit }) {
  const [note, setNote] = useState("");
  const [bookmarked, setBookmarked] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const score = useMemo(() => unit.microQuiz.reduce((sum, question, index) => sum + (answers[index] === question.answer ? 1 : 0), 0), [answers, unit.microQuiz]);

  useEffect(() => {
    try {
      const progress = JSON.parse(localStorage.getItem("bci-learning-progress") || "{}");
      const saved = progress[unit.slug] || {};
      setNote(saved.note || "");
      setBookmarked(Boolean(saved.bookmarked));
      setCompleted(Boolean(saved.completed));
    } catch {}
  }, [unit.slug]);

  useEffect(() => {
    try {
      const progress = JSON.parse(localStorage.getItem("bci-learning-progress") || "{}");
      progress[unit.slug] = { ...progress[unit.slug], note, bookmarked, completed, updatedAt: new Date().toISOString(), quizScore: score, quizTotal: unit.microQuiz.length };
      localStorage.setItem("bci-learning-progress", JSON.stringify(progress));
    } catch {}
  }, [unit.slug, note, bookmarked, completed, score, unit.microQuiz.length]);

  const printNotes = () => window.print();

  return (
    <div className="space-y-5">
      <div className="card p-5 no-print">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-muted">Day {unit.day} · {unit.section} · {unit.priority}</p>
            <p className="mt-1 text-base">{unit.title}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/learn" className="rounded-xl border px-3 py-2 text-sm" style={{ borderColor: "var(--border)" }}>All topics</Link>
            <button onClick={() => setBookmarked((value) => !value)} className="rounded-xl border px-3 py-2 text-sm" style={{ borderColor: "var(--border)" }}>{bookmarked ? "Bookmarked" : "Bookmark"}</button>
            <button onClick={() => setCompleted((value) => !value)} className="rounded-xl border px-3 py-2 text-sm" style={{ borderColor: "var(--border)" }}>{completed ? "Completed" : "Mark complete"}</button>
            <button onClick={() => window.open(`/api/learn/topic-json?slug=${unit.slug}`, "_blank")} className="rounded-xl bg-blue-600 px-3 py-2 text-sm text-white">100 Q JSON</button>
            <button onClick={printNotes} className="rounded-xl border px-3 py-2 text-sm" style={{ borderColor: "var(--border)" }}>Print/PDF</button>
          </div>
        </div>
      </div>

      <article className="card p-5 print-report">
        <p className="text-sm text-muted">Why this matters</p>
        <p className="mt-2 text-sm leading-7">{unit.examFocus}</p>
        <p className="mt-3 text-xs text-muted">Basis: {unit.sourceBasis}</p>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_360px]">
          <div className="space-y-5">
            <section>
              <p className="text-sm text-muted">Concepts to learn</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {unit.concepts.map((concept) => <span key={concept} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: "var(--border)" }}>{concept}</span>)}
              </div>
            </section>

            <section>
              <p className="text-sm text-muted">Teacher notes</p>
              <div className="mt-3 space-y-3 text-sm leading-7">
                {unit.notes.map((item) => <p key={item} className="rounded-2xl border p-3" style={{ borderColor: "var(--border)", background: "var(--panel-2)" }}>{item}</p>)}
              </div>
            </section>

            <section>
              <p className="text-sm text-muted">PYQ style</p>
              <ul className="mt-3 space-y-2 pl-5 text-sm text-muted">
                {unit.pyqPatterns.map((item) => <li key={item} className="list-disc">{item}</li>)}
              </ul>
            </section>

            <section>
              <p className="text-sm text-muted">Common traps</p>
              <ul className="mt-3 space-y-2 pl-5 text-sm text-muted">
                {unit.traps.map((item) => <li key={item} className="list-disc">{item}</li>)}
              </ul>
            </section>
          </div>

          <aside className="space-y-4">
            {unit.memoryTables.map((table) => (
              <div key={table.title} className="rounded-2xl border p-4" style={{ borderColor: "var(--border)" }}>
                <p className="text-sm text-muted">{table.title}</p>
                <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: "var(--border)" }}>
                  <table className="w-full text-left text-xs">
                    <tbody>
                      {table.rows.map((row, idx) => <tr key={`${table.title}-${idx}`} className="border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>{row.map((cell, i) => <td key={i} className="px-3 py-2 align-top">{cell}</td>)}</tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </article>

      <div className="grid gap-5 lg:grid-cols-[1fr_360px] no-print">
        <section className="card p-5">
          <p className="text-sm text-muted">Micro quiz · {score}/{unit.microQuiz.length}</p>
          <div className="mt-4 space-y-4">
            {unit.microQuiz.map((question, index) => {
              const selected = answers[index];
              return (
                <div key={question.question} className="rounded-2xl border p-4" style={{ borderColor: "var(--border)" }}>
                  <p className="text-sm">{index + 1}. {question.question}</p>
                  <div className="mt-3 grid gap-2 md:grid-cols-2">
                    {(['A','B','C','D'] as const).map((key) => {
                      const isPicked = selected === key;
                      const correct = question.answer === key;
                      const style = selected ? (correct ? { borderColor: '#16a34a', background: 'rgba(22,163,74,.12)' } : isPicked ? { borderColor: '#dc2626', background: 'rgba(220,38,38,.12)' } : { borderColor: 'var(--border)' }) : { borderColor: 'var(--border)' };
                      return <button key={key} onClick={() => setAnswers((prev) => ({ ...prev, [index]: key }))} className="rounded-xl border px-3 py-2 text-left text-sm" style={style}><span className="mr-2 text-xs text-muted">{key}</span>{question.options[key]}</button>;
                    })}
                  </div>
                  {selected ? <p className="mt-3 text-sm text-muted">{selected === question.answer ? 'Correct. ' : `Correct answer: ${question.answer}. `}{question.explanation}</p> : null}
                </div>
              );
            })}
          </div>
        </section>

        <aside className="card p-5">
          <p className="text-sm text-muted">Personal note</p>
          <textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Write your own memory trick or weak point here..." className="mt-3 h-60 w-full rounded-xl border px-3 py-2 text-sm outline-none" style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} />
          <p className="mt-3 text-xs text-muted">Saved automatically in this browser.</p>
        </aside>
      </div>
    </div>
  );
}
