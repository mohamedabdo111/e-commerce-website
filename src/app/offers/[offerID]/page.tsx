import { getOfferById } from "@/lib/api/getOffers";
import React from "react";
import { notFound } from "next/navigation";
import CustomCard from "@/components/ui/customCard";
import Link from "next/link";
import { Product } from "@/types/api.types";

interface GetAllProductsInOfferProps {
  params: Promise<{
    offerID: string;
  }>;
}

const GetAllProductsInOffer = async ({
  params,
}: GetAllProductsInOfferProps) => {
  const { offerID } = await params;
  let offer;
  try {
    offer = await getOfferById(offerID);
  } catch {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <svg
          className="mr-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Home
      </Link>

      {/* Offer Header */}
      <header className="mb-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {offer.title}
        </h1>
        {offer.description && (
          <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
            {offer.description}
          </p>
        )}
        {offer.discount && (
          <div className="mt-4">
            <span className="inline-block rounded bg-red-100 px-3 py-1 text-sm font-semibold text-red-800">
              {offer.discount}% OFF
            </span>
          </div>
        )}
      </header>

      {/* Products Grid */}
      {offer.products && offer.products.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offer.products.map(
            (
              product: Partial<Product> & {
                _id: string;
                name: string;
                image?: string;
              }
            ) => (
              <CustomCard key={product._id} product={product as Product} />
            )
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No products available in this offer.</p>
        </div>
      )}
    </div>
  );
};

export default GetAllProductsInOffer;
