import { NextResponse } from "next/server";

export async function GET() {
  const data = [
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
    },
    {
      id: "A103",
      type: "Sales Lead",
      confidence: 44,
      status: "Needs Approval",
    },
  ];

  return NextResponse.json(data);
}