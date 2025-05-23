"use client";
import { ErrorMessage, Spinner } from "@/app/components";
import { Issue, Status } from "@/app/generated/prisma";
import { issueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, Select, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type IssueFormData = z.infer<typeof issueSchema>;

const statuses: { label: string; value: Status }[] = [
  { label: "Open", value: "OPEN" },
  { label: "Close", value: "CLOSE" },
  { label: "In progress", value: "IN_PROGRESS" },
];

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmiting, setSubmiting] = useState(false);
  const router = useRouter();
  // this is temporary
  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmiting(true);
      if (issue) await axios.patch("/api/issues/" + issue.id, data);
      else await axios.post("/api/issues", data);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setSubmiting(false);
      setError("An unexpected error happend.");
    }
  });
  return (
    <div className="max-w-xl ">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="max-w-xl space-y-3" onSubmit={onSubmit}>
        <TextField.Root
          defaultValue={issue?.title}
          size="3"
          placeholder="Title"
          {...register("title")}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        {/* 
        <TextField.Root
          defaultValue={issue?.status}
          size="3"
          placeholder="Status"
          {...register("status")}
        />
        <ErrorMessage>{errors.status?.message}</ErrorMessage> */}
        <Controller
          name="status"
          control={control}
          defaultValue={issue?.status || "OPEN"}
          render={({ field }) => (
            <Select.Root value={field.value} onValueChange={field.onChange}>
              <Select.Trigger placeholder="Select status" />
              <Select.Content>
                {statuses.map((status) => (
                  <Select.Item key={status.value} value={status.value}>
                    {status.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          )}
        />

        <Controller
          control={control}
          name="description"
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={isSubmiting}>
          {issue ? "Update issue" : "Submit issue"}{" "}
          {isSubmiting && <Spinner />}{" "}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
