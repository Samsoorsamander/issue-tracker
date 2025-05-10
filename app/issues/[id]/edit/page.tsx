import { notFound } from "next/navigation";
import { prisma } from "@/prisma/client";
import EditIssueClientpage from "./EditIssueClientpage";

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  return <EditIssueClientpage issue={issue} />;
};

export default EditIssuePage;
