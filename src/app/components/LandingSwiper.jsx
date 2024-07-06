"use client";
import { ArrowBack } from "@/icons/logos";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { ShoeSwiper } from "../../../utils/SwiperContent";

const LandingSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClickedNext, setIsClickedNext] = useState(false);
  const [isClickedPrev, setIsClickedPrev] = useState(false);

  const SlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    console.log(activeIndex)
  };

  const swiperRef = useRef(null);

  const goNext = (event) => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideNext();
    }
    event.stopPropagation();

    setIsClickedNext(true);
    setIsClickedPrev(false);
  };

  const goPrev = (event) => {
    console.log("its clicked");
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev();
    }
    event.stopPropagation();

    setIsClickedPrev(true);
    setIsClickedNext(false);
  };
  return (
    <>
      <div className=" mt-[84px] max-w-[1344px] w-full mx-auto mb-[30px]">
        <div className=" flex justify-between items-center">
          <p className=" text-[22px] leading-[28px] font-helvetica font-medium">
            Best of Air Max
          </p>
          <div className=" flex gap-[12.38px] items-center">
            <p className=" text-[15px] leading-[24px] font-helvetica font-medium">
              Shop
            </p>
            <button
              onClick={goPrev}
              className=" bg-[#f5f5f5] w-[48px] h-[48px] rounded-full flex items-center justify-center"
            >
              <img src="/images/arrow-back.png" alt="" />
            </button>
            <button
              onClick={goNext}
              className=" bg-[#f5f5f5] w-[48px] h-[48px] rounded-full flex items-center justify-center"
            >
              <img src="/images/arrow-next.png" alt="" className=" " />
            </button>
          </div>
        </div>
        <div className=" mt-[12px]">
          {/* LandingSwiper */}
          <Swiper
            onSlideChange={SlideChange}
            ref={swiperRef}
            navigation={{
              nextEl: ".swiper-button-next", // Selector for your custom "Next" button
              prevEl: ".swiper-button-prev", // Selector for your custom "Previous" button
            }}
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={12}
            className=""
          >
            {ShoeSwiper.map((data, index) => (
              <SwiperSlide key={index}>
                <div className=" mb-[30px]">
                  <img src={data.img} alt="" />
                  <div className="mt-[21px] flex justify-between">
                    <p className=" text-[15px] text-[#111111] font-medium font-helvetica leading-[24px]">
                      {data.title}
                    </p>
                    <p className=" text-[15px] text-[#111111] font-medium font-helvetica leading-[24px] mr-2">
                      ${data.price}
                    </p>
                  </div>
                  <p className=" font-helvetica text-[15px] text-[#757575] leading-[24px]">
                    {data.gender}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LandingSwiper;
