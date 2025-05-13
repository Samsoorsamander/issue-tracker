import { prisma } from "@/prisma/client";
import IssueChart from "./IssueChart";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const close = await prisma.issue.count({ where: { status: "CLOSE" } });

  return <IssueChart open={open} close={close} inProgress={inProgress} />;
}
