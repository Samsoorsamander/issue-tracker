import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "Samsoor",
    },
    {
      id: 2,
      name: "Samander",
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    NextResponse.json({ error: "name is required" }, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
