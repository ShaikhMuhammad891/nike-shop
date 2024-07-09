import Image from "next/image";
import React from "react";
import Button from "./common/Button";

const Featured = () => {
  return (
    <>
      <div className=" max-w-[1344px] mx-auto mt-[84px]">
        <p className=" text-[23px] leading-[28px] font-helvetica font-medium text-[#111111]">Featured</p>
        <Image src="/images/featured.png" alt="featured" width={1344} height={700} className=" mt-[25px]" />

        <div className=" mt-[48px]">
            <p className=" font-helvetica font-medium text-[54px] leading-[60px] text-center">STEP INTO WHAT FEELS GOOD</p>
            <p className=" mt-[24px] font-helvetica text-[15px] leading-[24px] text-center">Cause everyone should know the feeling of running in that perfect pair.</p>
            <div className=" flex justify-center mt-[30px]">
            <Button title = "Find Your Shoe" bgcolor = "#111111" color = "#ffffff" />

            </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
