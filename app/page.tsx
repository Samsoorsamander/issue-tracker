import { prisma } from "@/prisma/client";
import IssueSummary from "./IssueSummary";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const close = await prisma.issue.count({ where: { status: "CLOSE" } });

  return <IssueSummary open={open} close={close} inProgress={inProgress} />;
}
