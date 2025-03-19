// import { ServerComponentOne } from "@/components/server-component-one";
// import { ClientComponentOne } from "@/components/cleint-component-one";
// import { ServerComponentOne } from "@/components/server-component-one";
// import { ClientComponentOne } from "@/components/cleint-component-one";

import { ClientComponentOne } from "@/components/cleint-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

export default function InterLeavingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold underline">InterLeaving</h1>
      {/* Pattern 1 : Example for Server component inside another server component */}
      {/* <ServerComponentOne /> */}

      {/* Pattern 2 : Example for Client component inside another client component */}
      {/* <ClientComponentOne /> */}

      {/* Pattern 3 : Example for Client component inside a server component */}
      {/* <ServerComponentOne /> */}

      {/* Pattern 4 : Example for Server component inside a client component */}
      {/* <ClientComponentOne /> */}

      {/* Since using server components inside a client component results in an error following is the solution to the Pattern 4's Error : */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </div>
  );
}
