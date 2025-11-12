import { CarouselDemo } from "@/components/features/slider/SliderList";
import OffersList from "@/components/features/offers/offersList";
import ProductsList from "@/components/features/products/productsList";

export default function Home() {
  return (
    <div className="container mx-auto">
      <CarouselDemo />
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
        <ProductsList />
      </div>
    </div>
  );
}
