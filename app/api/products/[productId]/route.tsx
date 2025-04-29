import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Tea", price: 5 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  // Checking if the user exist in db.
  // Checking if the body is valid or not.

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  if (params.id > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(
    { id: 1, name: body.name, price: body.price },
    { status: 201 }
  );
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Checking if the user exist in db.
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  // Returning an empty obj
  return NextResponse.json({});
}
