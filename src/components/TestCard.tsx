"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "./ToastProvider";
import ProgressBar from "./ProgressBar";
import { formatDateForDisplay } from "@/lib/date";

type Props = { test: any };

export default function TestCard({ test }: Props) {
  const router = useRouter();
  const toast = useToast();
  const attempt = test.latestAttempt;

  const start = async () => {
    const res = await fetch("/api/attempts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ testId: test._id, mode: test.mode }),
    });
    const json = await res.json();
    if (!res.ok) return toast.push(json.message || "Could not start test", "error");
    router.push(`/attempt/${json.data.attempt._id}`);
  };

  const deleteTest = async () => {
    if (!confirm("Delete this test and all attempts?")) return;
    const res = await fetch(`/api/tests/${test._id}`, { method: "DELETE" });
    if (res.ok) {
      toast.push("Test deleted", "success");
      router.refresh();
    } else {
      toast.push("Delete failed", "error");
    }
  };

  const paperLabel = test.paper === "paper1" ? "Paper 1" : "Paper 2";
  const topics = (test.topicCoverage || []).slice(0, 3).map((row: any) => row.topic).filter(Boolean);
  const accuracy = attempt?.accuracy || 0;

  return (
    <div className="card hover-lift p-5 animate-in">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <span className="pill">{paperLabel}</span>
            <span className="pill">{test.mode || "daily"}</span>
            <span className="pill">{test.questionCount || 0} Q</span>
          </div>
          <p className="mt-4 line-clamp-2 text-base font-semibold leading-6">{test.title || "Untitled Test"}</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            {formatDateForDisplay(test.date)} • {test.durationMinutes || 120} min • Neg {test.negativeMarking || "1/3"}
          </p>
        </div>
        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-2xl md:flex" style={{ background: "var(--brand-soft)", color: "var(--brand)" }}>
          {test.paper === "paper1" ? "P1" : "P2"}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="pill">{test.subject || "Mixed"}</span>
        <span className="pill">Marks {test.totalMarks || 100}</span>
        {topics.map((topic: string) => <span key={topic} className="pill">{topic}</span>)}
      </div>

      <div className="mt-5 rounded-2xl border p-4" style={{ borderColor: "var(--border)", background: "var(--panel-2)" }}>
        <ProgressBar value={accuracy} label={attempt ? "Last accuracy" : "Not attempted"} />
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div><p className="font-semibold">{attempt?.attempted || 0}</p><p className="text-xs text-muted">Attempted</p></div>
          <div><p className="font-semibold">{attempt?.score ?? "-"}</p><p className="text-xs text-muted">Score</p></div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button onClick={start} className="btn-primary px-4 py-2 text-sm">
          {attempt?.status === "in-progress" ? "Resume" : "Start"}
        </button>
        <Link href={`/tests/${test._id}`} className="btn-secondary px-4 py-2 text-sm">Manage</Link>
        {attempt?.status === "submitted" ? <Link href={`/review/${attempt._id}`} className="btn-secondary px-4 py-2 text-sm">Review</Link> : null}
        <button onClick={deleteTest} className="btn-secondary px-4 py-2 text-sm" style={{ color: "var(--danger)" }}>Delete</button>
      </div>
    </div>
  );
}
