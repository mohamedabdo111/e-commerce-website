"use client";
import CustomCard from "@/components/ui/customCard";
import { Product } from "@/types/api.types";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

const ProductSection = ({
  categoryName,
  categoryDescription,
  products,
  categoryId,
}: {
  categoryName: string;
  categoryDescription?: string;
  products: Product[];
  categoryId: string;
}) => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
            {categoryName}
          </h2>

          {categoryDescription && (
            <p className="mt-2 sm:mt-4 max-w-md text-sm sm:text-base text-gray-500">
              {categoryDescription}
            </p>
          )}
        </header>

        <div className="mt-8">
          <Swiper
            spaceBetween={30}
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {products.map((product: Product) => (
              <SwiperSlide key={product._id}>
                <CustomCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-6 sm:mt-8 text-center">
          <Link
            href={`/categories/${categoryId}`}
            className="inline-block hover:text-gray-900 hover:bg-gray-200 border border-gray-300 rounded-md px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
