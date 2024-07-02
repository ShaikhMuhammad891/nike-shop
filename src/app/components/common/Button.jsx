"use client";
import { Play } from "@/icons/logos";
import { useState } from "react";

const Button = (props) => {
  const [watch, setWatch] = useState(false);
  const { title, color, bgcolor, onClick, border, borderColor } = props;
  return (
    <button
      onClick={onClick}
      style={{
        background: bgcolor,
        color: color,
        padding: "7.5px 21.5px",
        fontSize: "15px",
        lineHeight: "24px",
        borderRadius: "30px",
        borderColor: borderColor,
        display: "flex",
      }}
      className=" font-helvetica border justify-center items-center gap-[8.75px]"
    >
      {title}
      {watch && <Play />}
    </button>
  );
};

export default Button;
