export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Back Button Skeleton */}
      <div className="mb-6">
        <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Product Image Skeleton */}
        <div className="overflow-hidden rounded-lg bg-gray-100">
          <div className="h-[500px] w-full animate-pulse bg-gray-200 sm:h-[600px]" />
        </div>

        {/* Product Details Skeleton */}
        <div className="flex flex-col justify-center">
          {/* Category Breadcrumb Skeleton */}
          <div className="mb-4">
            <div className="h-4 w-48 animate-pulse rounded bg-gray-200" />
          </div>

          {/* Title Skeleton */}
          <div className="mb-4">
            <div className="h-10 w-full animate-pulse rounded bg-gray-200 sm:h-12" />
            <div className="mt-2 h-10 w-3/4 animate-pulse rounded bg-gray-200" />
          </div>

          {/* Description Skeleton */}
          <div className="mb-6 space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
          </div>

          {/* Price Section Skeleton */}
          <div className="mb-6">
            <div className="flex items-baseline gap-3">
              <div className="h-9 w-40 animate-pulse rounded bg-gray-200" />
              <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="mt-2 h-6 w-20 animate-pulse rounded bg-gray-200" />
          </div>

          {/* Stock Status Skeleton */}
          <div className="mb-6">
            <div className="h-8 w-40 animate-pulse rounded-full bg-gray-200" />
          </div>

          {/* Offer Badge Skeleton */}
          <div className="mb-6">
            <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
          </div>

          {/* Additional Info Skeleton */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="space-y-4">
              <div>
                <div className="mb-2 h-4 w-20 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
              </div>
              <div>
                <div className="mb-2 h-4 w-24 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
