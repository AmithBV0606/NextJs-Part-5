//  This is just to show an example. This is not the actual implementation. Code written in this file is only meant to run on server.

import "server-only";

export const serverSideFunction = () => {
  console.log(
    `use multiple libraries,
        use environment variables
        interact with a database
        process confidential information`
  );
  return "server result!!!";
};