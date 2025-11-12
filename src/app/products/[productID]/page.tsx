import { getProductData } from "@/lib/api/getProduct";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/features/products/productDetails";

interface ProductDetailsPageProps {
  params: Promise<{
    productID: string;
  }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { productID } = await params;

  let product;
  try {
    product = await getProductData(productID);
  } catch {
    notFound();
  }

  const displayPrice = product.retailPrice ?? product.price;
  const originalPrice = product.originalRetailPrice ?? product.originalPrice;
  const hasDiscount =
    originalPrice && displayPrice && originalPrice > displayPrice;

  return (
    <ProductDetails
      product={product}
      displayPrice={displayPrice}
      originalPrice={originalPrice}
      hasDiscount={hasDiscount || false}
    />
  );
}
