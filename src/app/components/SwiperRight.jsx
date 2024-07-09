"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { LeftSwiper, RightSwiper } from "../../../utils/SwiperContent";

const SwiperRight = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClickedNext, setIsClickedNext] = useState(false);
  const [isClickedPrev, setIsClickedPrev] = useState(false);

  const SlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    console.log(activeIndex);
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
      {/* left Swiper */}
      <div className=" max-w-[666px] w-full">
        <div className=" flex justify-end items-center">
          <div className=" flex gap-[12.38px] items-center">
            <p className=" text-[15px] leading-[24px] font-helvetica font-medium">
              Women's Shop
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

        <div className=" ml-[48px]">
          <Swiper
            onSlideChange={SlideChange}
            ref={swiperRef}
            navigation={{
              nextEl: ".swiper-button-next", // Selector for your custom "Next" button
              prevEl: ".swiper-button-prev", // Selector for your custom "Previous" button
            }}
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={12}
            className=" mt-[12px] mb-[53px]"
          >
            {RightSwiper.map((data, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img src={data.img} alt="" />
                  <div className=" max-w-[284px]">
                    <div className="mt-[21px] flex justify-between">
                      <p className=" text-[15px] text-[#111111] font-medium font-helvetica leading-[24px]">
                        {data.title}
                      </p>
                      <p className=" text-[15px] text-[#111111] font-medium font-helvetica leading-[24px] mr-2">
                        ${data.price}
                      </p>
                    </div>
                    <p className=" font-helvetica text-[15px] text-[#757575] leading-[24px] max-w-[199.78px]">
                      {data.gender}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SwiperRight;
