export default function ProductCardSkeleton() {
  return (
    <div className="group block w-full h-[500px] overflow-hidden relative">
      {/* Image Skeleton */}
      <div className="h-[350px] w-full animate-pulse bg-gray-200 sm:h-[450px]" />

      {/* Card Content Skeleton */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/80 backdrop-blur-sm">
        {/* Product Name Skeleton */}
        <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200 mb-2" />

        {/* Price Skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-5 w-20 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
