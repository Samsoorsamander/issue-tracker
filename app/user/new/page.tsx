"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUser = () => {
  const router = useRouter();
  return (
    <div>
      <h1>New User</h1>
      <button className="btn btn-primary" onClick={() => router.push("/user")}>
        Create
      </button>
    </div>
  );
};

export default NewUser;
