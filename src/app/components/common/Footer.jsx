"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <div
        className={` bg-[#111111] w-full pt-[40px] pb-[15px] ${
          pathname === "/delivery" && "hidden"
        }`}
      >
        <div className=" max-w-[1372px] mx-auto">
          <div className="  flex justify-between">
            <div className="  grid grid-cols-3 gap-[12px] max-w-[759.75px] w-full h-[213px]">
              <div className=" max-w-[245.25px] w-full">
                <p className=" text-[10px] leading-[16px] font-inter text-[#FFFFFF] cursor-pointer">
                  FIND A STORE
                </p>
                <ul className=" mt-[19.66px] space-y-[19.66px]">
                  <li className=" text-[10px] leading-[16px] font-helvetica text-[#FFFFFF] cursor-pointer font-normal">
                    Become A Member
                  </li>
                  <li className=" text-[10px] leading-[16px] font-helvetica text-[#FFFFFF] cursor-pointer font-normal">
                    Sign Up for Email
                  </li>
                  <li className=" text-[10px] leading-[16px] ml-[6px] font-helvetica text-[#FFFFFF] cursor-pointer font-normal">
                    Send Us Feedback
                  </li>
                  <li className=" text-[10px] leading-[16px] font-helvetica text-[#FFFFFF] cursor-pointer font-normal">
                    Student Discounts
                  </li>
                </ul>
              </div>

              <div className=" max-w-[245.25px] w-full">
                <p className=" text-[10px] tracking-[0.5px] text-[#FFFFFF] font-helvetica font-normal leading-[16px] cursor-pointer ">
                  GET HELP
                </p>
                <ul className=" mt-[14px] space-y-[17px]">
                  <li
                    className=" text-[11px] text-[#7e7e7e] font-helvetica font-normal leading-[14px] cursor-pointer "
                    onClick={() => router.push("/order")}
                  >
                    Order Status
                  </li>
                  <li
                    className=" text-[12px] text-[#7e7e7e] font-helvetica font-normal leading-[14px] cursor-pointer "
                    onClick={() => router.push("/delivery")}
                  >
                    Delivery
                  </li>
                  <li className=" text-[11px] text-[#7e7e7e] font-helvetica font-normal leading-[14px] cursor-pointer ">
                    Returns
                  </li>
                  <li className=" text-[11px] text-[#7e7e7e] font-helvetica font-normal leading-[14px] cursor-pointer ">
                    Payment Options
                  </li>
                  <li className=" text-[11px] text-[#7e7e7e] font-helvetica font-normal leading-[14px] cursor-pointer ">
                    Contact Us On Nike.com Inquiries
                  </li>
                  <li className=" text-[11px] text-[#7e7e7e] font-helvetica font-normal leading-[14px] cursor-pointer ">
                    Contact Us On All Other Inquiries
                  </li>
                </ul>
              </div>

              <div className=" max-w-[245.25px] w-full">
                <p className=" text-[10px] font-normal font-helvetica leading-[16px] tracking-[0.5px] text-[#FFFFFF] ">
                  ABOUT NIKE
                </p>
                <ul className=" mt-[14px] space-y-[17px]">
                  <li className=" text-[12px] cursor-pointer text-[#7e7e7e] font-helvetica font-normal leading-[14px]">
                    News
                  </li>
                  <li className=" text-[12px] cursor-pointer text-[#7e7e7e] font-helvetica font-normal leading-[14px]">
                    Careers
                  </li>
                  <li className=" text-[11px] cursor-pointer text-[#7e7e7e] font-helvetica font-normal leading-[14px]">
                    Investors
                  </li>
                  <li className=" text-[11px] cursor-pointer text-[#7e7e7e] font-helvetica font-normal leading-[14px]">
                    Sustainability
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex gap-[16px] mr-[6px]">
              <img
                src="/images/twitter.png"
                alt=""
                className=" w-[30px] h-[30px] cursor-pointer"
              />
              <img
                src="/images/fb.png"
                alt=""
                className=" w-[30px] h-[30px] cursor-pointer"
              />
              <img
                src="/images/youtube.png"
                alt=""
                className=" w-[30px] h-[30px] cursor-pointer"
              />
              <img
                src="/images/insta.png"
                alt=""
                className=" w-[30px] h-[30px] cursor-pointer"
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
              <p className=" text-[#ffffff] font-normal text-[12px] ml-[12px]">
                India
              </p>
              <p className=" text-[#7E7E7E] text-[11px] ml-[16px]">
                © 2023 Nike, Inc. All Rights Reserved
              </p>
            </div>
            <div>
              <ul className=" flex gap-[27.8px] mr-[12px]">
                <li className="  cursor-pointer text-[#7E7E7E] font-helvetica font-normal text-[12px]">
                  Guides
                </li>
                <li className="  cursor-pointer text-[#7E7E7E] font-helvetica font-normal text-[12px]">
                  Terms of Sale
                </li>
                <li className="  cursor-pointer text-[#7E7E7E] font-helvetica font-normal text-[12px]">
                  Terms of Use
                </li>
                <li className="  cursor-pointer text-[#7E7E7E] font-helvetica font-normal text-[12px]">
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
