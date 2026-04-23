import { NextResponse } from "next/server";

let logs = [
  {
    id: "A101",
    time: "2026-04-23 10:10",
    action: "Created",
    status: "Success",
    override: "No",
  },
];

export async function POST(req: Request) {
  const body = await req.json();

  const newLog = {
    id: body.id,
    time: new Date().toLocaleString(),
    action: body.action,
    status: "Success",
    override: "Yes",
  };

  logs.unshift(newLog);

  return NextResponse.json({
    success: true,
    message: `Decision ${body.id} ${body.action} successfully.`,
  });
}

export async function GET() {
  return NextResponse.json(logs);
}





// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const body = await req.json();

//   return NextResponse.json({
//     message: `Decision ${body.id} ${body.action} successfully.`,
//   });
// }