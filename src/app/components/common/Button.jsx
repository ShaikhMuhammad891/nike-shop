"use client";
import { Play } from "@/icons/logos";
import { useState } from "react";

const Button = (props) => {
  const { title, color, bgcolor, onClick, border, borderColor, watch } = props;
  return (
    <button
      onClick={onClick}
      style={{
        background: bgcolor,
        color: color,
        borderColor: borderColor,
      }}
      className={`font-helvetica border flex justify-center items-center gap-[8.75px] py-[7.5px] px-[21.5px] leading-[24px] text-[15px] rounded-[30px]`}
    >
      {title}
      {watch && <Play />}
    </button>
  );
};

export default Button;
