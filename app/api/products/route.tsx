import { NextRequest, NextResponse } from "next/server";
import schema from "../users/schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "milk", price: 20 },
    { id: 2, name: "coffee", price: 10 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
    // ⬆️ You need to RETURN here
  }

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
