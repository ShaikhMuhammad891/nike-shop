"use client";
import { NikeLogo } from "@/icons/logos";
import React, { useState } from "react";
import Select from "react-select";
import { Countries, customStyles } from "../../../utils/countries";
import countryList from "react-select-country-list";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [value, setValue] = useState(null);
  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <form action="" className=" max-w-[324px] mx-auto pb-[33px]">
      <div className=" flex justify-center">
        <NikeLogo />
      </div>
      <div className=" flex justify-center">
        <p className=" max-w-[237.5px] w-full text-center text-[18px] font-bold  leading-[26px] mt-[30px]">
          BECOME A NIKE MEMBER
        </p>
      </div>
      <p className=" mt-[25px] text-[#8D8D8D] text-[14px] font-normal leading-[22px] text-center max-w-[282px] mx-auto">
        Create your Nike Member profile and get first access to the very best of
        Nike products, inspiration and community.
      </p>
      <input
        type="email"
        placeholder="Email Address"
        className=" custom-input py-[12px] px-[17px] border w-full rounded-[3px] mt-[25px]"
      />
      <input
        type="password"
        placeholder="Password"
        className=" custom-input py-[12px] px-[17px] border w-full rounded-[3px] mt-[13px]"
      />
      <input
        type="text"
        placeholder="First Name"
        className=" custom-input py-[12px] px-[17px] border w-full rounded-[3px] mt-[13px]"
      />
      <input
        type="text"
        placeholder="Last Name"
        className=" custom-input py-[12px] px-[17px] border w-full rounded-[3px] mt-[13px]"
      />
      <input
        placeholder="Date of Birth"
        onFocus={(e)=>e.target.type = "date"}
        onBlur={(e)=>e.target.type = "text"}
        className=" custom-input py-[12px] px-[17px] border w-full rounded-[3px] mt-[13px]"
      />
      <p className=" mt-[7px] text-[11px] leading-[13.4px] text-[#8d8d8d] text-center">
        Get a Nike Member Reward every year on your Birthday.
      </p>
      <Select
        options={Countries}
        value={value}
        onChange={changeHandler}
        styles={customStyles}
        placeholder="Select a Country"
        className=" mt-[18px] w-full"
      />
      <div className=" flex justify-between gap-[16.22px] mt-[12px]">
        <button className=" text-[13px] leading-[16px] font-normal flex justify-center text-[#8D8D8D] items-center w-[153.89px]  border py-[12px]">
          Male
        </button>
        <button className=" text-[13px] leading-[16px] font-normal flex justify-center text-[#8D8D8D] items-center w-[153.89px]  border py-[12px]">
          Female
        </button>
      </div>
      <div className=" flex gap-[14px] items-center mt-[24.5px]">
        <input type="checkbox" className=" w-[20px] h-[20px]" />
        <p className=" text-[11px] leading-[14px] text-[#8d8d8d] max-w-[247px]">
          Sign up for emails to get updates from Nike on products, offers and
          your Member benefits
        </p>
      </div>
      <p className=" max-w-[309.3px] mx-auto mt-[22px] text-[12px] leading-[16px] text-center text-[#8d8d8d]">
        By creating an account you agree to Nike's{" "}
        <span className=" underline cursor-pointer">Privacy Policy</span> and{" "}
        <span className=" underline cursor-pointer"> Terms of Use</span>
      </p>
      <button className=" mt-[30px] text-white bg-black py-[12px] font-normal text-[15px] leading-[17px] w-full flex justify-center items-center">
        JOIN US
      </button>
      <p className=" mt-[18px] text-[11px] leading-[14px] text-center font-medium text-[#8D8D8D] ">
        Already a Member?
        <span
          onClick={() => router.push("/signin")}
          className=" underline cursor-pointer text-black"
        >
          {" "}
          Sign In.
        </span>
      </p>
    </form>
  );
};

export default SignUp;
