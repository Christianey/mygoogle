"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log("Error massage", error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-10 ">
      <div className="mb-4 text-3xl">Something went wrong!!!</div>
      <button className="text-blue-500" onClick={() => reset()}>
        Please try again
      </button>
    </div>
  );
};

export default Error;
