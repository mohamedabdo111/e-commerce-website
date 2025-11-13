"use client";

import { Product } from "@/types/api.types";
import { useCart } from "@/lib/hooks/useCart";
import { useState } from "react";
import AnimatedContent from "../animations/AnimatedContent";

interface ProductContentProps {
  product: Product;
  displayPrice: number | undefined;
  originalPrice: number | undefined;
  hasDiscount: boolean;
}

export default function ProductContent({
  product,
  displayPrice,
  originalPrice,
  hasDiscount,
}: ProductContentProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (product.stock > 0) {
      setIsAdding(true);
      addToCart(product);
      setTimeout(() => setIsAdding(false), 500);
    }
  };

  return (
    <AnimatedContent>
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

        {/* Add to Cart Button */}
        <div className="mt-8">
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0 || isAdding}
            className={`w-full rounded-md cursor-pointer px-6 py-3 text-base font-semibold text-white transition-all duration-200 ${
              product.stock > 0
                ? "bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-500 active:scale-95"
                : "bg-gray-400 cursor-not-allowed"
            } ${isAdding ? "opacity-75 cursor-wait" : ""}`}
          >
            {isAdding
              ? "Adding to Cart..."
              : product.stock > 0
              ? "Add to Cart"
              : "Out of Stock"}
          </button>
        </div>

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
    </AnimatedContent>
  );
}
