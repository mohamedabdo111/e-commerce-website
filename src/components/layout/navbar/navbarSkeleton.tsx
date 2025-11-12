export default function NavbarSkeleton() {
  return (
    <nav className="bg-white border-gray-200 py-2.5">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* Logo Skeleton */}
        <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />

        {/* Mobile Menu Button Skeleton */}
        <div className="flex items-center lg:hidden">
          <div className="h-6 w-6 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Navigation Items Skeleton */}
        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <div className="h-5 w-20 animate-pulse rounded bg-gray-200" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

