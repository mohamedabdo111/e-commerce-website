import { CarouselDemo } from "@/components/features/slider/SliderList";
import OffersList from "@/components/features/offers/offersList";
import ProductsList from "@/components/features/products/productsList";
import { Suspense } from "react";
import ProductSectionSkeleton from "@/components/features/products/productSectionSkeleton";
import SliderSkeleton from "@/components/features/slider/sliderSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pit Aziz | Pet Store for Dogs & Cats",
  description:
    "Pit Aziz is your trusted online pet store for dogs, cats, and all domestic pets. Shop pet food, accessories, and care products.",
  keywords: [
    "pet store",
    "dogs",
    "cats",
    "pet food",
    "Pit Aziz",
    "online pet shop",
  ],
  openGraph: {
    title: "Pit Aziz | Your Pet Store",
    description:
      "Shop pets, food, and accessories at the best prices. Safe delivery.",
    url: "https://pitaziz.com",
    siteName: "Pit Aziz",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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
