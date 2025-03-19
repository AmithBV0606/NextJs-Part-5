// import { ServerComponentOne } from "@/components/server-component-one";
// import { ClientComponentOne } from "@/components/cleint-component-one";
// import { ServerComponentOne } from "@/components/server-component-one";

import { ClientComponentOne } from "@/components/cleint-component-one";

export default function InterLeavingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold underline">InterLeaving</h1>
      {/* Example for Server component inside another server component */}
      {/* <ServerComponentOne /> */}

      {/* Example for Client component inside another client component */}
      {/* <ClientComponentOne /> */}

      {/* Example for Client component inside a server component */}
      {/* <ServerComponentOne /> */}

      {/* Example for Server component inside a client component */}
      <ClientComponentOne />
    </div>
  );
}
