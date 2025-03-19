"use client";

import { useState } from "react";
import { ClientComponentTwo } from "./cleint-component-two";

export const ClientComponentOne = () => {
  const [name, setName] = useState("Batman");

  return (
    <div>
      <h1 className="text-2xl font-bold underline">Client component one!!!</h1>
      <ClientComponentTwo />
    </div>
  );
};