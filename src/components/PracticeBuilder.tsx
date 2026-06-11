"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./ToastProvider";

const subjectSuggestions = [
  "Rajasthan GK",
  "Rajasthan Art & Culture",
  "Rajasthan History",
  "Rajasthan Geography",
  "Rajasthan Current Affairs",
  "General Science",
  "Logical Reasoning",
  "Basic Numeracy",
  "Data Interpretation",
];

const topicSuggestions = [
  "Folk dances",
  "Painting schools",
  "Fairs and folk deities",
  "Archaeological sites",
  "Battles and chronology",
  "Minerals and mines",
  "Rivers and lakes",
  "Climate and soils",
  "Series and coding",
  "Clock and calendar",
  "Percentage and average",
  "DI tables and charts",
];

type FormState = {
  mode: "random" | "topic" | "weak";
  paper: "" | "paper1" | "paper2";
  source: "mixed" | "library" | "json";
  subject: string;
  topic: string;
  difficulty: "" | "easy" | "medium" | "hard";
  limit: number;
};

export default function PracticeBuilder() {
  const [form, setForm] = useState<FormState>({ mode: "random", paper: "", source: "mixed", subject: "", topic: "", difficulty: "", limit: 25 });
  const [building, setBuilding] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const sourceHelp = useMemo(() => {
    if (form.source === "library") return "Uses only the Paper 1 Learning Library.";
    if (form.source === "json") return "Uses only your uploaded JSON question bank.";
    return "Uses a 50/50 mix when both sources exist, otherwise falls back automatically.";
  }, [form.source]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((prev) => ({ ...prev, [key]: value }));

  const build = async () => {
    setBuilding(true);
    try {
      const payload: Record<string, any> = { ...form, limit: Number(form.limit) };
      Object.keys(payload).forEach((key) => payload[key] === "" && delete payload[key]);
      const res = await fetch("/api/practice/build", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        toast.push(json.message || "Could not build practice", "error");
        return;
      }
      const start = await fetch("/api/attempts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ testId: json.data.test._id, mode: payload.mode || "random" }),
      });
      const started = await start.json();
      if (!start.ok) {
        toast.push("Practice built but attempt failed", "error");
        return;
      }
      toast.push("Practice test ready", "success");
      router.push(`/attempt/${started.data.attempt._id}`);
    } finally {
      setBuilding(false);
    }
  };

  const fieldClass = "field mt-2 w-full";

  return (
    <div className="mx-auto max-w-6xl space-y-6 animate-in">
      <section className="hero-card p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Practice builder</p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Build a focused test from library and uploaded questions.</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted md:text-base">
              Mix Paper 1 learning-bank questions with your uploaded JSON bank, prioritize weak areas, and keep every generated set balanced by topic and difficulty.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 rounded-2xl border p-2 text-center text-xs" style={{ borderColor: "var(--border)", background: "var(--panel-2)" }}>
            <div className="rounded-xl px-3 py-2"><span className="block text-sm font-semibold">50%</span><span className="text-muted">Library</span></div>
            <div className="rounded-xl px-3 py-2"><span className="block text-sm font-semibold">50%</span><span className="text-muted">JSON</span></div>
            <div className="rounded-xl px-3 py-2"><span className="block text-sm font-semibold">0</span><span className="text-muted">Duplicates</span></div>
          </div>
        </div>
      </section>

      <section className="card p-5 md:p-6">
        <div className="grid gap-4 lg:grid-cols-3">
          <label className="control-label">Mode
            <select value={form.mode} onChange={(event) => update("mode", event.target.value as FormState["mode"])} className={fieldClass}>
              <option value="random">Random balanced test</option>
              <option value="topic">Topic-focused test</option>
              <option value="weak">Weak-topic priority</option>
            </select>
          </label>

          <label className="control-label">Source
            <select value={form.source} onChange={(event) => update("source", event.target.value as FormState["source"])} className={fieldClass}>
              <option value="mixed">Mixed: Library + JSON</option>
              <option value="library">Learning Library only</option>
              <option value="json">Uploaded JSON only</option>
            </select>
            <span className="mt-2 block text-xs text-muted">{sourceHelp}</span>
          </label>

          <label className="control-label">Paper
            <select value={form.paper} onChange={(event) => update("paper", event.target.value as FormState["paper"])} className={fieldClass}>
              <option value="">Any paper</option>
              <option value="paper1">Paper 1</option>
              <option value="paper2">Paper 2</option>
            </select>
          </label>

          <label className="control-label">Subject filter
            <input list="practice-subjects" value={form.subject} onChange={(event) => update("subject", event.target.value)} placeholder="Example: Rajasthan GK" className={fieldClass} />
            <datalist id="practice-subjects">{subjectSuggestions.map((item) => <option key={item} value={item} />)}</datalist>
          </label>

          <label className="control-label">Topic filter
            <input list="practice-topics" value={form.topic} onChange={(event) => update("topic", event.target.value)} placeholder="Example: Lakes / OS / Coding" className={fieldClass} />
            <datalist id="practice-topics">{topicSuggestions.map((item) => <option key={item} value={item} />)}</datalist>
          </label>

          <label className="control-label">Difficulty
            <select value={form.difficulty} onChange={(event) => update("difficulty", event.target.value as FormState["difficulty"])} className={fieldClass}>
              <option value="">Balanced difficulty</option>
              <option value="easy">Easy only</option>
              <option value="medium">Medium only</option>
              <option value="hard">Hard only</option>
            </select>
          </label>
        </div>

        <div className="mt-6 grid gap-4 rounded-3xl border p-4 lg:grid-cols-[1fr_220px] lg:items-center" style={{ borderColor: "var(--border)", background: "var(--panel-2)" }}>
          <div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium">Custom test length</p>
              <span className="rounded-full border px-3 py-1 text-sm font-medium" style={{ borderColor: "var(--border)" }}>{form.limit} questions</span>
            </div>
            <input type="range" min="5" max="100" step="5" value={form.limit} onChange={(event) => update("limit", Number(event.target.value))} className="mt-4 w-full accent-blue-600" />
            <div className="mt-2 flex justify-between text-xs text-muted"><span>5</span><span>50</span><span>100</span></div>
          </div>
          <button onClick={build} disabled={building} className="btn-primary h-12 disabled:opacity-60">
            {building ? "Building..." : "Build Practice Test"}
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="mini-card p-4"><p className="text-sm font-medium">Balanced selection</p><p className="mt-2 text-sm leading-6 text-muted">Difficulty mix defaults to easy, medium and hard with topic rotation.</p></div>
        <div className="mini-card p-4"><p className="text-sm font-medium">Weak-topic priority</p><p className="mt-2 text-sm leading-6 text-muted">Wrong-answer analytics influence which topics appear first when available.</p></div>
        <div className="mini-card p-4"><p className="text-sm font-medium">Clean question set</p><p className="mt-2 text-sm leading-6 text-muted">Questions are deduplicated by normalized hash before the practice test is created.</p></div>
      </section>
    </div>
  );
}
