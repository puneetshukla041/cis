export type PaperType = "paper1" | "paper2";
export type TestMode = "daily" | "mock" | "topic" | "weak" | "random";
export type Difficulty = "easy" | "medium" | "hard";
export type Importance = "low" | "medium" | "high";
export type OptionKey = "A" | "B" | "C" | "D";
export type AttemptStatus = "in-progress" | "submitted";
export type ReviewStatus = "draft" | "reviewed" | "approved" | "rejected";
export type QuestionSource = "Learning Library" | "Uploaded JSON" | "Previous Year Pattern" | "Custom Test";
export type PyqSimilarity = "direct" | "high" | "medium" | "low";

export interface QuestionInput {
  question: string;
  options: Record<OptionKey, string>;
  answer: OptionKey;
  explanation: string;
  subject: string;
  chapter: string;
  topic: string;
  subtopic?: string;
  difficulty: Difficulty;
  importance: Importance;
  sourceHint?: string;
  source?: QuestionSource;
  reviewStatus?: ReviewStatus;
  facultyReviewed?: boolean;
  factSource?: string;
  pyqSimilarity?: PyqSimilarity;
  examPatternTag?: string;
  whyCorrect?: string;
  whyOthersWrong?: string;
  qualityScore?: number;
}

export interface TestUploadInput {
  title: string;
  examName?: string;
  paperName?: string;
  description?: string;
  paper: PaperType;
  date?: string;
  durationMinutes?: number;
  mode?: TestMode;
  category?: string;
  subject?: string;
  totalMarks?: number;
  negativeMarking?: string;
  tags?: string[];
  questions: QuestionInput[];
}

export interface QuestionView extends QuestionInput {
  _id: string;
  testId: string;
  questionHash: string;
  optionHash: string;
  order: number;
}

export interface AnswerState {
  questionId: string;
  selectedOption?: OptionKey;
  correctOption: OptionKey;
  isCorrect?: boolean;
  isSkipped?: boolean;
  isBookmarked?: boolean;
  timeSpentSeconds: number;
}
