"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: Props) => {
  console.log("error", error);
  return (
    <>
      <div>Undexpected error happened</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default error;
