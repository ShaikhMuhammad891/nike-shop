"use client";
import { DeleteLogo, Heart } from "@/icons/logos";
import React, { useEffect, useState } from "react";
import { useShop } from "../../../context/ContextData";

const Fav = () => {
  const [fav, setFav] = useState([]);
  const { favCount, setFavCount } = useShop();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fav")) || [];
    setFav(data);

    const handleUpdateFav = (event) => {
      setFav(event.detail);
    };
    window.addEventListener("updateFav", handleUpdateFav);

    return () => {
      window.removeEventListener("updateFav", handleUpdateFav);
    };
  }, []);

  useEffect(() => {
    setFavCount(fav.length);
  }, [fav, setFavCount]);

  const handleDelete = (id) => {
    const newFav = JSON.parse(localStorage.getItem("fav"));
    const index = newFav.findIndex((item) => item.id === id);
    if (index !== -1) {
      newFav.splice(index, 1);
    }
    localStorage.setItem("fav", JSON.stringify(newFav));
    setFav(newFav);
  };

  return (
    <div className="max-w-[1100px] mx-auto my-[40px]">
      <div>
        <p className="mt-[15px] leading-[33px] text-[22px] font-medium font-inter">
          Favourites
        </p>
        {fav.length === 0 ? (
          <p className="font-inter text-[15px] leading-6">
            There are no items saved to your favourites
          </p>
        ) : (
          fav.map((favData, index) => (
            <div key={index} className="flex w-full gap-[30px] mt-[25px]">
              <div className="max-w-[150px]">
                <img src={favData.img} alt="" />
              </div>
              <div className="max-w-[537px] flex justify-between w-full">
                <div>
                  <p className="text-[15px] leading-7 font-inter font-medium">
                    {favData.title}
                  </p>
                  <p className="text-[15px] leading-7 font-inter text-[#757575]">
                    {favData.genderWear}
                  </p>
                  <p className="text-[15px] leading-7 font-inter text-[#757575]">
                    Green {favData.color}
                  </p>
                  <div className=" flex items-center gap-[49px]">
                    <p className="text-[15px] leading-7 font-inter text-[#757575]">
                      Size {favData.selectedSize}
                    </p>{" "}
                    <p className="text-[15px] leading-7 font-inter text-[#757575]">
                      Quantity {favData.id}
                    </p>
                  </div>
                  <div className="flex gap-[16px] mt-[28px]">
                    <div
                      className=" cursor-pointer hover:scale-110 duration-150"
                    >
                      <Heart fill = "black" stroke = "white" />
                    </div>
                    <div
                      onClick={() => handleDelete(favData.id)}
                      className=" cursor-pointer hover:scale-110 duration-150"
                    >
                      <DeleteLogo />
                    </div>  
                  </div>
                </div>
                <div>
                  <p className="text-[15px] leading-7">USD: ${favData.price}</p>
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
