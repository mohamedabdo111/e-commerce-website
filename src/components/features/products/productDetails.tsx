import Link from "next/link";
import { Product } from "@/types/api.types";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";

interface ProductDetailsProps {
  product: Product;
  displayPrice: number | undefined;
  originalPrice: number | undefined;
  hasDiscount: boolean;
}

export default function ProductDetails({
  product,
  displayPrice,
  originalPrice,
  hasDiscount,
}: ProductDetailsProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
      <Link
        href="/"
        className="mb-4 sm:mb-6 inline-flex items-center text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors"
      >
        <svg
          className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Home
      </Link>

      <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">
        <ProductImage product={product} />
        <ProductContent
          product={product}
          displayPrice={displayPrice}
          originalPrice={originalPrice}
          hasDiscount={hasDiscount}
        />
      </div>
    </div>
  );
}
