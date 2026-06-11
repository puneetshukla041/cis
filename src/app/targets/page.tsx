export const dynamic = "force-dynamic";
import Link from "next/link";
import { getDashboardData } from "@/lib/serverData";
import { paper1LearningTopics } from "@/lib/paper1Learning";

export default async function TargetsPage() {
  const data = await getDashboardData();
  const progress = data.learningProgress || [];
  const nextTopic = paper1LearningTopics.find((topic) => !progress.some((p: any) => p.topicId === topic.id && p.completed)) || paper1LearningTopics[0];
  const weak = data.weakestTopics?.slice(0, 4) || [];
  const targets = [
    { title: `Read Day ${nextTopic.day} notes`, detail: nextTopic.title, href: `/learn/${nextTopic.id}` },
    { title: "Solve 100 topic MCQs", detail: "Use Learning Practice and read every explanation after submit.", href: `/learn/${nextTopic.id}` },
    { title: "Revise 30 wrong questions", detail: weak.length ? weak.map((w:any)=>w.key).join(", ") : "Use your latest review page and bookmarks.", href: "/dashboard" },
    { title: "Complete 1 weak-topic set", detail: "Use Practice > Weak-topic priority > 60 questions.", href: "/practice" },
  ];
  return <div className="space-y-6 animate-in"><section className="hero-card p-6 md:p-8"><p className="eyebrow">Daily target engine</p><h1 className="mt-3 text-2xl font-semibold tracking-tight">Today’s rank-focused work</h1><p className="mt-3 text-sm text-muted">Targets are created from learning completion and weak-topic analytics.</p></section><section className="grid gap-4 md:grid-cols-2">{targets.map((t, i) => <Link href={t.href} key={t.title} className="card hover-lift p-5"><p className="text-sm text-muted">Target {i+1}</p><p className="mt-2 text-lg font-medium">{t.title}</p><p className="mt-2 text-sm leading-6 text-muted">{t.detail}</p></Link>)}</section></div>;
}
