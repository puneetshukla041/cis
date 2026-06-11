import { NextRequest, NextResponse } from "next/server";
import { getUnitBySlug } from "@/data/paper1Units";
import { connectDB } from "@/lib/mongodb";
import { QuestionModel } from "@/models/Question";

export const dynamic = "force-dynamic";

function clean(value: unknown) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function normalizeQuestionText(text: string) {
  return clean(text).toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
}

function fallbackQuestions(unit: any) {
  const base = unit.microQuiz || [];
  const conceptItems = unit.concepts || [];
  const tableRows = (unit.memoryTables || []).flatMap((table: any) => table.rows.map((row: string[]) => ({ table: table.title, row })));
  const questions: any[] = [];

  base.forEach((item: any, index: number) => questions.push({
    question: item.question,
    options: item.options,
    answer: item.answer,
    explanation: item.explanation,
    subject: unit.section,
    chapter: unit.title,
    topic: unit.title,
    subtopic: "Micro Quiz",
    difficulty: index % 3 === 0 ? "easy" : "medium",
    importance: "high",
    sourceHint: "Built-in Paper 1 learning note"
  }));

  conceptItems.forEach((concept: string, index: number) => questions.push({
    question: `Which topic belongs to ${unit.title}? (${index + 1})`,
    options: { A: concept, B: "Unrelated topic", C: "Paper 2-only programming output", D: "Advanced senior-level theory" },
    answer: "A",
    explanation: `${concept} is part of the high-yield concept list for ${unit.title}.`,
    subject: unit.section,
    chapter: unit.title,
    topic: unit.title,
    subtopic: "Concept recognition",
    difficulty: "easy",
    importance: "medium",
    sourceHint: "Built-in Paper 1 learning note"
  }));

  tableRows.forEach((entry: any, index: number) => {
    const row = entry.row;
    if (!row?.[0] || !row?.[1]) return;
    questions.push({
      question: `In the memory table '${entry.table}', '${row[0]}' is correctly associated with:`,
      options: { A: row[1], B: row[2] || "Incorrect pair", C: "None of the exam-relevant pairs", D: "Only Paper 2 syllabus" },
      answer: "A",
      explanation: `${row[0]} is associated with ${row.slice(1).join(" / ")}.`,
      subject: unit.section,
      chapter: unit.title,
      topic: unit.title,
      subtopic: entry.table,
      difficulty: index % 2 === 0 ? "easy" : "medium",
      importance: "high",
      sourceHint: "Built-in memory table"
    });
  });

  const unique = new Map<string, any>();
  questions.forEach((item) => {
    const key = normalizeQuestionText(item.question);
    if (key && !unique.has(key)) unique.set(key, item);
  });
  return Array.from(unique.values()).slice(0, 100);
}

function toExportPayload(unit: any, questions: any[], warning?: string) {
  return {
    exam_name: "Rajasthan Computer Instructor",
    examName: "Rajasthan Computer Instructor",
    paper: "paper1",
    paperName: "Paper 1",
    date: new Date().toISOString().slice(0, 10),
    durationMinutes: 120,
    mode: "topic",
    title: `Paper 1 Topic Practice - ${unit.title}`,
    category: "Paper 1",
    subject: unit.section,
    totalQuestions: questions.length,
    totalMarks: questions.length,
    negativeMarking: "1/3",
    tags: ["paper1", "topic", unit.slug, unit.section.toLowerCase().replace(/\s+/g, "-")],
    warning,
    questions
  };
}

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug") || "";
  const unit = getUnitBySlug(slug);
  if (!unit) return NextResponse.json({ error: "Topic not found" }, { status: 404 });

  const regexTerms = [unit.title, unit.section, ...unit.keywords, ...unit.concepts.slice(0, 10)].map((item) => clean(item)).filter(Boolean);
  const unique = new Map<string, any>();
  let dbError = "";

  try {
    await connectDB();
    const escaped = regexTerms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const regex = new RegExp(escaped.join("|"), "i");
    const rows = await QuestionModel.find({
      $or: [
        { subject: regex },
        { chapter: regex },
        { topic: regex },
        { subtopic: regex },
        { question: regex },
        { sourceHint: regex }
      ]
    }).select("question options answer explanation subject chapter topic subtopic difficulty importance sourceHint").limit(300).lean();

    for (const row of rows as any[]) {
      const key = normalizeQuestionText(row.question);
      if (!key || unique.has(key)) continue;
      unique.set(key, {
        question: row.question,
        options: row.options,
        answer: row.answer,
        explanation: row.explanation,
        subject: row.subject,
        chapter: row.chapter,
        topic: row.topic,
        subtopic: row.subtopic || "",
        difficulty: row.difficulty || "medium",
        importance: row.importance || "medium",
        sourceHint: row.sourceHint || "Question bank"
      });
      if (unique.size >= 100) break;
    }
  } catch (error: any) {
    dbError = error?.message || "MongoDB not available";
  }

  if (unique.size < 100) {
    for (const item of fallbackQuestions(unit)) {
      const key = normalizeQuestionText(item.question);
      if (!key || unique.has(key)) continue;
      unique.set(key, item);
      if (unique.size >= 100) break;
    }
  }

  const questions = Array.from(unique.values()).slice(0, 100);
  const warning = questions.length < 100
    ? `Only ${questions.length} topic-matched questions available. Upload more tagged questions for this topic to generate a full 100-question set.${dbError ? ` DB note: ${dbError}` : ""}`
    : undefined;

  return NextResponse.json(toExportPayload(unit, questions, warning), {
    headers: { "Content-Disposition": `attachment; filename="${unit.slug}-topic-practice.json"` }
  });
}
