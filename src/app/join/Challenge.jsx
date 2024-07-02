import React from "react";
import Button from "../components/common/Button";
import { NikeLogo } from "@/icons/logos";

const Challenge = () => {
  return (
    <div className=" mb-[56px]">
      <div className=" mt-[32px] max-w-[918px] mx-auto">
        <p className=" flex justify-center text-[54px] leading-[60px] font-medium">
          BREAKING BARRIERS CHALLENGE
        </p>
        <p className=" mt-[11px] flex justify-center text-[15px] leading-[24px]">
          50 years and we are never done— run with us for the future of sport.
        </p>
        <div className=" flex justify-center mt-[41.5px]">
          <Button title="Download the NRC App" bgcolor="black" color="white" />
        </div>
      </div>

      <div>
        <p className=" mt-[84px] text-[30px] leading-[36px] font-medium">
          Frequently Asked Questions
        </p>

        <div className=" mt-[84px]">
          {nikeMembershipFAQ.map((ask, index) => (
            <div key={index} className=" mb-[48px]">
              <p className=" text-[30px] leading-[36px] font-medium">
                {ask.question}
              </p>
              <p className=" mt-[27px] text-[20px] leading-[28px] text-[#757575]">
                {ask.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-[84px] bg-[#f2f0ed] w-full pt-[90px] pb-[60px]">
        <div className=" flex justify-center ">
          <NikeLogo fill="#fe5307" />
        </div>
        <p className=" flex justify-center max-w-[200px] mx-auto text-center mt-[30px] text-[40px]">
          All Athletes Belong
        </p>

        <div className=" flex justify-center mt-[50px]">
          <div className=" flex gap-[8px] ">
            <Button title="Join Us" bgcolor="black" color="white" />
            <Button title="Sign-In" bgcolor="black" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;

const nikeMembershipFAQ = [
  {
    question: "What is Nike Membership?",
    answer:
      "Nike Membership gives you access to inspiration, community and exclusive Nike products. It's the best way to access everything Nike, and it's free, fast and easy to join. You can join online or when you download any of the Nike apps.",
  },
  {
    question: "Is Nike Membership free?",
    answer:
      "Yes, Nike Membership is free. That includes our fitness apps, Nike Training Club and Nike Run Club, and their libraries of over 100 workouts, and the SNKRS App, to stay on top of the latest sneaker drops.",
  },
  {
    question: "How fast is sign-up?",
    answer:
      "Join Us with three simple clicks, and you'll be ready to shop, work out and enjoy all of our benefits.",
  },
  {
    question: "What are Member Rewards?",
    answer:
      "All Nike Members receive special offers and product promotions just to say thanks for being with us, or for moments of personal significance like birthdays. Nike Member Rewards is not a points-based system, so you'll receive rewards throughout the year.",
  },
];
