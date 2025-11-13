import Image from "next/image";
import { Product } from "@/types/api.types";

interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  return (
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
  );
}
