import { notFound } from "next/navigation";
import LearnTopicClient from "@/components/LearnTopicClient";
import { getUnitBySlug, paper1Units } from "@/data/paper1Units";

export const dynamic = "force-static";

export function generateStaticParams() {
  return paper1Units.map((unit) => ({ slug: unit.slug }));
}

export default async function LearnTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const unit = getUnitBySlug(slug);
  if (!unit) notFound();
  return <LearnTopicClient unit={unit} />;
}
