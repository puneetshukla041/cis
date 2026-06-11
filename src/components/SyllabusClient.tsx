"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { formatDateForDisplay, getDayNumber, getTodayDateOnly } from "@/lib/date";
import { getUnitForDay, paper1Units } from "@/data/paper1Units";

export default function SyllabusClient() {
  const [selectedDate, setSelectedDate] = useState(getTodayDateOnly());
  const dateRef = useRef<HTMLInputElement>(null);
  const dayNumber = getDayNumber(selectedDate);
  const activeUnit = getUnitForDay(dayNumber);
  const sections = useMemo(() => Array.from(new Set(paper1Units.map((unit) => unit.section))), []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("bci-syllabus-date");
      if (saved) setSelectedDate(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem("bci-syllabus-date", selectedDate); } catch {}
  }, [selectedDate]);

  const openPicker = () => {
    const el = dateRef.current as any;
    if (el?.showPicker) el.showPicker();
    else dateRef.current?.focus();
  };

  return (
    <div className="space-y-5">
      <div className="card p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-muted">Paper 1 syllabus and learning sequence</p>
            <p className="mt-1 text-sm text-muted">100 MCQs · 100 marks · 2 hours · negative marking 1/3</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <input
              ref={dateRef}
              type="date"
              value={selectedDate}
              onClick={openPicker}
              onFocus={openPicker}
              onChange={(event) => setSelectedDate(event.target.value)}
              className="rounded-xl border px-3 py-2 text-sm outline-none"
              style={{ background: "var(--panel-2)", borderColor: "var(--border)" }}
            />
            <button type="button" onClick={() => setSelectedDate(getTodayDateOnly())} className="rounded-xl border px-3 py-2 text-sm" style={{ borderColor: "var(--border)" }}>Today</button>
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="mini-card p-4"><p className="text-xs text-muted">Date</p><p className="mt-1 text-sm">{formatDateForDisplay(selectedDate)}</p></div>
          <div className="mini-card p-4"><p className="text-xs text-muted">Learning day</p><p className="mt-1 text-sm">Day {dayNumber}</p></div>
          <div className="mini-card p-4"><p className="text-xs text-muted">Today topic</p><p className="mt-1 text-sm">{activeUnit.title}</p></div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
        <aside className="card p-4 lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-2">
            {sections.map((section) => (
              <a key={section} href={`#${section.replace(/\W+/g, "-").toLowerCase()}`} className="block rounded-xl border px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-900" style={{ borderColor: "var(--border)" }}>{section}</a>
            ))}
          </div>
          <Link href={`/learn/${activeUnit.slug}`} className="mt-4 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm text-white">Open today learning</Link>
        </aside>

        <div className="space-y-5">
          {sections.map((section) => (
            <section key={section} id={section.replace(/\W+/g, "-").toLowerCase()} className="card p-5">
              <p className="text-sm text-muted">{section}</p>
              <div className="mt-4 space-y-3">
                {paper1Units.filter((unit) => unit.section === section).map((unit) => (
                  <details key={unit.slug} className="rounded-2xl border p-4" style={{ borderColor: "var(--border)", background: "var(--panel-2)" }} open={unit.slug === activeUnit.slug}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm">
                      <span>Day {unit.day}: {unit.title}</span>
                      <span className="rounded-full border px-2 py-1 text-xs text-muted" style={{ borderColor: "var(--border)" }}>{unit.priority}</span>
                    </summary>
                    <div className="mt-4 grid gap-4 md:grid-cols-[1fr_260px]">
                      <div className="space-y-3 text-sm text-muted">
                        <p>{unit.examFocus}</p>
                        <div className="flex flex-wrap gap-2">
                          {unit.concepts.slice(0, 8).map((concept) => <span key={concept} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: "var(--border)" }}>{concept}</span>)}
                        </div>
                        <ul className="space-y-2 pl-5">
                          {unit.notes.slice(0, 4).map((note) => <li key={note} className="list-disc">{note}</li>)}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link href={`/learn/${unit.slug}`} className="block rounded-xl bg-blue-600 px-4 py-2 text-center text-sm text-white">Learn</Link>
                        <button type="button" onClick={() => window.open(`/api/learn/topic-json?slug=${unit.slug}`, "_blank")} className="w-full rounded-xl border px-4 py-2 text-sm" style={{ borderColor: "var(--border)" }}>Topic JSON</button>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
