import { Search, SearchIcon, ThumbsDown, ThumbsUp } from "@/icons/logos";
import React from "react";
import Button from "../components/common/Button";

const Help = () => {
  return (
    <>
      <div className=" mt-[44px] mb-[20px]">
        <p className=" flex justify-center text-[32px] leading-[36px] font-medium">
          GET HELP
        </p>
        <div className="  mt-[20px] max-w-[457.33px] w-full mx-auto">
          <div className=" flex justify-between border border-[#757575] rounded-[8px] py-[19px] px-[12px]  ">
            <input
              type="text"
              placeholder="What can we help you with"
              className=" outline-none"
            />
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className=" flex mt-[28px]">
        <div className=" max-w-[939.75px] w-full  border-r border-r-[#CCCCCC] ">
          <p className=" text-[28px] leading-[32px] font-medium">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </p>
          <p className=" text-[15px] leading-[28px] mt-[38px]">
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>
          <p className=" mt-[31px] ml-[32px] text-[16px] leading-[28px]">
            Visa, Mastercard, Diners Club, Discover, American Express, Visa
            Electron, Maestro
          </p>
          <p className=" mt-[23px] ml-[32px] text-[15px] leading-[28px]">
            If you enter your PAN information at checkout, you'll be able to pay
            for your order with PayTM or a local credit or debit card.
          </p>
          <p className=" mt-[23px] ml-[32px] text-[15px] leading-[28px]">
            Apple Pay
          </p>
          <p className=" mt-[26px] text-[16px] leading-[28px] font-normal">
            <span className=" underline font-medium cursor-pointer">
              Nike Members
            </span>{" "}
            can store multiple debit or credit cards in their profile for faster
            checkout. If you're not already a Member, join us today.
          </p>

          <div className=" mt-[16px] flex gap-[16px]">
            <Button title="JOIN US" bgcolor="black" color="white" />
            <Button title="SHOP NIKE" bgcolor="black" color="white" />
          </div>

          {/* FAQ */}
          <div>
            <p className=" mt-[21px] text-[20px] leading-[24px] font-medium">
              FAQs
            </p>
            <div className=" mt-[17px]">
              {faqs.map((ask, index) => (
                <div key={index} className=" mb-[20px]">
                  <p className=" text-[16px] leading-[28px] font-bold">
                    {ask.question}
                  </p>
                  <p className=" max-w-[922px] text-[16px] leading-[28px]">
                    {ask.answer}
                  </p>
                </div>
              ))}
            </div>
            <p className=" mt-[25px] text-[15px] leading-[28px] cursor-pointer">
              Was this answer helpful?
            </p>
            <div className=" mt-[6px] flex gap-[10px]">
              <div className=" cursor-pointer">
                <ThumbsUp />
              </div>
              <div className=" cursor-pointer">
                <ThumbsDown />
              </div>
            </div>

            {/* related */}
            <div>
              <p className=" mt-[20px] text-[#757575] text-[16px] leading-[24px] font-medium">
                Related
              </p>
              <p className=" mt-[25px] text-[16px] leading-[28px] font-medium ml-[32px] underline cursor-pointer">
                WHAT ARE NIKE'S DELIVERY OPTIONS?
              </p>
              <p className=" mt-[23px] text-[16px] leading-[28px] font-medium ml-[32px] underline cursor-pointer">
                HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
              </p>
            </div>
          </div>
        </div>
        <div className=" max-w-[313.25px] w-full flex items-center flex-col">
          <p className="  text-[28px] leading-[32px] font-medium">CONTACT US</p>
          <div className=" mt-[34px]">
            {contacts.map((data, index) => (
              <div
                key={index}
                className=" max-w-[263.15px] flex flex-col items-center mb-[53px]"
              >
                <div>
                  <img src={data.img} alt="" />
                </div>
                <p className=" text-center mt-[29px] text-[16px] leading-[24px] font-medium">
                  {data.title}
                </p>
                <p className=" text-center text-[16px] leading-[24px]">
                  {data.description1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;

const faqs = [
  {
    question: "Does my card need international purchases enabled?",
    answer:
      "Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled. Please note, some banks may charge a small transaction fee for international orders.",
  },
  {
    question: "Can I pay for my order with multiple methods?",
    answer:
      "No, payment for Nike orders can't be split between multiple payment methods.",
  },
  {
    question: "What payment method is accepted for SNKRS orders?",
    answer: "You can use any accepted credit card to pay for your SNKRS order.",
  },
  {
    question: "Why don't I see Apple Pay as an option?",
    answer:
      "To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.",
  },
];

const contacts = [
  {
    img: "/images/phone.png",
    title: "000 800 919 0566",
    description1:
      "Products & Orders: 24 hours a day, 7 days a week Company Info & Enquiries: 07:30 - 16:30, Monday - Friday",
    description2:
      " Products & Orders: 24 hours a day, 7 days a week Company Info & Enquiries: 07:30 - 16:30, Monday - Friday",
  },
  {
    img: "/images/chat.png",
    title: "24 hours a day",
    description1: "7 days a week",
  },
  {
    img: "/images/sms.png",
    title: "We'll reply within",
    description1: "five business days",
  },
  {
    img: "/images/location-contact.png",
    title: "STORE LOCATOR",
    description1: "Find Nike retail stores near you",
  },
];
