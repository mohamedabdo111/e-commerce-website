import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/api.types";

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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <svg
          className="mr-2 h-5 w-5"
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

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Product Image */}
        <div className="overflow-hidden rounded-lg bg-gray-100">
          {product.image ? (
            <Image
              src={product.image}
              width={1000}
              height={1000}
              alt={product.name}
              className="h-full w-full object-cover"
              priority
            />
          ) : (
            <div className="flex h-[500px] w-full items-center justify-center bg-gray-200 sm:h-[600px]">
              <span className="text-gray-400">No Image Available</span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-sm text-gray-500">
              {product.category.name}
              {product.subCategory && ` / ${product.subCategory.name}`}
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {product.name}
          </h1>

          {product.description && (
            <p className="mb-6 text-gray-700 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Price Section */}
          <div className="mb-6">
            {displayPrice && (
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold tracking-wider text-gray-900">
                  {displayPrice} EGP
                </span>
                {hasDiscount && originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {originalPrice} EGP
                  </span>
                )}
              </div>
            )}
            {hasDiscount && (
              <span className="mt-2 inline-block rounded bg-red-100 px-2 py-1 text-sm font-semibold text-red-800">
                {Math.round(
                  ((originalPrice! - displayPrice!) / originalPrice!) * 100
                )}
                % OFF
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {product.stock > 0 ? (
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                In Stock ({product.stock} available)
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
                <span className="mr-2 h-2 w-2 rounded-full bg-red-500"></span>
                Out of Stock
              </span>
            )}
          </div>

          {/* Offer Badge */}
          {product.hasActiveOffer && (
            <div className="mb-6">
              <span className="inline-block rounded bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">
                Special Offer Available
              </span>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {product.category.name}
                </dd>
              </div>
              {product.subCategory && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Subcategory
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {product.subCategory.name}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
