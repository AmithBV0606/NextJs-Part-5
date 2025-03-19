import fs from "fs";

export const ServerComponentTwo = () => {
  fs.readFileSync("components/server-component-one.tsx", "utf-8");

  return (
    <div>
      <h1 className="font-bold text-2xl underline">server-component-two</h1>
    </div>
  );
};