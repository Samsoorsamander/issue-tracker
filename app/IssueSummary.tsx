import React from "react";
import { Status } from "./generated/prisma";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  close: number;
}

const IssueSummary = ({ open, inProgress, close }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In-progress", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: close, status: "CLOSE" },
  ];

  return (
    <Flex>
      {containers.map((container) => (
        <Card key={container.value}>
          <Flex direction="column" gap="1">
            <Link
              className="text-sm font-medium"
              href={`/issues?status=${container.status}`}
            >
              {container.label}
            </Link>
            <Text size="5" className="font-bold">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
