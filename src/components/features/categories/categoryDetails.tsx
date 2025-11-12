import CustomCard from "@/components/ui/customCard";
import {
  CategoryWithProducts,
  CategoryProduct,
  Product,
} from "@/types/api.types";

interface CategoryDetailsProps {
  categoryData: CategoryWithProducts;
}

export default function CategoryDetails({
  categoryData,
}: CategoryDetailsProps) {
  // Transform CategoryProduct to Product format for CustomCard
  const transformProduct = (product: CategoryProduct): Product => {
    return {
      ...product,
      category: {
        _id: categoryData._id,
        name: categoryData.name,
        description: categoryData.description,
      },
      subCategory: categoryData.subCategories.find(
        (sub) => sub._id === product.subCategory
      ) || {
        _id: product.subCategory,
        name: "",
      },
    };
  };

  const transformedProducts = categoryData.products.map(transformProduct);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Category Header */}
      <header className="mb-8 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {categoryData.name}
        </h1>
        {categoryData.description && (
          <p className="mt-4 max-w-3xl text-gray-600 text-lg">
            {categoryData.description}
          </p>
        )}
      </header>

      {/* Subcategories Section */}
      {/* {categoryData.subCategories.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Subcategories
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categoryData.subCategories.map((subCategory) => (
              <div
                key={subCategory._id}
                className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-2">
                  {subCategory.name}
                </h3>
                {subCategory.description && (
                  <p className="text-sm text-gray-600 mb-2">
                    {subCategory.description}
                  </p>
                )}
                <p className="text-xs text-gray-500">
                  {subCategory.products.length} product
                  {subCategory.products.length !== 1 ? "s" : ""}
                </p>
              </div>
            ))}
          </div>
        </section>
      )} */}

      {/* Products Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            All Products ({categoryData.products.length})
          </h2>
        </div>

        {transformedProducts.length > 0 ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {transformedProducts.map((product) => (
                <CustomCard key={product._id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
