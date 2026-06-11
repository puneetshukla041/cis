"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { formatDateForDisplay, getTodayDateOnly } from "@/lib/date";

function readParams(params: URLSearchParams) {
  return {
    q: params.get("q") || "",
    paper: params.get("paper") || "",
    mode: params.get("mode") || "",
    subject: params.get("subject") || "",
    status: params.get("status") || "",
    date: params.get("date") || getTodayDateOnly(),
  };
}

export default function TestFilters({ filters }: { filters?: any }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [form, setForm] = useState(() => readParams(searchParams));
  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setForm(readParams(searchParams)); }, [searchParams]);

  const subjectOptions = useMemo(() => Array.from(new Set(filters?.subjects || [])).sort(), [filters]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const params = new URLSearchParams();
      Object.entries(form).forEach(([key, value]) => { if (value) params.set(key, String(value)); });
      startTransition(() => router.replace(`/tests${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false }));
    }, 250);
    return () => window.clearTimeout(id);
  }, [form, router]);

  const update = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }));
  const reset = () => setForm({ q: "", paper: "", mode: "", subject: "", status: "", date: getTodayDateOnly() });
  const openDatePicker = () => {
    const el = dateRef.current as any;
    if (el?.showPicker) el.showPicker();
    else dateRef.current?.focus();
  };
  const inputClass = "rounded-xl border px-4 py-3 text-sm outline-none";

  return (
    <div className="card p-4">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <input value={form.q} onChange={(event) => update("q", event.target.value)} placeholder="Search title, topic, subject..." className={`${inputClass} xl:col-span-2`} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} />
        <select value={form.paper} onChange={(event) => update("paper", event.target.value)} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }}>
          <option value="">All papers</option><option value="paper1">Paper 1</option><option value="paper2">Paper 2</option>
        </select>
        <select value={form.mode} onChange={(event) => update("mode", event.target.value)} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }}>
          <option value="">All modes</option><option value="daily">Daily</option><option value="mock">Mock</option><option value="topic">Topic</option><option value="weak">Weak</option><option value="random">Random</option>
        </select>
        <select value={form.subject} onChange={(event) => update("subject", event.target.value)} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }}>
          <option value="">All subjects/topics</option>{subjectOptions.map((item: any) => <option key={item} value={item}>{item}</option>)}
        </select>
        <select value={form.status} onChange={(event) => update("status", event.target.value)} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }}>
          <option value="">All status</option><option value="not-started">Not started</option><option value="in-progress">In progress</option><option value="submitted">Submitted</option>
        </select>
        <div className="flex gap-2 md:col-span-2 xl:col-span-2">
          <input ref={dateRef} type="date" value={form.date} onClick={openDatePicker} onFocus={openDatePicker} onChange={(event) => update("date", event.target.value)} className={`${inputClass} flex-1`} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} />
          <button type="button" onClick={() => update("date", getTodayDateOnly())} className="rounded-xl border px-3 text-sm" style={{ borderColor: "var(--border)" }}>Today</button>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">Real-time filters · {form.date ? formatDateForDisplay(form.date) : "All dates"}</p>
        <button type="button" onClick={reset} className="rounded-xl border px-4 py-2 text-sm" style={{ borderColor: "var(--border)" }}>Reset filters</button>
      </div>
      {isPending ? <p className="mt-2 text-xs text-blue-600">Updating results...</p> : null}
    </div>
  );
}
