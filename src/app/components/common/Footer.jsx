import { LocationLogo, TwitterLogo } from "@/icons/logos";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#111111] w-full pt-[40px] pb-[18px]">
        <div className=" max-w-[1372px] mx-auto">
          <div className="  flex justify-between">
            <div className="  grid grid-cols-3 gap-[12px] max-w-[760px] w-full">
              <div className=" max-w-[245.25px] w-full">
                <p className=" text-[10px] leading-[32.67px] font-helvetica text-white">
                  FIND A STORE
                </p>
                <ul>
                  <li className=" text-[10px] leading-[32.67px] font-helvetica text-white font-normal">
                    Become A Member
                  </li>
                  <li className=" text-[10px] leading-[32.67px] font-helvetica text-white font-normal">
                    Sign Up for Email
                  </li>
                  <li className=" text-[10px] leading-[32.67px] font-helvetica text-white font-normal">
                    Send Us Feedback
                  </li>
                  <li className=" text-[10px] leading-[32.67px] font-helvetica text-white font-normal">
                    Student Discounts
                  </li>
                </ul>
              </div>

              <div className=" max-w-[245.25px] w-full">
                <p className=" text-[10px] text-[#FFFFFF] font-helvetica font-normal leading-[24px] ">
                  GET HELP
                </p>
                <ul>
                  <li className=" text-[12px] text-[#7e7e7e] font-helvetica font-normal leading-[28px] ">
                    Order Status
                  </li>
                  <li className=" text-[12px] text-[#7e7e7e] font-helvetica font-normal leading-[28px] ">
                    Delivery
                  </li>
                  <li className=" text-[12px] text-[#7e7e7e] font-helvetica font-normal leading-[28px] ">
                    Returns
                  </li>
                  <li className=" text-[12px] text-[#7e7e7e] font-helvetica font-normal leading-[28px] ">
                    Payment Options
                  </li>
                  <li className=" text-[12px] text-[#7e7e7e] font-helvetica font-normal leading-[28px] ">
                    Contact Us On Nike.com Inquiries
                  </li>
                  <li className=" text-[12px] text-[#7e7e7e] font-helvetica font-normal leading-[28px] ">
                    Contact Us On All Other Inquiries
                  </li>
                </ul>
              </div>

              <div className=" max-w-[245.25px] w-full">
                <p className=" text-[10px] font-normal font-helvetica leading-[24px] text-[#FFFFFF] ">
                  ABOUT NIKE
                </p>
                <ul>
                  <li className=" text-[12px] text-[#7e7e7e] font-helvetica font-normal leading-[28px]">
                    News
                  </li>
                  <li className=" text-[12px] text-[#7e7e7e] font-helvetica font-normal leading-[28px]">
                    Careers
                  </li>
                  <li className=" text-[12px] text-[#7e7e7e] font-helvetica font-normal leading-[28px]">
                    Investors
                  </li>
                  <li className=" text-[12px] text-[#7e7e7e] font-helvetica font-normal leading-[28px]">
                    Sustainability
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex gap-[16px]">
              <img
                src="/images/twitter.png"
                alt=""
                className=" w-[30px] h-[30px]"
              />
              <img src="/images/fb.png" alt="" className=" w-[30px] h-[30px]" />
              <img
                src="/images/youtube.png"
                alt=""
                className=" w-[30px] h-[30px]"
              />
              <img
                src="/images/insta.png"
                alt=""
                className=" w-[30px] h-[30px]"
              />
            </div>
          </div>
          <div className=" ml-[13px] flex justify-between items-end">
            <div className=" flex mt-[45px] items-end">
              <img
                src="/images/location.png"
                alt=""
                className=" w-[9.38px] h-[13.12px]"
              />
              <p className=" text-[#ffffff] font-helvetica font-normal text-[12px] ml-[12px]">
                India
              </p>
              <p className=" text-[#7E7E7E] text-[11px] ml-[16px]">
                © 2023 Nike, Inc. All Rights Reserved
              </p>
            </div>
            <div>
              <ul className=" flex gap-[27.8px]">
                <li className=" text-[#7E7E7E] font-helvetica font-normal text-[12px]">
                  Guides
                </li>
                <li className=" text-[#7E7E7E] font-helvetica font-normal text-[12px]">
                  Terms of Sale
                </li>
                <li className=" text-[#7E7E7E] font-helvetica font-normal text-[12px]">
                  Terms of Use
                </li>
                <li className=" text-[#7E7E7E] font-helvetica font-normal text-[12px]">
                  Nike Privacy Policy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
