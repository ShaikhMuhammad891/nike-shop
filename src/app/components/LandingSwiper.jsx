"use client";
import { ArrowBack, LeftArrow, RightArrow } from "@/icons/logos";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { shop } from "../../../utils/shop";
import { useRouter } from "next/navigation";

const LandingSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClicked, setIsClicked] = useState({
    next: true,
    prev: false,
  });
  const router = useRouter();

  const SlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const swiperRef = useRef(null);

  const goNext = (event) => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideNext();
    }
    event.stopPropagation();
    setIsClicked({ ...isClicked, next: true, prev: false });
  };

  const goPrev = (event) => {
    console.log("its clicked");
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev();
    }
    event.stopPropagation();
    setIsClicked({ ...isClicked, next: false, prev: true });
  };

  const handleSubmit = (id) => {
    router.push(`selectedItem/${id}`);
  };
  return (
    <>
      <div className=" mt-[84px] max-w-[1440px] w-full mx-auto mb-[30px]">
        <div className=" flex justify-between items-center ml-[48px] max-w-[1344px]">
          <p className=" text-[22px] leading-[28px] font-helvetica font-medium">
            Best of Air Max
          </p>
          <div className=" flex gap-[12.38px] items-center">
            <p className=" text-[15px] leading-[24px] font-helvetica font-medium">
              Shop
            </p>
            <button
              onClick={goPrev}
              className={`bg-[#f5f5f5] w-[48px] h-[48px] rounded-full flex items-center justify-center ${
                isClicked.prev && "bg-[#E5E5E5]"
              }`}
            >
              {isClicked.prev ? <LeftArrow stroke="black" /> : <LeftArrow />}
            </button>
            <button
              onClick={goNext}
              className={`bg-[#f5f5f5] w-[48px] h-[48px] rounded-full flex items-center justify-center ${
                isClicked.next && "bg-[#E5E5E5]"
              }`}
            >
              {isClicked.next ? (
                <RightArrow />
              ) : (
                <RightArrow stroke="#CCCCCC" />
              )}
            </button>
          </div>
        </div>
        <div className=" mt-[12px] ml-[48px]">
          {/* LandingSwiper */}
          <Swiper
            onSlideChange={SlideChange}
            ref={swiperRef}
            navigation={{
              nextEl: ".swiper-button-next", // Selector for your custom "Next" button
              prevEl: ".swiper-button-prev", // Selector for your custom "Previous" button
            }}
            modules={[Navigation]}
            autoplay={true}
            slidesPerView={3.1}
            spaceBetween={12}
            className=""
          >
            {shop.map((data, index) => (
              <SwiperSlide key={index}>
                <div
                  className=" mb-[30px] cursor-pointer hover:scale-105 duration-150"
                  onClick={() => handleSubmit(data.id)}
                >
                  <img
                    src={data.img}
                    alt=""
                    className=" max-w-[441.36px] max-h-[441.36px] h-full w-full"
                  />
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
