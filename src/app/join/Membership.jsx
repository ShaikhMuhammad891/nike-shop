import React from "react";
import Button from "../components/common/Button";
import Image from "next/image";

const Membership = () => {
  return (
    <div>
      <p className=" mt-[35px] text-[23px] leading-[42px] font-medium">
        Nike Membership
      </p>
      <div className=" max-w-[397px] mx-auto mt-[90px]">
        <p className=" text-[26px] leading-[32px] font-medium flex justify-center">
          Where All Athletes Belong
        </p>
        <p className=" w-full mt-[25px] text-[15px] leading-[24px] flex justify-center text-center">
          When you’re with us, you’re part of something bigger: a global
          community dedicated to bringing out the best in one another, with
          access to the most effective tools for the job, including
          Member-exclusive products, Nike By You customisation, and special
          offers. And it's all free.
        </p>
        <div className=" flex justify-center mt-[30px]">
          <Button title="Join Us" bgcolor="black" color="white" />
        </div>
      </div>
      <div className=" w-[1344px] mt-[84px] h-[910px] bg-[#F5F5F5] flex justify-center" />
    </div>
  );
};

export default Membership;
