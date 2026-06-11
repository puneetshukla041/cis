import { getAllPaper1QuestionBank, paper1LearningTopics, type LearningQuestion } from "@/lib/paper1Learning";
import { questionHash, normalizeText } from "@/lib/hash";

export const bannedQuestionPhrases = [
  "in a pyq-style question",
  "pyq-style",
  "let's understand",
  "as an ai",
  "rssb-style",
  "generic question",
  "this is a generated",
];

export type AuditIssue = {
  severity: "low" | "medium" | "high";
  type: "duplicate" | "banned_phrase" | "missing_explanation" | "weak_explanation" | "missing_tag" | "unapproved" | "missing_metadata";
  message: string;
  topicId?: string;
  question?: string;
};

function textHasBannedPhrase(value: string) {
  const lower = value.toLowerCase();
  return bannedQuestionPhrases.find((phrase) => lower.includes(phrase));
}

export function auditQuestions(questions: (LearningQuestion & { topicId?: string })[]) {
  const issues: AuditIssue[] = [];
  const seen = new Map<string, LearningQuestion & { topicId?: string }>();
  let approved = 0;
  let reviewed = 0;
  let draft = 0;
  let rejected = 0;

  for (const q of questions) {
    const key = questionHash(q.question);
    const previous = seen.get(key);
    if (previous) {
      issues.push({ severity: "high", type: "duplicate", message: "Duplicate question text detected.", topicId: q.topicId, question: q.question });
    } else {
      seen.set(key, q);
    }

    if (q.reviewStatus === "approved") approved += 1;
    else if (q.reviewStatus === "reviewed") reviewed += 1;
    else if (q.reviewStatus === "rejected") rejected += 1;
    else draft += 1;

    const phrase = textHasBannedPhrase(`${q.question} ${q.explanation}`);
    if (phrase) issues.push({ severity: "high", type: "banned_phrase", message: `Banned phrase found: ${phrase}`, topicId: q.topicId, question: q.question });
    if (!q.explanation?.trim()) issues.push({ severity: "high", type: "missing_explanation", message: "Explanation is missing.", topicId: q.topicId, question: q.question });
    else if (q.explanation.length < 160) issues.push({ severity: "medium", type: "weak_explanation", message: "Explanation is too short for rank-focused preparation.", topicId: q.topicId, question: q.question });
    if (!q.topic || !q.chapter) issues.push({ severity: "medium", type: "missing_tag", message: "Topic/chapter metadata is incomplete.", topicId: q.topicId, question: q.question });
    if (q.reviewStatus !== "approved") issues.push({ severity: "high", type: "unapproved", message: "Question is not approved for the Learning Library.", topicId: q.topicId, question: q.question });
    if (!q.factSource || !q.examPatternTag || !q.pyqSimilarity || !q.whyCorrect || !q.whyOthersWrong) {
      issues.push({ severity: "medium", type: "missing_metadata", message: "Quality metadata is incomplete.", topicId: q.topicId, question: q.question });
    }
  }

  return {
    total: questions.length,
    unique: seen.size,
    duplicateCount: questions.length - seen.size,
    approved,
    reviewed,
    draft,
    rejected,
    issues,
    highIssues: issues.filter((i) => i.severity === "high").length,
    mediumIssues: issues.filter((i) => i.severity === "medium").length,
    lowIssues: issues.filter((i) => i.severity === "low").length,
  };
}

export function getLearningLibraryAudit() {
  const all = getAllPaper1QuestionBank().topics.flatMap((pack) => pack.questions.map((q: any) => ({ ...q, topicId: pack.tags?.[2] || q.subtopic })));
  return auditQuestions(all);
}

export function getTopicQualityRows() {
  return paper1LearningTopics.map((topic) => {
    const pack = getAllPaper1QuestionBank().topics.find((row: any) => row.tags?.includes(topic.id));
    const questions = (pack?.questions || []).map((q: any) => ({ ...q, topicId: topic.id }));
    const audit = auditQuestions(questions);
    const approvedRatio = audit.total ? Math.round((audit.approved / audit.total) * 100) : 0;
    const quality = Math.max(0, Math.min(100, approvedRatio - audit.highIssues * 2 - audit.mediumIssues));
    return { topicId: topic.id, day: topic.day, title: topic.title, bucket: topic.bucket, total: audit.total, approved: audit.approved, duplicateCount: audit.duplicateCount, highIssues: audit.highIssues, mediumIssues: audit.mediumIssues, quality };
  });
}

export function summarizeTextQuality(text: string) {
  const normalized = normalizeText(text);
  return {
    hasBannedPhrase: Boolean(textHasBannedPhrase(text)),
    wordCount: normalized.split(" ").filter(Boolean).length,
    isThin: normalized.split(" ").filter(Boolean).length < 40,
  };
}
