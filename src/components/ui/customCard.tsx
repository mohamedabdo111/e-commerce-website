"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Heart } from "lucide-react";
import { Product } from "@/types/api.types";

const CustomCard = ({ product }: { product: Product }) => {
  const displayPrice = product.retailPrice ?? product.price;
  const originalPrice = product.originalRetailPrice ?? product.originalPrice;
  const hasDiscount =
    originalPrice && displayPrice && originalPrice > displayPrice;

  const handleWishlistClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: Implement wishlist functionality
    console.log("Add to wishlist:", product._id);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: Implement add to cart functionality
    console.log("Add to cart:", product._id);
  };

  return (
    <Link
      href={`/products/${product._id}`}
      className="group relative block overflow-hidden"
    >
      <button
        onClick={handleWishlistClick}
        className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
      >
        <span className="sr-only">Wishlist</span>
        <Heart className="size-4" />
      </button>

      {product.image ? (
        <Image
          src={product.image}
          width={1000}
          height={1000}
          alt={product.name}
          className="h-[374px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="h-[374px] w-[374px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">No Image</span>
        </div>
      )}

      <div className="relative border border-gray-100 bg-white p-6">
        <span className="bg-yellow-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap">
          New
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900">
          {product.name}
        </h3>

        <p className="mt-1.5 text-sm text-gray-700">
          {displayPrice ? `${displayPrice} EGP` : "Price not available"}
          {hasDiscount && originalPrice && (
            <span className="ml-2 text-gray-500 line-through">
              {originalPrice} EGP
            </span>
          )}
        </p>

        <form className="mt-4">
          <button
            onClick={handleAddToCart}
            className="block w-full rounded-sm bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
          >
            Add to Cart
          </button>
        </form>
      </div>
    </Link>
  );
};

export default CustomCard;
