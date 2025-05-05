"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { Controller, Form, useForm } from "react-hook-form";
import "easymde/dist/easymde.min.css";

interface IssueForm {
  title: string;
  description: string;
}
const NewIssuePage = () => {
  const { register, control } = useForm<IssueForm>();
  return (
    <Form className="max-w-xl space-y-3">
      <TextField.Root size="3" placeholder="Title" {...register("title")} />
      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      <Button>Submit New Issue</Button>
    </Form>
  );
};

export default NewIssuePage;
