import Image from "next/image";
import { Product } from "@/types/api.types";

interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-100 aspect-square w-full">
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
        <div className="flex h-[300px] w-full items-center justify-center bg-gray-200 sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <span className="text-sm sm:text-base text-gray-400">
            No Image Available
          </span>
        </div>
      )}
    </div>
  );
}
