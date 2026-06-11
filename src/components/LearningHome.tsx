"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { paper1Units } from "@/data/paper1Units";

export default function LearningHome() {
  const [query, setQuery] = useState("");
  const [progress, setProgress] = useState<Record<string, any>>({});
  useEffect(() => { try { setProgress(JSON.parse(localStorage.getItem("bci-learning-progress") || "{}")); } catch {} }, []);
  const units = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return paper1Units;
    return paper1Units.filter((unit) => [unit.title, unit.section, unit.examFocus, unit.concepts.join(" "), unit.keywords.join(" ")].join(" ").toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="space-y-5">
      <div className="card p-5">
        <p className="text-sm text-muted">Learning mode</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search topic, mine, fair, reasoning, percentage..." className="min-w-[260px] flex-1 rounded-xl border px-4 py-3 text-sm outline-none" style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} />
          <Link href="/syllabus" className="rounded-xl border px-4 py-3 text-sm" style={{ borderColor: "var(--border)" }}>Syllabus</Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {units.map((unit) => {
          const done = Boolean(progress[unit.slug]?.completed);
          return (
            <Link key={unit.slug} href={`/learn/${unit.slug}`} className="card block p-5 hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm text-muted">Day {unit.day} · {unit.section}</p>
                <span className="rounded-full border px-2 py-1 text-xs text-muted" style={{ borderColor: "var(--border)" }}>{done ? "Done" : unit.priority}</span>
              </div>
              <p className="mt-2 text-base">{unit.title}</p>
              <p className="mt-2 line-clamp-3 text-sm text-muted">{unit.examFocus}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {unit.keywords.slice(0, 4).map((kw) => <span key={kw} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-muted dark:bg-slate-900">{kw}</span>)}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
