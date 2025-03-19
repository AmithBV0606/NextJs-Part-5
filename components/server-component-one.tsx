import fs from "fs";
import { ServerComponentTwo } from "./server-component-two";

export const ServerComponentOne = () => {
  fs.readFileSync("components/server-component-one.tsx", "utf-8");

  return (
    <div>
      <h1 className="text-2xl font-bold underline">server-component-one</h1>
      <ServerComponentTwo />
    </div>
  );
};