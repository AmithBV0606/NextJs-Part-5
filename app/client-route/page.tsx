"use client";

import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
  const result = serverSideFunction();

  return (
    <div>
      <h1 className="text-2xl font-bold underline">Client route page!!</h1>

      <p>Result : {result}</p>
    </div>
  );
}