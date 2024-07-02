"use client";
import { NikeLogo } from "@/icons/logos";
import { useRouter } from "next/navigation";
import React from "react";

const Signin = () => {
  const router = useRouter();
  return (
    <form className=" max-w-[324px] w-full mx-auto mt-[28px]">
      <div className=" flex justify-center">
        <NikeLogo />
      </div>
      <div className=" flex justify-center">
        <p className=" max-w-[186.5px] w-full text-center text-[18px] font-bold  leading-[26px] mt-[30px]">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </p>
      </div>
      <input
        type="email"
        placeholder="Email Address"
        className=" py-[12px] px-[17px] border w-full rounded-[3px] mt-[25px]"
      />
      <input
        type="password"
        placeholder="Password"
        className=" py-[12px] px-[17px] border w-full rounded-[3px] mt-[13px]"
      />

      <div className=" flex justify-between mt-[23px] items-center">
        <div className=" flex justify-between gap-[14px] items-center">
          <input
            type="checkbox"
            className=" custom-checkbox w-[20px] h-[20px] accent-white "
          />
          <p className=" text-[12px] leading-[14px] font-normal text-[#8D8D8D]">
            Keep me sigend in
          </p>
        </div>
        <p
          className=" text-[12px] leading-[14px] font-normal text-[#BCBCBC]
]"
        >
          Forgotten your password?
        </p>
      </div>
      <p className=" max-w-[280px] mx-auto text-center mt-[25px] text-[12px] leading-[16px] font-normal text-[#8D8D8D]">
        By logging in, you agree to Nike's
        <span className=" border-b border-b-[#8D8D8D]">Privacy Policy</span> and
        <span className=" border-b border-b-[#8D8D8D]">Terms of Use</span>.
      </p>
      <button className=" mt-[30px] w-full bg-black text-white text-[11px] leading-[17px] flex items-center justify-center py-[11px] rounded-[3px]">
        SIGN IN
      </button>
      <p className=" mt-[20px] mb-[80px] text-[12px] leading-[14px] text-center mx-auto font-normal text-[#8D8D8D]">
        Not a Member?{" "}
        <span
          className=" text-black border-b border-b-black cursor-pointer"
          onClick={() => router.push("/signup")}
        >
          Join Us.
        </span>
      </p>
    </form>
  );
};

export default Signin;
