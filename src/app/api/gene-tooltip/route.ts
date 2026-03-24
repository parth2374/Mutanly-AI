import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    console.log("API KEY EXISTS:", !!process.env.GEMINI_API_KEY);
    console.log("API KEY LENGTH:", process.env.GEMINI_API_KEY?.length);
    const { gene } = await req.json();

    console.log("Gene received:", gene);

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `
Explain the human gene "${gene}" in 1-2 simple sentences.

Rules:
- Use simple language
- Mention its biological function
- Mention disease association if known
- Max 30 words
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    console.log("Gemini response:", text);

    return NextResponse.json({
      explanation: text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      explanation: "Gene involved in biological processes in the human body.",
    });
  }
}