import { NextResponse } from "next/server";

export let decisions = [
  {
    id: "A101",
    type: "Customer Support",
    confidence: 92,
    status: "Pending Review",
  },
  {
    id: "A102",
    type: "Hiring Review",
    confidence: 58,
    status: "Pending Review",
  },
  {
    id: "A103",
    type: "Sales Lead",
    confidence: 44,
    status: "Pending Review",
  },
];

export async function GET() {
  return NextResponse.json(decisions);
}