"use client";
import { DeleteLogo } from "@/icons/logos";
import React, { useEffect, useState } from "react";
const Fav = () => {
  const [fav, setFav] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fav"));
    setFav(data);
  }, []);

  const handleDelete = (id) => {
    const newData = JSON.parse(localStorage.getItem("fav"));
    const index = newData.findIndex((item) => item.id === id);
    if (index !== -1) {
      newData.splice(index, 1);
    }
    localStorage.setItem("fav", JSON.stringify(newData));
    setFav(newData);
  };
  return (
    <div className=" max-w-[1100px] mx-auto my-[40px]">
      {/* Favourites */}
      <div>
        <p className=" mt-[15px] leading-[33px] text-[22px] font-medium font-inter">
          Favourites
        </p>
        {fav.length === 0 ? (
          <p>There are no items saved to your favourites</p>
        ) : (
          fav.map((favData, index) => (
            <div key={index} className=" flex w-full gap-[30px] mt-[25px]">
              <div className=" max-w-[150px]">
                <img src={favData.img} alt="" />
              </div>
              <div className=" max-w-[537px] flex justify-between w-full">
                <div>
                  <p className=" text-[15px] leading-7 font-inter font-medium">
                    {favData.title}
                  </p>
                  <p className=" text-[15px] leading-7 font-inter text-[#757575] ">
                    {favData.genderWear}
                  </p>
                  <p className=" text-[15px] leading-7 font-inter text-[#757575] ">
                    Green {favData.color}
                  </p>
                  <p className=" text-[15px] leading-7 font-inter text-[#757575] ">
                    Quantity {favData.id}
                  </p>
                  <div className=" flex gap-[16px] mt-[28px]">
                    <div onClick={() => handleDelete(favData.id)}>
                      <DeleteLogo />
                    </div>
                  </div>
                </div>
                <div>
                  <p className=" text-[15px] leading-7">
                    USD: ${favData.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Fav;
