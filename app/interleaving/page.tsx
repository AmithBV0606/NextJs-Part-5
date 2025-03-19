// import { ServerComponentOne } from "@/components/server-component-one";
import { ClientComponentOne } from "@/components/cleint-component-one";

export default function InterLeavingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold underline">InterLeaving</h1>
      {/* <ServerComponentOne /> */}
      <ClientComponentOne />
    </div>
  );
}