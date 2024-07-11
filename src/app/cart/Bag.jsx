"use client";
import { DeleteLogo, Heart } from "@/icons/logos";
import React, { useEffect, useState } from "react";
import { useShop } from "../../../context/ContextData";

const Bag = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const { selectedItem } = useShop();
  const { bagData } = props;

  return (
    <div className=" max-w-[1100px] mx-auto my-[40px]">
      <div className=" flex gap-[18px] w-full">
        <div className=" max-w-[723.33px] w-full">
          <div className=" bg-[#f5f5f5] py-[14px] pl-[20px] w-full">
            <p className=" text-[13px] leading-[14px] font-medium font-inter ">
              Free Delivery
            </p>
            <div className=" flex gap-[18px] mt-[4px]">
              <p className=" text-[11px] leading-6 font-inter">
                Applies to orders of ₹ 14 000.00 or more.
              </p>
              <p className=" underline text-[11px] leading-6 font-medium font-inter">
                View details
              </p>
            </div>
          </div>

          {/* bag */}
          <div>
            <p className=" mt-[15px]">Bag</p>
            <div className=" flex w-full gap-[30px] mt-[25px]">
              <div className=" max-w-[150px]">
                <img src={bagData.img} alt="" />
              </div>
              <div className=" max-w-[537px] flex justify-between w-full">
                <div>
                  <p className=" text-[15px] leading-7 font-inter">
                    {bagData.title}
                  </p>
                  <p className=" text-[15px] leading-7 font-inter text-[#757575] ">
                    {bagData.genderWear}
                  </p>
                  <p className=" text-[15px] leading-7 font-inter text-[#757575] ">
                    Green {bagData.color}
                  </p>
                  <p className=" text-[15px] leading-7 font-inter text-[#757575] ">
                    Quantity {bagData.id}
                  </p>
                  <div className=" flex gap-[16px] mt-[28px]">
                    <div>
                      <Heart />
                    </div>
                    <div>
                      <DeleteLogo />
                    </div>
                  </div>
                </div>
                <div>
                  <p className=" text-[15px] leading-7">
                    USD: ${bagData.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[350.67px] w-full">
          <p className=" text-[21px] leading-[33px] font-inter">Summary</p>
          <div className=" flex justify-between w-full mt-[25px]">
            <p className=" text-[15px] leading-7 font-inter">Subtotal</p>
            <p className=" text-[15px] leading-7 font-inter">
              ÙSD: $ {bagData.price}
            </p>
          </div>
          <div className=" mt-[8px] flex justify-between w-full pb-[20px]">
            <p className=" text-[15px] leading-7 font-inter">
              Estimated Delivery & Handling
            </p>
            <p className=" text-[15px] leading-7 font-inter">Free</p>
          </div>
          <hr />

          <div className=" my-[20px] flex justify-between w-full ">
            <p className=" text-[14px] leading-7 font-inter">Total</p>
            <p className=" text-[14px] leading-7 font-medium font-inter">
              USD : $ {bagData.price}
            </p>
          </div>
          <hr />

          <button
            onClick={() => setIsClicked(!isClicked)}
            className={`mt-[32px] w-full rounded-[30px] border py-[18px] font-inter ${
              isClicked && " bg-black text-white"
            }`}
          >
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bag;
