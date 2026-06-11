import { Schema, models, model, type InferSchemaType } from "mongoose";

const LearningProgressSchema = new Schema(
  {
    userId: { type: String, required: true, index: true },
    topicId: { type: String, required: true, index: true },
    topicTitle: { type: String, default: "" },
    day: { type: Number, default: 0, index: true },
    bookmarked: { type: Boolean, default: false, index: true },
    completed: { type: Boolean, default: false, index: true },
    note: { type: String, default: "" },
    lastQuestionIndex: { type: Number, default: 0 },
    selectedAnswers: { type: Schema.Types.Mixed, default: {} },
    submittedAnswers: { type: Schema.Types.Mixed, default: {} },
    reviewMarks: { type: Schema.Types.Mixed, default: {} },
    totalQuestions: { type: Number, default: 0 },
    attempted: { type: Number, default: 0 },
    correct: { type: Number, default: 0 },
    wrong: { type: Number, default: 0 },
    accuracy: { type: Number, default: 0 },
    studyTimeSeconds: { type: Number, default: 0 },
    revisionCount: { type: Number, default: 0 },
    lastOpenedAt: { type: Date, default: Date.now, index: true },
  },
  { timestamps: true }
);

LearningProgressSchema.index({ userId: 1, topicId: 1 }, { unique: true });

export type LearningProgressDoc = InferSchemaType<typeof LearningProgressSchema>;
export const LearningProgressModel = models.LearningProgress || model("LearningProgress", LearningProgressSchema);
