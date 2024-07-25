"use client";
import { NikeLogo } from "@/icons/logos";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const Signin = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState({
    google: false,
    signin: false,
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
  });
  const [error, setError] = useState(null);
  const signinRef = useRef(null);
  const googleRef = useRef(null);

  const handleChange = (e) => {
    signinRef.current.style.backgroundColor = "black";
    signinRef.current.style.color = "white"
    googleRef.current.style.backgroundColor = "#E5E5E5";
    googleRef.current.style.color = "#757575";


    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const changeColor = (value) => {
    setIsClicked((prev) => ({ ...prev, [value]: !prev[value] }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" max-w-[324px] w-full mx-auto mt-[28px]"
    >
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
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="py-[12px] px-[17px] border w-full rounded-[3px] mt-[25px]"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="py-[12px] px-[17px] border w-full rounded-[3px] mt-[13px]"
        required
      />
      <div className=" flex justify-between mt-[23px] items-center">
        <div className=" flex justify-between gap-[14px] items-center">
          <input
            type="checkbox"
            name="keepSignedIn"
            checked={formData.keepSignedIn}
            onChange={handleChange}
            className=" custom-checkbox w-[20px] h-[20px] accent-white "
          />
          <p className=" text-[12px] leading-[14px] font-normal text-[#8D8D8D]">
            Keep me signed in
          </p>
        </div>
        <p className=" text-[12px] leading-[14px] font-normal text-[#BCBCBC]">
          Forgotten your password?
        </p>
      </div>
      <p className=" max-w-[280px] mx-auto text-center mt-[25px] text-[12px] leading-[16px] font-normal text-[#8D8D8D]">
        By logging in, you agree to Nike's
        <span className=" border-b border-b-[#8D8D8D]">Privacy Policy</span> and
        <span className=" border-b border-b-[#8D8D8D]">Terms of Use</span>.
      </p>
      <button
        ref={signinRef}
        onClick={() => changeColor("signin")}
        type="submit"
        className={` mt-[30px] w-full bg-[#E5E5E5] text-[#757575] text-[11px] leading-[17px] flex items-center justify-center py-[11px] rounded-[3px]`}
      >
        SIGN IN
      </button>
      <button
      ref={googleRef}
        type="button"
     
        className={` tracking-wide mt-[30px] w-full bg-black text-white text-[11px] leading-[17px] flex items-center justify-center py-[11px] rounded-[3px]`}
      >
        SIGN IN WITH GOOGLE
      </button>
      {error && <p className="text-red-500 text-center mt-[10px]">{error}</p>}
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
