# Next-Js by Codevolution : Part-5

### Topics Covered :

- Streaming
- Server and Client Composition Patterns
- Server-only Code (1st Server component pattern)
- Third Party Packages (2nd Server component pattern)
- Context Providers (3rd Server component pattern)
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

## Server-only Code - Seperation of server-only code (1st Server component pattern)

- Some code is specifically designed to run exclusively on the server.

- Think about modules or functions that work with multiple libraries, handle environment variables, communicate directly with databases or process sesitive information.

- Since JavaScript modules can be shared between Server and Client Components, code meant for the server could accidentally find it's way to the client.

- This is bad news as it can bloat your JavaScript bundle, expose your secret keys, databases queries and sensitive business logic.

- It's super important to keep server-only code seperate from client-side code.

### Solution : 

- Using server-only package : This throws a build-time error if someone accidentally imports server code into a client component.

- Install the following package.

```bash
npm install server-only
```

- Create a file named `server-utils.ts` in the `utils` folder and add the following code.

```js
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
```

- Now try to use this function in both server and client components by importing this function i.e "serverSideFunction".

- There won't be any problem in server component, but client component will throw an error.

- This package is like having a security guard that stops server code from sneaking into the client bundle.

- Whichever file you want to make it server-only file, Insert the following code at the top of the file.

```js
import "server-only";
```

## Third Party Packages(2nd Server component pattern)

- Server Components have introduced an exciting new paradigm in React, and the ecosystem is evolving to keep up.

- Third-party packages are starting to add the "use client" directive to components that need client-side features, making it clear where they should run.

- Many npm packages haven't made this transition yet.

- This means while they work fine in Client Components, they might break or fail completely in Server Components.

- We can wrap the third-party components that need client-side features in our own Client Components.

### Demo 

- For demo purposes, we'll use "react-slick" packages.

```bash
npm install react-slick slick-carousel @types/react-slick
```

- Add the following code to `global.css`.

```css
.image-slider-container {
  margin: 0 auto;
  width: 400px;
}

.image-slider-container .slick-prev:before,
.image-slider-container .slick-next:before {
  color: white;
}
```

- Add the follwing code to `client-route/page.tsx`.

```js
// client-route/page.tsx
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ClientRoutePage() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
  );
}
```

- If we visit the route `/client-route/page.tsx`, it'll work perfectly fine as the "ClientRoutePage" component already has "use client" directive written on top.

- Now let's see what happens when we use carousel directly in server-component. Add the following code to `/server-route/page.tsx`.

```js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ServerRoutePage() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
  );
}
```

- If we visit the route `/server-route/page.tsx`, it'll throw an error: "Super expression must either be null or a function", as the "ServerRoutePage" component is not wrapped with "use client" directive on top.

- This leads to an error because slider component uses client side features but the library itself doesn't include the "use client" directive.

- But we cannot add "use client" to our server route, here in this component becasue it's a server only code.

**Solution :** Encapsulate 3rd part components that depends on client only features with in your own client component.

- Create a file named `ImageSlider.tsx`, inside the components folder.

- Move the code of carousel to the `ImageSlider.tsx` file and add "use client" directive on top of the file.

- And use "ImageSlider" component inside any server components.

## Context Providers (2nd Server component pattern)

- Context providers typically live near the root of an application to share the global state and logic.

- For example, your application's theme.

- However, React context isn't supported in Server Components.

- If you try to create a context at your application's root, you'll run into an error.

```js
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createContext } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeContext.Provider value={defaultTheme}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </ThemeContext.Provider>
    </html>
  );
}
```

- The solution is to create your context and render its providers inside a dedicated Client Component.

## Client-only Code 

- Just like how we need to keep certain operations server-side, it's equally crucial to keep some functionality strictly on the client side.

- Client-Only code works with browser-specific features - things like DOM manipulation, window object interactions or localStorage operations.

- These features aren't available on the server, so we need to make sure such code runs only on the client side to avoid server-side rendering errors.

- To prevent unintended server side usage of client side code, we can use a package called client-only.

### Demo

- Install the following package : 

```bash
npm i client-only
```

- This package creates a safety net. If someone tries to use this code server-side it will fail at build time.

- Create a file named `client-utils.ts` inside the `utils` folder and add the following code.

```js
import "client-only";

export const ClientSideFunction = () => {
  console.log(
    `use window object,
        use localStorage`
  );

  return "Client result!!!";
};
```

- Now try to use this function in both server and client components by importing this function i.e "ClientSideFunction".

- There won't be any problem in client component, but server component will throw an error namely

    -  "You're importing a component that imports client-only. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default."