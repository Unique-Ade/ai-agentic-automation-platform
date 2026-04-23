import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: "A101",
      type: "Customer Support",
      confidence: 92,
      status: "Auto Approved",
    },
    {
      id: "A102",
      type: "Hiring Review",
      confidence: 58,
      status: "Pending Review",
    }
  ]);
}