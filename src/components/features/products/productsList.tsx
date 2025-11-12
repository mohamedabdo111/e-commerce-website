import React from "react";
import { getProductsData } from "@/lib/api/getProducts";
import { Product } from "@/types/api.types";
import ProductSection from "./productSection";

const ProductsList = async () => {
  const products = await getProductsData({ page: 1, limit: 100 });

  // Group products by category
  const productsByCategory = products.reduce(
    (acc: Record<string, Product[]>, product: Product) => {
      const categoryId = product.category._id;
      if (!acc[categoryId]) {
        acc[categoryId] = [];
      }
      acc[categoryId].push(product);
      return acc;
    },
    {}
  );

  // Get unique categories with their data
  const categoriesMap = new Map<
    string,
    { name: string; description?: string }
  >();
  products.forEach((product) => {
    if (!categoriesMap.has(product.category._id)) {
      categoriesMap.set(product.category._id, {
        name: product.category.name,
        description: product.category.description,
      });
    }
  });

  return (
    <>
      {Array.from(categoriesMap.entries()).map(([categoryId, categoryData]) => (
        <ProductSection
          key={categoryId}
          categoryId={categoryId}
          categoryName={categoryData.name}
          categoryDescription={categoryData.description}
          products={productsByCategory[categoryId] || []}
        />
      ))}
    </>
  );
};

export default ProductsList;
