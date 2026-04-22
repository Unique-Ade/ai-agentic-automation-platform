import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { id, action } = body;

  return NextResponse.json({
    success: true,
    message: `Decision ${id} ${action} successfully.`,
  });
}