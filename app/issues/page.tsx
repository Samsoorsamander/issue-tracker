import { prisma } from "@/prisma/client";
import IssueTable, { columnNames } from "./IssueTable";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";
import { Issue, Status } from "../generated/prisma";
import IssueAction from "./IssueAction";

interface Props {
  searchParams: Promise<{ status: Status; orderBy: keyof Issue; page: string }>;
}

export default async function IssuePage({ searchParams }: Props) {
  const orderByParams = (await searchParams).orderBy;

  const statues = Object.values(Status);
  const status = statues.includes((await searchParams).status)
    ? (await searchParams).status
    : undefined;

  const orderBy = columnNames.includes(orderByParams)
    ? { [orderByParams]: "asc" }
    : undefined;

  const resolvedParams = await searchParams;
  const page = Number(resolvedParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy: orderBy /**TODO: fixed*/,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  return (
    <Flex direction="column" gap="3">
      <IssueAction />
      <IssueTable searchParams={searchParams} issues={issues} />
    </Flex>
  );
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Issue Tracker - Issue List",
  description: "View all project issues",
};
