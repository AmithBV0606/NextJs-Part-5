"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name, setName] = useState("Batman");

  return (
    <div>
      <h1 className="text-2xl font-bold underline">Client component Two!!!</h1>
    </div>
  );
};