"use client";
import CustomCard from "@/components/ui/customCard";
import { Product } from "@/types/api.types";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
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
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            {categoryName}
          </h2>

          {categoryDescription && (
            <p className="mt-4 max-w-md text-gray-500">{categoryDescription}</p>
          )}
        </header>

        <div className="mt-8">
          <Swiper
            spaceBetween={30}
            navigation={true}
            modules={[Navigation, Pagination]}
            loop={true}
            autoplay={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
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
        <div className="mt-8 text-center">
          <Link
            href={`/categories/${categoryId}`}
            className="hover:text-gray-900 hover:bg-gray-200 border border-gray-300 rounded-md px-4 py-2 transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
