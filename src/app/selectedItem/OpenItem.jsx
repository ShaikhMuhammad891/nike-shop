"use client";
import React, { useEffect, useRef, useState } from "react";
import { ShoeSize } from "../../../utils/shop"; // Assuming this imports your shoe size data
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ShoeSwiper } from "../../../utils/SwiperContent";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useShop } from "../../../context/ContextData";

const OpenItem = (props) => {
  const { openData } = props;
  const [selectedSizeAndColor, setSelectedSizeAndColor] = useState({
    selectedSize: "",
    selectedColor: "",
  });
  const [isClicked, setIsClicked] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { setBagCount, setFavCount } = useShop();
  const refBag = useRef(null);
  const refFav = useRef(null);
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
  };

  const goPrev = (event) => {
    console.log("its clicked");
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev();
    }
    event.stopPropagation();
  };

  const howMany = (value) => {
    if (value === "increase") {
      setQuantity(quantity + 1);
    } else if (value === "decrease") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      } else {
        setQuantity(1);
      }
    }
  };

  const handleSizeAndColor = (value, type) => {
    refBag.current.style.backgroundColor = "black";
    refBag.current.style.color = "white";
    refFav.current.style.backgroundColor = "white";
    refFav.current.style.color = "black";

    setSelectedSizeAndColor((prevState) => ({ 
      ...prevState,
      [type]: value,
    }));
  };

  const handleAdd = async (value) => {
    if (!selectedSizeAndColor.selectedColor) {
      toast.error("Please select a color for your item");
      return;
    }

    if (!selectedSizeAndColor.selectedSize) {
      toast.error("Please select a size for your item");
      return;
    }

    const itemWithSizeAndQuantity = {
      ...openData,
      quantity,
      size: selectedSizeAndColor.selectedSize,
      color: selectedSizeAndColor.selectedColor,
    };

    if (value === "bag") {
      const bag = JSON.parse(localStorage.getItem("bag")) || [];
      const updatedBag = [...bag, itemWithSizeAndQuantity];
      localStorage.setItem("bag", JSON.stringify(updatedBag));
      setBagCount(updatedBag.length);
      toast.success("Item added to bag");
    } else if (value === "fav") {
      const fav = JSON.parse(localStorage.getItem("fav")) || [];
      const updatedFav = [...fav, itemWithSizeAndQuantity];
      localStorage.setItem("fav", JSON.stringify(updatedFav));
      setFavCount(updatedFav.length);
      toast.success("Item added to favorites");
    }

    setTimeout(() => {
      router.push("/shop");
    }, 3000);
  };

  return (
    <>
      <div className="mt-[104px] ">
        <div className="flex gap-[72px] max-w-[1299px] mx-auto ">
          <div className="flex flex-wrap max-w-[851px] w-full gap-[12px]">
            <img src={openData.img} alt="" className=" h-[400px] w-[419.5px]" />
            <img src={openData.img} alt="" className=" h-[400px] w-[419.5px]" />
          </div>
          <div className="max-w-[376px] mt-[8px]">
            <p className="text-[27px] leading-[33.6px] font-inter font-medium">
              {openData?.title}
            </p>
            <p className="text-[15px] font-inter font-medium leading-[24px] mt-[1.5px]">
              {openData?.genderWear}
            </p>
            <p className="text-[15px] font-inter font-medium leading-[24px] mt-[1.5px]">
              MRP : $ {openData?.price * quantity}
            </p>
            <p className="text-[15px] font-inter font-medium leading-[24px] text-[#757575] mt-[2px]">
              incl. of taxes
            </p>
            <p className="text-[15px] font-inter font-medium leading-[24px] text-[#757575] mt-[2px] mb-[40px]">
              (Also includes all applicable duties)
            </p>

            {/* quantity */}
            <div className=" flex gap-2 items-center">
              <button
                onClick={() => howMany("decrease")}
                className=" border px-2 rounded-[4px] border-[#757575] text-[25px] font-medium text-[#757575]"
              >
                -
              </button>
              <p className=" text-[20px] font-medium text-[#757575]">
                {quantity}
              </p>
              <button
                onClick={() => howMany("increase")}
                className=" border px-2 rounded-[4px] border-[#757575] text-[25px] font-medium text-[#757575]"
              >
                +
              </button>
            </div>

            {/* colors */}
            <div className="mt-[30px] flex flex-wrap gap-[7px]">
              {/* Mapping through shoe sizes */}
              {openData?.itemColor?.map((item, index) => (
                <div key={index}>
                  <button
                    className={`border w-[120.66px] font-inter h-[48px] rounded-[4px] ${
                      selectedSizeAndColor.selectedColor === item.color
                        ? "border-[#111111]"
                        : ""
                    }`}
                    onClick={() =>
                      handleSizeAndColor(item.color, "selectedColor")
                    }
                  >
                    {item.color}
                  </button>
                </div>
              ))}
            </div>

            {/* Sizes */}
            <div>
              <div className="flex pt-[30px] justify-between">
                <p className="font-medium text-[15px] leading-[24px]">
                  Select Size
                </p>
                <p className="font-medium text-[15px] leading-[24px] text-[#757575]">
                  Size Guide
                </p>
              </div>
              <div className="mt-[8px] flex flex-wrap gap-[7px]">
                {/* Mapping through shoe sizes */}
                {openData?.sizes?.map((shoe, index) => (
                  <div key={index}>
                    <button
                      className={`border w-[120.66px] font-inter h-[48px] rounded-[4px] ${
                        selectedSizeAndColor.selectedSize === shoe.size
                          ? "border-[#111111]"
                          : ""
                      }`}
                      onClick={() =>
                        handleSizeAndColor(shoe.size, "selectedSize")
                      }
                    >
                      {shoe.size}
                    </button>
                  </div>
                ))}
              </div>

              <div>
                <button
                  ref={refBag}
                  onClick={() => {
                    setIsClicked("bag");
                    handleAdd("bag");
                  }}
                  className={`text-[#111111] border font-inter border-[#CCCCCC] text-center mt-[12px] w-full rounded-[30px] py-[19px]`}
                >
                  Add to Bag
                </button>
                <button
                  ref={refFav}
                  onClick={() => {
                    handleAdd("fav");
                    refFav.current.style.backgroundColor = "black";
                    refFav.current.style.color = "white";
                    refBag.current.style.backgroundColor = "white";
                    refBag.current.style.color = "black";
                  }}
                  className={`text-[#111111] border font-inter border-[#CCCCCC] text-center mt-[12px] w-full rounded-[30px] py-[19px]`}
                >
                  Add to Favourites
                </button>
              </div>

              <div className=" mt-[48px]">
                <p className=" text-[14px] font-inter leading-[28px] text-[#111111] font-normal">
                  {openData?.description}
                </p>
                <p className=" mt-[16px] text-[16px] leading-[24px] font-inter font-normal ml-[16px]">
                  Colour shown : {openData?.color}
                </p>
                <p className=" font-medium font-inter text-[15px] leading-[24px] mt-[26px]">
                  View Product Details
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-[80px] max-w-[1303px] mx-auto">
          <p className=" text-center font-[400] leading-[32px] text-[19px]">
            Explore the {openData.title}
          </p>
          <img className=" mt-[65px] " src="/images/boy-1.png" alt="" />
          <p className=" text-center font-[400] leading-[32px] text-[19px] mt-[72px] max-w-[648px] mx-auto">
            Originally designed for performance running, the full-length Max Air
            unit adds soft cushioning.
          </p>
          <img className=" mt-[185px]" src="/images/boy-2.png" alt="" />
          <p className=" text-center font-[400] leading-[32px] text-[20px] mt-[72px] max-w-[648px] mx-auto">
            Originally designed for performance running, the full-length Max Air
            unit adds soft cushioning.
          </p>{" "}
          <img className=" mt-[185px]" src="/images/boy-3.png" alt="" />
          <p className=" text-center font-[400] leading-[32px] text-[20px] mt-[72px] max-w-[648px] mx-auto">
            Originally designed for performance running, the full-length Max Air
            unit adds soft cushioning.
          </p>
        </div>

        <div className=" mt-[60px] max-w-[1344px] w-full mx-auto">
          <div className=" flex justify-between items-center">
            <p className=" text-[19px] leading-[24px] font-medium font-inter">
              You Might Also Like
            </p>
            <div className=" flex gap-[12.38px] items-center">
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
        </div>
        <div className=" mt-[12px] ml-[30px] mb-[60px]  ">
          {/* LandingSwiper */}
          <Swiper
            onSlideChange={SlideChange}
            ref={swiperRef}
            navigation={{
              nextEl: ".swiper-button-next", // Selector for your custom "Next" button
              prevEl: ".swiper-button-prev", // Selector for your custom "Previous" button
            }}
            modules={[Navigation]}
            slidesPerView={3.1}
            spaceBetween={12}
            className=" max-w-[1366px] w-full mx-auto"
          >
            {ShoeSwiper.map((data, index) => (
              <SwiperSlide key={index}>
                <div className=" max-w-[431.78px] w-full pb-[15px]">
                  <img src={data.img} alt="" />
                  <div className="mt-[21px] flex justify-between">
                    <p className=" text-[15px] text-[#111111] font-medium font-inter leading-[24px]">
                      {data.title}
                    </p>
                    <p className=" text-[15px] text-[#111111] font-medium font-inter leading-[24px] mr-2">
                      ${data.price}
                    </p>
                  </div>
                  <p className=" font-inter text-[15px] text-[#757575] leading-[24px]">
                    {data.gender}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default OpenItem;
