export default function ProductCardSkeleton() {
  return (
    <div className="w-full h-full overflow-hidden relative bg-white rounded-2xl shadow-sm border border-gray-100">
      {/* Image Skeleton */}
      <div className="h-[280px] w-full animate-pulse bg-gradient-to-br from-gray-200 to-gray-300 sm:h-[320px]" />

      {/* Card Content Skeleton */}
      <div className="p-4 sm:p-5">
        {/* Product Name Skeleton */}
        <div className="space-y-2 mb-3">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Price Skeleton */}
        <div className="flex items-baseline gap-2">
          <div className="h-6 w-24 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
