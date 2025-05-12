import React from "react";
import { Table } from "@radix-ui/themes";
import { IssueStatusBadge, Link } from "@/app/components";
import NextLink from "next/link";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Issue, Status } from "../generated/prisma";

interface Props {
  searchParams: Promise<{ status: Status; orderBy: keyof Issue; page: string }>;
  issues: Issue[];
}

const IssueTable = async ({ searchParams, issues }: Props) => {
  const orderByParams = (await searchParams).orderBy;

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map(async (column) => (
            <Table.ColumnHeaderCell
              className={column.classname}
              key={column.value}
            >
              <NextLink
                href={{
                  query: { ...(await searchParams), orderBy: column.value },
                }}
              >
                {column.label}
              </NextLink>
              {column.value === orderByParams && (
                <ArrowUpIcon className="inline" />
              )}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell>
              <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              <div className="block md:hidden">
                <IssueStatusBadge status={issue.status} />
              </div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <IssueStatusBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.createdAt.toDateString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

const columns: {
  label: string;
  value: keyof Issue;
  classname?: string;
}[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status", classname: "hidden md:table-cell" },
  { label: "Created", value: "createdAt", classname: "hidden md:table-cell" },
];

export const columnNames = columns.map((column) => column.value);

export default IssueTable;
