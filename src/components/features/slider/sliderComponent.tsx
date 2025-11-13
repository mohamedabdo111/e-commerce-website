"use client";
import { SliderData } from "@/types/api.types";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./style.css";
import Image from "next/image";
import AnimatedContent from "../animations/AnimatedContent";
const SliderComponent = ({ sliderData }: { sliderData: SliderData[] }) => {
  return (
    <AnimatedContent>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="h-[400px] rounded-lg"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
    </AnimatedContent>
  );
};

export default SliderComponent;
