import ProductCardSkeleton from "@/components/ui/productCardSkeleton";

export default function ProductSectionSkeleton() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          {/* Category Title Skeleton */}
          <div className="h-8 w-48 animate-pulse rounded bg-gray-200 sm:h-10" />

          {/* Category Description Skeleton */}
          <div className="mt-4 space-y-2">
            <div className="h-4 w-full max-w-md animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-3/4 max-w-md animate-pulse rounded bg-gray-200" />
          </div>
        </header>

        {/* Products Grid Skeleton */}
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div key={index}>
                <ProductCardSkeleton />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button Skeleton */}
        <div className="mt-8 text-center">
          <div className="inline-block h-10 w-24 animate-pulse rounded-md bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
