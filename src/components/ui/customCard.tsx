"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CheckCircle2Icon, Heart } from "lucide-react";
import { Product } from "@/types/api.types";
import AnimatedContent from "../features/animations/AnimatedContent";
import { useCart } from "@/lib/hooks/useCart";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import toast from "react-hot-toast";

const CustomCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    addToCart(product);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <AnimatedContent>
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
            className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[374px] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[374px] w-full bg-gray-200 flex items-center justify-center">
            <span className="text-xs sm:text-sm text-gray-400">No Image</span>
          </div>
        )}

        <div className="relative border border-gray-100 bg-white p-4 sm:p-6">
          <h3 className="mt-2 sm:mt-4 text-base sm:text-lg font-medium text-gray-900 line-clamp-2">
            {product.name}
          </h3>

          <p className="mt-1.5 text-xs sm:text-sm text-gray-700">
            {displayPrice ? `${displayPrice} EGP` : "Price not available"}
            {hasDiscount && originalPrice && (
              <span className="ml-2 text-gray-500 line-through">
                {originalPrice} EGP
              </span>
            )}
          </p>

          <form className="mt-3 sm:mt-4">
            <button
              onClick={handleAddToCart}
              className="block w-full rounded-sm bg-primary cursor-pointer text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition hover:scale-105"
            >
              {isLoading ? "Adding to Cart..." : "Add to Cart"}
            </button>
          </form>
        </div>
      </Link>
    </AnimatedContent>
  );
};

export default CustomCard;
