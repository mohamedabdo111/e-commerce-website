import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "@/types/api.types";

const CustomCard = ({ product }: { product: Product }) => {
  const displayPrice = product.retailPrice ?? product.price;
  const originalPrice = product.originalRetailPrice ?? product.originalPrice;
  const hasDiscount =
    originalPrice && displayPrice && originalPrice > displayPrice;

  return (
    <Link
      href={`/products/${product._id}`}
      className="group block w-full h-[500px] overflow-hidden relative"
    >
      {product.image ? (
        <Image
          src={product.image}
          width={1000}
          height={1000}
          alt={product.name}
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />
      ) : (
        <div className="h-[350px] w-full bg-gray-200 flex items-center justify-center sm:h-[450px]">
          <span className="text-gray-400">No Image</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/80 backdrop-blur-sm ">
        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4 shadow-2xl">
          {product.name}
        </h3>

        <p className="mt-2">
          {displayPrice && (
            <span className="tracking-wider text-gray-900">
              {displayPrice} EGP
            </span>
          )}
          {hasDiscount && originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              {originalPrice} EGP
            </span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default CustomCard;
