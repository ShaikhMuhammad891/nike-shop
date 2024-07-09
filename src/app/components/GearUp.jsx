"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Button from "./common/Button";
import SwiperLeft from "./SwiperLeft";
import SwiperRight from "./SwiperRight";

const GearUp = () => {
  return (
    <>
      <div className=" max-w-[1344px] mx-auto mt-[84px]">
        <p className=" text-[23px] leading-[28px] font-helvetica font-medium text-[#111111]">
          Gear Up
        </p>
        <div className=" flex justify-between items-center">
          <SwiperLeft />
          <SwiperRight />
        </div>
        {/* do not miss */}
        <div className=" mt-[138px]">
          <p className=" text-[23px] leading-[28px] font-helvetica font-medium text-[#111111]">
            Don't Miss
          </p>

          <img src="/images/dont-miss.png" alt="" className=" mt-[25px]" />
        </div>
      </div>
    </>
  );
};

export default GearUp;
