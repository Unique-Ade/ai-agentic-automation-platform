import { NextResponse } from "next/server";
import { decisions } from "../../decisions/route";

type Log = {
   id: string;
   time: string;
   action: string;
   status: string;
   override: string;
};

let logs : Log[] = [];

export async function POST(req: Request) {
  const body = await req.json();

  const item = decisions.find((d) => d.id === body.id);

  if (item) {
    if (body.action === "approved") item.status = "Approved";
    if (body.action === "rejected") item.status = "Rejected";
    if (body.action === "retried") item.status = "Reprocessing";
  }

  logs.unshift({
    id: body.id,
    time: new Date().toLocaleString(),
    action: body.action,
    status: "Success",
    override: "Yes",
  });

  return NextResponse.json({
    message: `Decision ${body.id} ${body.action} successfully.`,
  });
}

export async function GET() {
  return NextResponse.json(logs);
}