import React from "react";
import Button from "../../../utils/Button";

const Essential = () => {
  return (
    <>
      <div className=" max-w-[1344px] mx-auto">
        <div className=" mt-[48px]">
          <p className=" font-helvetica font-medium text-[54px] leading-[60px] text-center">
            FLIGHT ESSENTIALS
          </p>
          <p className=" mt-[24px] font-helvetica text-[15px] leading-[24px] text-center">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <div className=" flex justify-center mt-[30px]">
            <Button title="Shop" bgcolor="#111111" color="#ffffff" />
          </div>
        </div>
        <p className=" text-[23px] leading-[28px] font-helvetica font-medium text-[#111111] mt-[84px]">
          The Essentials
        </p>

        <div className=" mt-[25px] flex justify-between">
          <div className=" relative">
            <img src="/images/essential-one.png" alt="" />
            <div className=" absolute bottom-12 left-10">
              <Button title="Men's" bgcolor="#ffffff" />
            </div>
          </div>
          <div className=" relative">
            <img src="/images/essential-two.png" alt="" />
            <div className=" absolute bottom-12 left-10">
              <Button title="Men's" bgcolor="#ffffff" />
            </div>
          </div>
          <div className=" relative">
            <img src="/images/essential-three.png" alt="" />
            <div className=" absolute bottom-12 left-10">
              <Button title="Men's" bgcolor="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Essential;
