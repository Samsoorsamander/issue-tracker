"use client";
import { Issue } from "@/app/generated/prisma";
import React from "react";
import IssueFormSkeleton from "./loading";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const EditIssueClientpage = ({ issue }: { issue: Issue }) => {
  return <IssueForm issue={issue} />;
};

export default EditIssueClientpage;
