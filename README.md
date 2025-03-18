# Next-Js by Codevolution : Part-5

### Topics Covered :

- Streaming
- Server and Client Composition Patterns
- Server-only Code
- Third Party Packages
- Context Providers
- Client-only Code
- Client Component Placement
- Interleaving Server and Client Components

## Streaming

- Streaming is third and last Server rendering strategy that allows for progressive UI rendering from the server.

- Work is broken down into smaller chunks and streamed to the client as soon as they're ready.

- This means users can see parts of the page right away, without waiting for everything to load.

- It's particularly powerful for improving initial page load times and handling UI elements that depends on slower data fetches, which would normally hold up the entire route.

- Streaming comes built right into the App Router.

### Demo : 

- Create the following components which mimics the delay.

```js
// components/product.tsx

export const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Product</div>;
};
```

```js
// components/reviews.tsx

export const Reviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>Reviews</div>;
};
```

- Create a folder named `product-reviews` and a `page.tsx` file inside it.

```js
// app/product-reviews/page.tsx

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export default function ProductReviews() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold underline">Product reviews</h1>

      <Suspense fallback={<p>Loading product details.....</p>}>
        <Product />
      </Suspense>

      <Suspense fallback={<p>Loading reviews.....</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
```

## Server and Client Composition Patterns

- <ins>**Server components :**</ins>

    - Fetching data
    - Accessing backends resources directly
    - Kepping sensitive information(like assess tokens and API keys) secure on the server.
    - Handling large dependencies server-side - which means lss JavaScript for your users to download.

- <ins>**Client components :**</ins>

    - Adding interactivity.
    - Handling event listeners (like onClick(), onChange(), etc)
    - Managing state and lifecycle effects (using hooks like useState(), useReducer(), useEffect())
    - Working with browser-specific APIs
    - Implementing custom hooks.
    - Using React class components.