"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "../components/common/Button";

const ManageOrder = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderNumber && email) {
      setIsClicked(!isClicked);
      setShowModal(true); // Show the modal on submit
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="mt-[131px] mb-[150px]">
      <form onSubmit={handleSubmit}>
        <p className="text-[19px] leading-6 font-medium text-center">
          View or Manage Your Order
        </p>
        <p className="mt-[11px] text-[14px] leading-5 text-center">
          To check the status of your order, or to start a return, please enter
          your order number and email address.
        </p>

        <div className="mt-[34px] border border-[#757575] py-[13px] pl-[16px] rounded-[8px]">
          <input
            type="text"
            placeholder="Order Number*"
            className="outline-none text-[16px] leading-6 text-[#757575]"
            required
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
        </div>
        <div className="mt-[28px] border border-[#757575] py-[13px] pl-[16px] rounded-[8px]">
          <input
            type="email"
            placeholder="Email address*"
            className="outline-none text-[16px] leading-6 text-[#757575]"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`${
            isClicked ? "bg-black text-white" : ""
          } w-full bg-[#E5E5E5] text-[#757575] text-[15px] font-medium leading-6 py-[21.5px] rounded-[30px] mt-[44px]`}
        >
          Submit
        </button>

        <div className="mt-[26px] flex justify-center items-center">
          <p className="text-[14px] leading-5">Already a member?</p>
          <p
            className="text-[15px] font-medium leading-6 cursor-pointer ml-1"
            onClick={() => router.push("/signin")}
          >
            Sign in
          </p>
        </div>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed  inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-[400px] max-h-[350px] w-full h-full flex flex-col gap-[25px] items-center justify-center">
            <p className=" font-inter font-medium text-[20px]">Your order will arrive soon!</p>
            <Button
            title = "close"
            bgcolor = "black"
            color= "white"
              onClick={() => {
                setShowModal(false);
                setEmail("");
                setOrderNumber("");
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

export default ManageOrder;
