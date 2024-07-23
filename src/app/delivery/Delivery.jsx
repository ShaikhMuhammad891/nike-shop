"use client";
import {
  DeliverLogo,
  DeliveryLock,
  DeliverySMS,
  NikeLogo,
  PinLocation,
} from "@/icons/logos";
import React, { useState } from "react";
import { shop } from "../../../utils/shop";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { Countries, customStyles } from "../../../utils/countries";
import Button from "../components/common/Button";

const Delivery = () => {
  const [value, setValue] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    address3: "",
    postalCode: "",
    locality: "",
    state: null,
    country: "USA",
    saveAddress: false,
    contactEmail: "",
    contactPhone: "",
    pan: "",
    consent: false,
  });

  const changeHandler = (selectedOption) => {
    setFormData({ ...formData, state: selectedOption });
  };

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(!isClicked);
    setShowModal(true);
    setFormData({
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      address3: "",
      postalCode: "",
      locality: "",
      state: null,
      country: "USA",
      saveAddress: false,
      contactEmail: "",
      contactPhone: "",
      pan: "",
      consent: false,
    });
  };

  return (
    <div>
      <div className="max-w-[1411px] mx-auto flex py-[26px] px-[48px] justify-between">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <NikeLogo />
        </div>
        <div className="flex gap-[44px]">
          <p className="text-[14px] leading-6">000 800 100 9538</p>
          <DeliverySMS />
          <DeliveryLock />
        </div>
      </div>
      <div className="max-w-[880px] mx-auto w-full mb-[100px]">
        <div className="flex gap-[120px] mt-[90px]">
          <div className="max-w-[437.6px]">
            <p className="text-[21px] leading-6 font-medium font-inter">
              How would you like to get your order?
            </p>
            <p className="mt-[11px] text-[15px] leading-6 text-[#757575] font-inter">
              Customs regulation for India require a copy of the recipient's
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.
              <span className="underline">Learn More</span>
            </p>

            <div className="mt-[24px] flex py-[30px] gap-[24px] pl-[21px] border border-[#CCCCCC] rounded-[12px] w-full items-center">
              <DeliverLogo />
              <p>Deliver It</p>
            </div>
            <p className="mt-[45px] font-inter">Enter your name and address:</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="py-[16px] pl-[16px] mt-[32px] border w-full font-inter border-[#CCCCCC] rounded-[4px]"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="py-[16px] pl-[16px] mt-[32px] border w-full font-inter border-[#CCCCCC] rounded-[4px]"
                required
              />
              <input
                type="text"
                name="address1"
                placeholder="Address Line 1"
                value={formData.address1}
                onChange={handleChange}
                className="py-[16px] pl-[16px] mt-[32px] border w-full font-inter border-[#CCCCCC] rounded-[4px]"
                required
              />
              <p className="text-[11px] ml-[16px] leading-6 text-[#757575] font-inter">
                A carrier might contact you to confirm delivery.
              </p>
              <input
                type="text"
                name="address2"
                placeholder="Address Line 2"
                value={formData.address2}
                onChange={handleChange}
                className="py-[16px] pl-[16px] mt-[8px] border w-full font-inter border-[#CCCCCC] rounded-[4px]"
              />
              <input
                type="text"
                name="address3"
                placeholder="Address Line 3"
                value={formData.address3}
                onChange={handleChange}
                className="py-[16px] pl-[16px] mt-[32px] border w-full font-inter border-[#CCCCCC] rounded-[4px]"
              />
              <div className="flex justify-between gap-[17px]">
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="py-[16px] pl-[16px] mt-[32px] border w-full font-inter border-[#CCCCCC] rounded-[4px]"
                  required
                />
                <input
                  type="text"
                  name="locality"
                  placeholder="Locality"
                  value={formData.locality}
                  onChange={handleChange}
                  className="py-[16px] pl-[16px] mt-[32px] border w-full font-inter border-[#CCCCCC] rounded-[4px]"
                  required
                />
              </div>
              <div className="flex justify-between items-center gap-[17px]">
                <Select
                  options={Countries}
                  value={formData.state}
                  onChange={changeHandler}
                  styles={customStyles}
                  placeholder="State / Territory"
                  className="mt-[18px] w-full"
                  required
                />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  className="py-[16px] pl-[16px] mt-[32px] border w-full font-inter border-[#CCCCCC] rounded-[4px]"
                  readOnly
                />
              </div>
              <div className="mt-[32px] flex gap-[14px] items-center">
                <input
                  type="checkbox"
                  name="saveAddress"
                  checked={formData.saveAddress}
                  onChange={handleChange}
                />
                <p className="text-[15px] leading-6 font-inter">
                  Save the address to my profile
                </p>
              </div>
              <p className="mt-[50px] text-[21px] font-inter leading-6 font-medium">
                What's your contact information?
              </p>
              <input
                type="email"
                name="contactEmail"
                placeholder="Email"
                value={formData.contactEmail}
                onChange={handleChange}
                className="py-[16px] pl-[16px] mt-[32px] font-inter border w-full border-[#CCCCCC] rounded-[4px]"
                required
              />
              <p className="text-[11px] ml-[16px] font-inter leading-6 text-[#757575]">
                A confirmation email will be sent after checkout.
              </p>
              <input
                type="number"
                name="contactPhone"
                placeholder="Phone Number"
                value={formData.contactPhone}
                onChange={handleChange}
                className="py-[16px] pl-[16px] mt-[8px] border font-inter w-full border-[#CCCCCC] rounded-[4px]"
                required
              />
              <p className="text-[11px] ml-[16px] leading-6 font-inter text-[#757575]">
                A carrier might contact you to confirm delivery.{" "}
              </p>
              <p className="mt-[50px] text-[21px] leading-6 font-inter font-medium">
                What's your PAN?
              </p>
              <input
                type="text"
                name="pan"
                placeholder="PAN"
                value={formData.pan}
                onChange={handleChange}
                className="py-[16px] pl-[16px] mt-[32px] border font-inter w-full border-[#CCCCCC] rounded-[4px]"
                required
              />
              <p className="text-[12px] ml-[16px] leading-6 font-inter text-[#757575]">
                Enter your PAN to enable payment with UPI, Net Banking or local
                card methods
              </p>
              <div className="mt-[8px] flex gap-[14px] font-inter items-center">
                <input
                  type="checkbox"
                  name="saveAddress"
                  checked={formData.saveAddress}
                  onChange={handleChange}
                />
                <p className="text-[11px] leading-6 font-inter text-[#757575]">
                  Save the address to my profile
                </p>
              </div>
              <div className="mt-[67px] items-start font-inter flex gap-[14px]">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-[8px]"
                  required
                />
                <p className="text-[11px] leading-6 font-inter text-[#757575]">
                  I have read and consent to eShopWorld processing my
                  information in accordance with the Privacy Statement and
                  Cookie Policy. eShopWorld is a trusted Nike partner.
                </p>
              </div>

              <button
                type="submit"
                className={`${
                  isClicked ? "bg-black text-white" : ""
                } bg-[#F5F5F5] font-inter rounded-[30px] text-[#757575] w-full py-[16px] mt-[70px]`}
              >
                Continue
              </button>
              <div className="mt-[28px]">
                {status.map((data, index) => (
                  <div key={index}>
                    <hr />
                    <p
                      className={`mt-[21px] mb-[32px] font-inter ${
                        index > 0 && "text-[#757575]"
                      }`}
                    >
                      {data}
                    </p>
                    {index < 3 && <hr />}{" "}
                  </div>
                ))}
              </div>
            </form>
          </div>

          <div className="max-w-[320px] w-full">
            <p className="text-[21px] leading-[33px] font-inter">Summary</p>
            <div className="flex justify-between w-full mt-[25px]">
              <p className="text-[15px] leading-7 font-inter text-[#8D8D8D]">
                Subtotal
              </p>
              <p className="text-[15px] leading-7 font-inter text-[#8D8D8D]">
                USD: $ 20
              </p>
            </div>
            <div className="mt-[8px] flex justify-between w-full pb-[20px]">
              <p className="text-[15px] leading-7 font-inter text-[#8D8D8D]">
                Estimated Delivery & Handling
              </p>
              <p className="text-[15px] leading-7 font-inter text-[#8D8D8D]">
                Free
              </p>
            </div>
            <hr />

            <div className="my-[20px] flex justify-between w-full ">
              <p className="text-[14px] leading-7 font-inter">Total</p>
              <p className="text-[14px] leading-7 font-inter font-medium">
                USD : $ 20
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto bg-black py-[12px]">
        <div className="max-w-[1411px] w-full mx-auto flex justify-between items-center px-[20px]">
          {/* left */}
          <div className="flex gap-[16.25px] items-center">
            <div className="flex gap-[8px] items-center">
              <PinLocation />
              <p className="text-[9px] text-[#ffffff] leading-6 font-inter">
                India
              </p>
            </div>
            <div className="flex items-center gap-[16.25px]">
              <p className="text-[#8D8D8D] leading-6 font-inter text-[9px] ">
                © 2023 NIKE, Inc. All Rights Reserved
              </p>
              <ul className="flex gap-[18.72px]">
                <li className="text-[9px] text-[#8d8d8d] leading-6 font-inter">
                  Terms of Use
                </li>
                <li className="text-[9px] text-[#8d8d8d] leading-6 font-inter">
                  Terms of Sale
                </li>
                <li className="text-[9px] text-[#8d8d8d] leading-6 font-inter">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>

          {/* right */}
          <div className="flex items-center gap-[8px]">
            {bankLogos.map((logo, index) => (
              <img src={logo.img} alt="" key={index} />
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed  inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-[400px] max-h-[350px] w-full h-full flex flex-col gap-[25px] items-center justify-center">
            <p className=" font-inter font-medium text-[20px] text-center">
              Your delivery information is stored, your package will arrive soon!
            </p>
            <Button
              title="close"
              bgcolor="black"
              color="white"
              onClick={() => {
                setShowModal(false);
              }}
              className=""
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delivery;

const status = ["Delivery", "Shipping", "Billing", "Payment"];

const bankLogos = [
  {
    img: "/images/visa.png",
  },
  {
    img: "/images/visa-e.png",
  },
  {
    img: "/images/master-card.png",
  },
  {
    img: "/images/mastero.png",
  },
  {
    img: "/images/diner.png",
  },
  {
    img: "/images/discover.png",
  },
  {
    img: "/images/bank.png",
  },
  {
    img: "/images/paytm.png",
  },
  {
    img: "/images/upi.png",
  },
  {
    img: "/images/jcb.png",
  },
];
