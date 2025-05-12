// app/issues/page.tsx or app/issues/IssuePage.tsx (server component)

import { prisma } from "@/prisma/client";
import { Status, Issue } from "../generated/prisma";
import IssueAction from "./IssueAction";
import IssueTable from "./IssueTable"; // NEW: Import client component

interface Props {
  searchParams: { status?: Status; orderBy?: keyof Issue };
}

const IssuePage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status!)
    ? searchParams.status
    : undefined;

  const orderBy = searchParams.orderBy;

  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy: orderBy ? { [orderBy]: "asc" } : undefined,
  });

  return (
    <div>
      <IssueAction />
      <IssueTable issues={issues} searchParams={searchParams} />
    </div>
  );
};

export default IssuePage;
