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