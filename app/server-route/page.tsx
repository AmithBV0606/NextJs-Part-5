import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();

  return (
    <div>
      <h1 className="text-2xl font-bold underline">Server route page!!</h1>
      <p>Result : {result}</p>
    </div>
  );
}