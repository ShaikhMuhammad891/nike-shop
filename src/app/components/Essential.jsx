"use client";
import React from "react";
import Button from "./common/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Essential = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/shop");
  };
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
            <Button
              title="Shop"
              bgcolor="#111111"
              color="#ffffff"
              onClick={onClick}
            />
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

        <div className=" mt-[87px] flex max-w-[880px] mx-auto justify-between">
          <div>
            <p className=" font-helvetica text-[15px] leading-[24px]">Icons</p>
            <ul className=" mt-[24px] space-y-[16px]">
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Air Force 1
              </li>
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Huarache
              </li>
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Air Max 90
              </li>
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Air Max 95
              </li>
            </ul>
          </div>
          <div>
            <p className=" font-helvetica text-[15px] leading-[24px]">Shoes</p>
            <ul className=" mt-[24px] space-y-[16px]">
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                All Shoes
              </li>
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Custom Shoes
              </li>
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Jordan Shoes
              </li>
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Running Shoes
              </li>
            </ul>
          </div>
          <div>
            <p className=" font-helvetica text-[15px] leading-[24px]">
              Clothing
            </p>
            <ul className=" mt-[24px] space-y-[16px]">
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                All Clothing
              </li>
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Modest Wear
              </li>
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Hoodies and Pullovers
              </li>
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Shirts & Tops
              </li>
            </ul>
          </div>
          <div>
            <p className=" font-helvetica text-[15px] leading-[24px]">Kids'</p>
            <ul className=" mt-[24px] space-y-[16px]">
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Infant & Toddler Shoes
              </li>
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Kids' Shoes
              </li>
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Kids' Jordan Shoes
              </li>
              <li className=" font-helvetica text-[15px] leading-[24px] text-[#757575]">
                Kids' Basketball Shoes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Essential;
