import { connectDB } from "@/lib/mongodb";
import { ok, fail, handleApiError } from "@/lib/response";
import { LearningProgressModel } from "@/models/LearningProgress";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_USER_ID = process.env.NEXT_PUBLIC_DEFAULT_USER_ID || "default-user";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const topicId = url.searchParams.get("topicId") || "";
    if (!topicId) return fail("topicId is required", 400);
    if (!process.env.MONGODB_URI) return ok({ progress: null, storage: "local" });
    await connectDB();
    const progress = await LearningProgressModel.findOne({ userId: DEFAULT_USER_ID, topicId }).lean();
    return ok({ progress, storage: "mongo" });
  } catch (error) {
    return handleApiError(error, "GET /api/learning/progress");
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const topicId = String(body.topicId || "");
    if (!topicId) return fail("topicId is required", 400);
    if (!process.env.MONGODB_URI) return ok({ progress: body, storage: "local" });
    await connectDB();
    const attempted = Object.keys(body.submittedAnswers || {}).length;
    const correct = Object.entries(body.submittedAnswers || {}).filter(([key, value]) => body.answerKey?.[key] === value).length;
    const wrong = Math.max(0, attempted - correct);
    const accuracy = attempted ? Math.round((correct / attempted) * 100) : 0;
    const progress = await LearningProgressModel.findOneAndUpdate(
      { userId: DEFAULT_USER_ID, topicId },
      {
        userId: DEFAULT_USER_ID,
        topicId,
        topicTitle: body.topicTitle || "",
        day: Number(body.day || 0),
        bookmarked: Boolean(body.bookmarked),
        completed: Boolean(body.completed),
        note: body.note || "",
        lastQuestionIndex: Number(body.lastQuestionIndex || 0),
        selectedAnswers: body.selectedAnswers || {},
        submittedAnswers: body.submittedAnswers || {},
        reviewMarks: body.reviewMarks || {},
        totalQuestions: Number(body.totalQuestions || 0),
        attempted,
        correct,
        wrong,
        accuracy,
        studyTimeSeconds: Number(body.studyTimeSeconds || 0),
        revisionCount: Number(body.revisionCount || 0),
        lastOpenedAt: new Date(),
      },
      { upsert: true, new: true }
    );
    return ok({ progress, storage: "mongo" });
  } catch (error) {
    return handleApiError(error, "POST /api/learning/progress");
  }
}
