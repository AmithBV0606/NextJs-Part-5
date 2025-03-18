"use client";

import { useState } from "react";

export default function NavSearch() {
  console.log(`NavSearch rendered`);

  const [search, setSearch] = useState("");

  return (
    <div>
      <p className="">Nav search input</p>
    </div>
  );
}
