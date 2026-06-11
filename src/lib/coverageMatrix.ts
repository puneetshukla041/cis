import { paper1LearningTopics } from "@/lib/paper1Learning";

const targets = [
  { area: "Art & Culture", aliases: ["culture", "art"], targetTopics: 10, priority: "Very High", remark: "Folk forms, fairs, deities, paintings, crafts, institutions." },
  { area: "History", aliases: ["history", "saints", "sects", "integration"], targetTopics: 9, priority: "Very High", remark: "Ancient sites, dynasties, battles, movements, literature." },
  { area: "Geography", aliases: ["geography", "minerals", "rivers", "lakes", "irrigation"], targetTopics: 9, priority: "Very High", remark: "Location, physical divisions, climate, soil, resources." },
  { area: "General Science", aliases: ["science", "biology", "physics", "chemistry", "environment"], targetTopics: 6, priority: "Medium-High", remark: "NCERT/Lucent-level factual science plus environment." },
  { area: "Reasoning", aliases: ["reasoning", "logic", "clock", "calendar", "cube", "coding", "series"], targetTopics: 7, priority: "Very High", remark: "Series, coding, relation, Venn, direction, visual reasoning." },
  { area: "Numeracy", aliases: ["numeracy", "arithmetic", "percentage", "average", "interest", "mensuration"], targetTopics: 6, priority: "Very High", remark: "Class-X arithmetic, formula recall and application." },
  { area: "Data Interpretation", aliases: ["data interpretation", "di", "tables", "charts"], targetTopics: 3, priority: "High", remark: "Tables, pie/bar/line charts, sufficiency." },
  { area: "Current Affairs", aliases: ["current affairs", "digital", "governance", "ai", "cyber"], targetTopics: 4, priority: "Monthly Update", remark: "Rajasthan schemes, budget, appointments, awards, IT/cyber awareness." },
];

function matches(topic: any, aliases: string[]) {
  const hay = `${topic.title} ${topic.bucket} ${topic.concepts?.join(" ")}`.toLowerCase();
  return aliases.some((alias) => hay.includes(alias));
}

export function getCoverageMatrix() {
  return targets.map((target) => {
    const topics = paper1LearningTopics.filter((topic) => matches(topic, target.aliases));
    const coverage = Math.min(100, Math.round((topics.length / target.targetTopics) * 100));
    return { ...target, coveredTopics: topics.length, totalMcqs: topics.length * 100, coverage, status: target.area === "Current Affairs" ? "Needs monthly refresh" : coverage >= 95 ? "Complete" : coverage >= 80 ? "Strong" : "Needs expansion", topics: topics.slice(0, 12).map((t) => ({ id: t.id, day: t.day, title: t.title })) };
  });
}

export function getOverallCoverage() {
  const rows = getCoverageMatrix();
  return Math.round(rows.reduce((sum, row) => sum + row.coverage, 0) / rows.length);
}
