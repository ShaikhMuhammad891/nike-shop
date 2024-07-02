import React from "react";
import Button from "../components/common/Button";

const Benifits = () => {
  return (
    <div className=" mt-[32px]">
      <div className=" max-w-[736.06px] mx-auto">
        <p className=" flex justify-center text-[55px] leading-[60px] font-medium">
          A Year Of You
        </p>
        <p className=" mt-[12px] text-[15px] leading-[24px]">365 days. 663 million miles. 37.5 million workouts. Let's see how the Nike community made 2022 proud.</p>
      </div>

      <div className=" flex justify-center mt-[34px]">
        <Button title = "Watch" bgcolor = "black" color = "white"/>
      </div>

      <div className=" max-w-[308px] mx-auto mt-[87px]">
        <p className=" flex justify-center text-[#757575] text-[15px] leading-[24px] font-medium">Benifits</p>
        <p className=" mt-[8px] text-[30px] leading-[36px] font-medium flex justify-center text-center ">Nike Member Benefits
        bring out your best</p>
      </div>

    </div>
  );
};

export default Benifits;
