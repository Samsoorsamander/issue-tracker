"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const newIssue = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root size="3" placeholder="Title" />
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default newIssue;
