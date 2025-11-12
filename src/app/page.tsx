import { CarouselDemo } from "@/components/features/slider/SliderList";
import OffersList from "@/components/features/offers/offersList";
import ProductsList from "@/components/features/products/productsList";
import { Suspense } from "react";
import ProductSectionSkeleton from "@/components/features/products/productSectionSkeleton";
import SliderSkeleton from "@/components/features/slider/sliderSkeleton";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<SliderSkeleton />}>
        <CarouselDemo />
      </Suspense>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 text-center border-b border-gray-300 pb-1 uppercase w-fit mx-auto">
          Offers
        </h2>
        <OffersList />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 text-center border-b border-gray-300 pb-1 uppercase w-fit mx-auto">
          Products
        </h2>
        <Suspense fallback={<ProductSectionSkeleton />}>
          <ProductsList />
        </Suspense>
      </div>
    </div>
  );
}
