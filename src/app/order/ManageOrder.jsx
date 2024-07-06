"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ManageOrder = () => {
  const router = useRouter();
  return (
    <div className=" mt-[131px] mb-[150px]">
      <form action="">
        <p className=" text-[19px] leading-6 font-medium text-center">
          View or Manage Your Order
        </p>
        <p className=" mt-[11px] text-[14px] leading-5 text-center">
          To check the status of your order, or to start a return, please enter
          your order number and email address.
        </p>

        <div className=" mt-[34px] border border-[#757575] pt-[29px] pl-[16px] rounded-[8px]">
          <input
            type="number"
            placeholder="Order Number*"
            className=" outline-none text-[16px] leading-6 text-[#757575]"
          />
        </div>
        <div className=" mt-[28px] border border-[#757575] pt-[29px] pl-[16px] rounded-[8px]">
          <input
            type="email"
            placeholder="Email address*"
            className=" outline-none text-[16px] leading-6 text-[#757575]"
          />
        </div>

        <button className=" w-full bg-[#E5E5E5] text-[#757575] text-[15px] font-medium leading-6 py-[21.5px] rounded-[30px] mt-[44px]">
          Submit
        </button>

        <div className=" mt-[26px] flex justify-center items-center">
          <p className=" text-[14px] leading-5">Already a member?</p>
          <p
            className=" text-[15px] font-medium leading-6 cursor-pointer"
            onClick={() => router.push("/signin")}
          >
            Sign in
          </p>
        </div>
      </form>
    </div>
  );
};

export default ManageOrder;
