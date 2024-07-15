"use client";
import { DeleteLogo } from "@/icons/logos";
import React, { useEffect, useState } from "react";
import { useShop } from "../../../context/ContextData";
const Fav = () => {
  const [fav, setFav] = useState([]);
  const { setFavCount } = useShop();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fav")) || [];
    setFav(data);

    // Add event listener for custom event
    const handleUpdateFav = (event) => {
      setFav(event.detail);
    };
    window.addEventListener("updateFav", handleUpdateFav);

    return () => {
      window.removeEventListener("updateFav", handleUpdateFav);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("favCount", JSON.stringify(fav.length));
  }, [fav]);

  useEffect(() => {
    const countFav = JSON.parse(localStorage.getItem("favCount")) || 0;
    setFavCount(countFav);
  }, [fav]);

  const handleDelete = (id) => {
    const newFav = JSON.parse(localStorage.getItem("fav"));
    const deletedFav = newFav.find((item) => item.id === id);
    const index = newFav.indexOf(deletedFav);
    if (index !== -1) {
      newFav.splice(index, 1);
    }

    localStorage.setItem("fav", JSON.stringify(newFav));
    setFav(newFav);
  };
  return (
    <div className=" max-w-[1100px] mx-auto my-[40px]">
      {/* Favourites */}
      <div>
        <p className=" mt-[15px] leading-[33px] text-[22px] font-medium font-inter">
          Favourites
        </p>
        {fav.length === 0 ? (
          <p className=" font-inter text-[15px] leading-6">There are no items saved to your favourites</p>
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
