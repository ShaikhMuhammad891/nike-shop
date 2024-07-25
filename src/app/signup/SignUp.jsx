"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { NikeLogo } from "@/icons/logos";
import { Countries, customStyles } from "../../../utils/countries";
import { auth } from "../firebase/firebase";

const SignUp = () => {
  const router = useRouter();
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: null,
    gender: "",
    subscribe: false,
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateFocus = (e) => {
    e.target.type = "date";
  };

  const handleDateBlur = (e) => {
    e.target.type = "text";
  };

  const handleCountryChange = (value) => {
    setFormFields((prev) => ({
      ...prev,
      country: value,
    }));
  };

  const handleGenderClick = (gender) => {
    setFormFields((prev) => ({
      ...prev,
      gender,
    }));
  };

  const handleSubscribeChange = () => {
    setFormFields((prev) => ({
      ...prev,
      subscribe: !prev.subscribe,
    }));
  };

  const signup = async (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={signup} className="max-w-[324px] mx-auto pb-[33px]">
      <div className="flex justify-center">
        <NikeLogo />
      </div>
      <div className="flex justify-center">
        <p className="max-w-[237.5px] w-full text-center text-[18px] font-bold leading-[26px] mt-[30px]">
          BECOME A NIKE MEMBER
        </p>
      </div>
      <p className="mt-[25px] text-[#8D8D8D] text-[14px] font-normal leading-[22px] text-center max-w-[282px] mx-auto">
        Create your Nike Member profile and get first access to the very best of
        Nike products, inspiration and community.
      </p>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formFields.email}
        onChange={handleChange}
        className="custom-input py-[12px] px-[17px] border w-full rounded-[3px] mt-[25px]"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formFields.password}
        onChange={handleChange}
        className="custom-input py-[12px] px-[17px] border w-full rounded-[3px] mt-[13px]"
        required
      />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formFields.firstName}
        onChange={handleChange}
        className="custom-input py-[12px] px-[17px] border w-full rounded-[3px] mt-[13px]"
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formFields.lastName}
        onChange={handleChange}
        className="custom-input py-[12px] px-[17px] border w-full rounded-[3px] mt-[13px]"
        required
      />
      <input
        name="dateOfBirth"
        placeholder="Date of Birth"
        value={formFields.dateOfBirth}
        onFocus={handleDateFocus}
        onBlur={handleDateBlur}
        onChange={handleChange}
        className="custom-input py-[12px] px-[17px] border w-full rounded-[3px] mt-[13px]"
        required
      />
      <p className="mt-[7px] text-[11px] leading-[13.4px] text-[#8d8d8d] text-center">
        Get a Nike Member Reward every year on your Birthday.
      </p>
      <Select
        options={Countries}
        value={formFields.country}
        onChange={handleCountryChange}
        styles={customStyles}
        placeholder="Select a Country"
        className="mt-[18px] w-full"
        required
      />
      <div className="flex justify-between gap-[16.22px] mt-[12px]">
        <button
          type="button"
          className={`text-[13px] leading-[16px] font-normal flex justify-center items-center w-[153.89px] border py-[12px] ${
            formFields.gender === "Male" ? "text-black" : "text-[#8D8D8D]"
          }`}
          onClick={() => handleGenderClick("Male")}
          required
        >
          Male
        </button>
        <button
          type="button"
          className={`text-[13px] leading-[16px] font-normal flex justify-center items-center w-[153.89px] border py-[12px] ${
            formFields.gender === "Female" ? "text-black" : "text-[#8D8D8D]"
          }`}
          onClick={() => handleGenderClick("Female")}
          required
        >
          Female
        </button>
      </div>
      <div className="flex gap-[14px] items-center mt-[24.5px]">
        <input
          type="checkbox"
          className="w-[20px] h-[20px]"
          checked={formFields.subscribe}
          onChange={handleSubscribeChange}
        />
        <p className="text-[11px] leading-[14px] text-[#8d8d8d] max-w-[247px]">
          Sign up for emails to get updates from Nike on products, offers and
          your Member benefits
        </p>
      </div>
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
      <p className="max-w-[309.3px] mx-auto mt-[22px] text-[12px] leading-[16px] text-center text-[#8d8d8d]">
        By creating an account you agree to Nike's{" "}
        <span className="underline cursor-pointer">Privacy Policy</span> and{" "}
        <span className="underline cursor-pointer">Terms of Use</span>
      </p>
      <button
        type="submit"
        className="mt-[30px] text-white bg-black py-[12px] font-normal text-[15px] leading-[17px] w-full flex justify-center items-center"
      >
        SIGN UP
      </button>
      <p className="mt-[18px] text-[11px] leading-[14px] text-center font-medium text-[#8D8D8D]">
        Already a Member?{" "}
        <span
          onClick={() => router.push("/signin")}
          className="underline cursor-pointer text-black"
        >
          Sign In.
        </span>
      </p>
    </form>
  );
};

export default SignUp;
