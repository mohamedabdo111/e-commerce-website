"use client";
import { SliderData } from "@/types/api.types";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import Image from "next/image";
const SliderComponent = ({ sliderData }: { sliderData: SliderData[] }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="h-[400px] rounded-lg"
      loop={true}
    >
      {sliderData.map((item: SliderData) => (
        <SwiperSlide key={item._id}>
          <Image
            src={item.image}
            alt={item.alt}
            width={1000}
            height={400}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderComponent;
