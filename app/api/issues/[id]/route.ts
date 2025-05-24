import authOptions from "@/app/auth/AuthOptions";
import { patchIssueSchema } from "@/app/validationSchema";
import { prisma } from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Authentication check
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Request validation
  const body = await request.json();
  const validation = patchIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  // User assignment validation
  const { assignedToUserId, title, description, status } = body;
  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });
    if (!user) {
      return NextResponse.json({ error: "Invalid user" }, { status: 400 });
    }
  }

  // Check if issue exists
  const issueId = parseInt(params.id);
  if (isNaN(issueId)) {
    return NextResponse.json({ error: "Invalid issue ID" }, { status: 400 });
  }

  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
  });
  if (!issue) {
    return NextResponse.json({ error: "Issue not found" }, { status: 404 });
  }

  // Update issue
  try {
    const updatedIssue = await prisma.issue.update({
      where: { id: issueId },
      data: {
        title,
        description,
        status,
        assignedToUserId,
      },
    });
    return NextResponse.json(updatedIssue);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update issue" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Authentication check
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Validate issue ID
  const issueId = parseInt(params.id);
  if (isNaN(issueId)) {
    return NextResponse.json({ error: "Invalid issue ID" }, { status: 400 });
  }

  // Check if issue exists
  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
  });
  if (!issue) {
    return NextResponse.json({ error: "Issue not found" }, { status: 404 });
  }

  // Delete issue
  try {
    await prisma.issue.delete({
      where: { id: issueId },
    });
    return NextResponse.json(
      { message: "Issue deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete issue" },
      { status: 500 }
    );
  }
}
