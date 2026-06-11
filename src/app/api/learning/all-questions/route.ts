export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { getAllPaper1QuestionBank } from "@/lib/paper1Learning";

export async function GET() {
  return NextResponse.json(getAllPaper1QuestionBank(), {
    headers: {
      "Content-Disposition": 'attachment; filename="paper1-50day-5000-question-bank.json"',
    },
  });
}
