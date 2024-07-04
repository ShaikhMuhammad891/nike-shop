"use client";
import {
  DeliverLogo,
  DeliveryLock,
  DeliverySMS,
  NikeLogo,
} from "@/icons/logos";
import React from "react";
import { shop } from "../../../utils/shop";
import { useRouter } from "next/navigation";

const Delivery = () => {
  const router = useRouter();
  return (
    <div>
      <div className=" max-w-[1411px] mx-auto flex py-[26px] px-[48px] justify-between">
        <div onClick={() => router.push("/")} className=" cursor-pointer">
          <NikeLogo />
        </div>
        <div className=" flex gap-[44px]">
          <p className=" text-[14px] leading-6">000 800 100 9538</p>
          <DeliverySMS />
          <DeliveryLock />
        </div>
      </div>
      <div className=" max-w-[880px] mx-auto w-full mb-[100px]">
        <div className=" flex gap-[90px] mt-[90px]">
          <div className=" max-w-[437.6px]">
            <p className=" text-[21px] leading-6 font-medium">
              How would you like to get your order?
            </p>
            <p className=" mt-[11px] text-[15px] leading-6 text-[#757575]">
              Customs regulation for India require a copy of the recipient's
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.
              Learn More
            </p>

            <div className=" mt-[24px] flex py-[30px] gap-[24px] pl-[21px] border border-[#CCCCCC] rounded-[12px] w-full items-center">
              <DeliverLogo />
              <p>Deliver It</p>
            </div>
            <p className=" mt-[45px] ">Enter your name and address:</p>
            <form action="">
              <input
                type="text"
                placeholder="First Name"
                className=" py-[16px] pl-[16px] mt-[32px] border w-full border-[#CCCCCC] rounded-[4px]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className=" py-[16px] pl-[16px] mt-[32px] border w-full border-[#CCCCCC] rounded-[4px]"
              />
              <input
                type="text"
                placeholder="Address Line 1"
                className=" py-[16px] pl-[16px] mt-[32px] border w-full border-[#CCCCCC] rounded-[4px]"
              />
              <p className=" text-[11px] ml-[16px] leading-6 text-[#757575]">
                A carrier might contact you to confirm delivery.
              </p>
              <input
                type="text"
                placeholder="Address Line 2"
                className=" py-[16px] pl-[16px] mt-[8px] border w-full border-[#CCCCCC] rounded-[4px]"
              />
              <input
                type="text"
                placeholder="Address Line 3"
                className=" py-[16px] pl-[16px] mt-[32px] border w-full border-[#CCCCCC] rounded-[4px]"
              />
              <div className=" flex justify-between gap-[17px]">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className=" py-[16px] pl-[16px] mt-[32px] border w-full border-[#CCCCCC] rounded-[4px]"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className=" py-[16px] pl-[16px] mt-[32px] border w-full border-[#CCCCCC] rounded-[4px]"
                />
              </div>
              <div className=" mt-[32px] flex gap-[14px] items-center">
                <input type="checkbox" />
                <p className=" text-[15px] leading-6">
                  Save the address to my profile
                </p>
              </div>
              <div className=" mt-[32px] flex gap-[14px] items-center">
                <input type="checkbox" />
                <p className=" text-[15px] leading-6">
                  Save the address to my profile
                </p>
              </div>
              <p className=" mt-[50px] text-[21px] leading-6 font-medium">
                What's your contact information?
              </p>
              <input
                type="email"
                placeholder="Email"
                className=" py-[16px] pl-[16px] mt-[32px] border w-full border-[#CCCCCC] rounded-[4px]"
              />
              <p className=" text-[11px] ml-[16px] leading-6 text-[#757575]">
                A confirmation email will be sent after checkout.
              </p>
              <input
                type="number"
                placeholder="Phone Number"
                className=" py-[16px] pl-[16px] mt-[8px] border w-full border-[#CCCCCC] rounded-[4px]"
              />
              <p className=" text-[11px] ml-[16px] leading-6 text-[#757575]">
                A carrier might contact you to confirm delivery.{" "}
              </p>
              <p className=" mt-[50px] text-[21px] leading-6 font-medium">
                What's your PAN?
              </p>
              <input
                type="text"
                placeholder="PAN"
                className=" py-[16px] pl-[16px] mt-[32px] border w-full border-[#CCCCCC] rounded-[4px]"
              />
              <p className=" text-[12px] ml-[16px] leading-6 text-[#757575]">
                Enter your PAN to enable payment with UPI, Net Banking or local
                card methods
              </p>
              <div className=" mt-[8px] flex gap-[14px] items-center">
                <input type="checkbox" />
                <p className=" text-[11px] leading-6 text-[#757575]">
                  Save the address to my profile
                </p>
              </div>
              <div className=" mt-[67px] items-start flex gap-[14px]">
                <input type="checkbox" className=" mt-[8px]" />
                <p className=" text-[11px] leading-6 text-[#757575]">
                  I have read and consent to eShopWorld processing my
                  information in accordance with the Privacy Statement and
                  Cookie Policy. eShopWorld is a trusted Nike partner.
                </p>
              </div>

              <button className=" bg-[#F5F5F5] rounded-[30px] text-[#757575] w-full py-[16px] mt-[70px]">
                Continue
              </button>
              <div className=" mt-[28px]">
                {status.map((data, index) => (
                  <div key={index}>
                    <hr />
                    <p
                      className={`mt-[21px] mb-[32px] ${
                        index > 0 && "text-[#757575]"
                      }`}
                    >
                      {data}
                    </p>
                    <hr />
                  </div>
                ))}
              </div>
            </form>
          </div>

          <div>
            <p className=" text-[21px] leading-[33px]">Summary</p>
            <div className=" flex justify-between w-full mt-[25px]">
              <p className=" text-[15px] leading-7">Subtotal</p>
              <p className=" text-[15px] leading-7">ÙSD: $ 20</p>
            </div>
            <div className=" mt-[8px] flex justify-between w-full pb-[20px]">
              <p className=" text-[15px] leading-7">
                Estimated Delivery & Handling
              </p>
              <p className=" text-[15px] leading-7">Free</p>
            </div>
            <hr />

            <div className=" my-[20px] flex justify-between w-full ">
              <p className=" text-[14px] leading-7">Total</p>
              <p className=" text-[14px] leading-7 font-medium">Subtotal</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

const status = ["Delivery", "Shipping", "Billing", "Payment"];
