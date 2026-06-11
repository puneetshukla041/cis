export const dynamic = "force-dynamic";
import Link from "next/link";
import { paper1LearningTopics } from "@/lib/paper1Learning";

const buckets = Array.from(new Set(paper1LearningTopics.map((t) => t.bucket)));

export default function LearnPage() {
  return (
    <div className="space-y-7 animate-in">
      <section className="hero-card p-6 md:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="eyebrow">Paper 1 library</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">50-day topic course with 100 MCQs per lesson.</h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">
              Study from structured notes, then use the same topic for a full question set. The library is built for repeat revision, not one-time reading.
            </p>
          </div>
          <a href="/api/learning/all-questions" target="_blank" className="btn-primary shrink-0">Download 5000 MCQ bank</a>
        </div>
      </section>

      {buckets.map((bucket) => {
        const topics = paper1LearningTopics.filter((topic) => topic.bucket === bucket);
        return (
          <section key={bucket} className="space-y-3">
            <div className="flex items-center justify-between gap-3 px-1">
              <p className="text-sm font-medium text-muted">{bucket}</p>
              <span className="pill">{topics.length} topics</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {topics.map((topic) => (
                <Link key={topic.id} href={`/learn/${topic.id}`} className="card hover-lift block p-5">
                  <div className="flex flex-wrap gap-2"><span className="pill">Day {topic.day}</span><span className="pill">{topic.priority}</span></div>
                  <p className="mt-4 text-base font-semibold leading-6">{topic.title}</p>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{topic.why}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {topic.concepts.slice(0, 5).map((concept) => <span key={concept} className="pill">{concept}</span>)}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
