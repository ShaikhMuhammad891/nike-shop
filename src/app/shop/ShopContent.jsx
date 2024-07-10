"use client";
import React, { useEffect, useState } from "react";
import { ArrowDrop, FilterChange } from "@/icons/logos";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { clothingItems, shop } from "../../../utils/shop";
import Button from "../components/common/Button";
import { useRouter } from "next/navigation";
import { useShop } from "../../../context/ContextData";

const ShopContent = ({ category }) => {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [checked, setChecked] = useState([]);
  const [isDropdown, setIsDropdown] = useState({
    gender: true,
    kids: true,
    price: true,
  });
  const router = useRouter();
  //checked
  const handleChecked = (gender) => {
    setChecked((prev) =>
      prev.includes(gender)
        ? prev.filter((g) => g !== gender)
        : [...prev, gender]
    );
  };

  useEffect(() => {
    if (category) {
      const categoryFiltered = shop.filter(
        (item) => item.gender == category[0].toUpperCase() + category.slice(1)
      );
      setCategoryFilter(categoryFiltered);
    } else if (checked.length !== 0) {
      const categoryFiltered = shop.filter((item) =>
        checked.includes(item.gender)
      );
      setCategoryFilter(categoryFiltered);
    } else if (checked.length === 0) {
      setCategoryFilter(shop);
    } else {
      setCategoryFilter(shop);
    }
  }, [category, checked, shop]);

  //dropdown
  const handleDropdown = (value) => {
    setIsDropdown({ ...isDropdown, [value]: !isDropdown[value] });
  };

  //puah to another page
  const handleItemClick = (data) => {
    router.push(`/selectedItem/${data.id}`);
  };
  return (
    <div className="mt-[78px] relative">
      <div className="flex justify-between items-center mx-[48px] max-w-[1344px] w-full">
        <div className=" flex items-center  max-w-[600px] w-full gap-[210px]">
          <p className="text-[24px] font-helvetica font-medium leading-[31.2px] text-[#111111]">
            New (
            {categoryFilter.length < 10
              ? "0" + categoryFilter.length
              : categoryFilter.length}
            )
          </p>
          {category ? (
            <p className=" text-[24px] font-helvetica font-medium leading-[31.2px]">
              Only For {category}
            </p>
          ) : (
            <p className=" text-[24px] font-helvetica font-medium leading-[31.2px]">
              Featured
            </p>
          )}
        </div>

        <div className="flex items-center gap-[32px]">
          <div className="flex items-center gap-[7.91px]">
            <p className="font-helvetica text-[16px] leading-[28px]">
              Hide Filters
            </p>
            <div>
              <FilterChange />
            </div>
          </div>
          <div className="flex items-center gap-[7.8px]">
            <p className="font-helvetica text-[16px] leading-[28px]">Sort By</p>
            <div className="">
              <ArrowDrop />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[30px] flex gap-[48px] max-w-[1344px] mx-auto   ">
        <div className=" max-w-[260px] w-full">
          <ul className="space-y-[14.9px] max-h-[400px] overflow-y-auto pb-[50px] mb-[52.59px] ">
            {clothingItems.map((items, index) => (
              <li
                key={index}
                className="font-helvetica font-medium text-[15px] leading-[17px] max-w-[161.17px]"
              >
                {items}
              </li>
            ))}
          </ul>
          <hr />
          {/* Gender */}
          <div className={`pb-[24px] ${category && "hidden"}`}>
            <div className="flex justify-between mt-[15px] items-center">
              <p className="font-helvetica font-medium text-[16px]">Gender</p>
              <div
                className="cursor-pointer"
                onClick={() => handleDropdown("gender")}
              >
                {isDropdown.gender ? (
                  <RiArrowDropUpLine size={40} />
                ) : (
                  <RiArrowDropDownLine size={40} />
                )}
              </div>
            </div>
            {isDropdown.gender && (
              <div className="mt-[10px]">
                <div>
                  <input
                    type="checkbox"
                    name="men"
                    id="men"
                    className="mr-2 w-[20px] h-[20px] appearance-none border-[#CCCCCC] border-[1px] rounded-[4px]"
                    onChange={() => handleChecked("Men")}
                    checked={checked.includes("Men")}
                  />
                  <label htmlFor="men">Men</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="women"
                    id="women"
                    className="mr-2 w-[20px] h-[20px] appearance-none border-[#CCCCCC] border-[1px] rounded-[4px]"
                    onChange={() => handleChecked("Women")}
                    checked={checked.includes("Women")}
                  />
                  <label htmlFor="women">Women</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="kid"
                    id="kid"
                    className="mr-2 w-[20px] h-[20px] appearance-none border-[#CCCCCC] border-[1px] rounded-[4px]"
                    onChange={() => handleChecked("Kid")}
                    checked={checked.includes("Kid")}
                  />
                  <label htmlFor="kid">Kid</label>
                </div>
              </div>
            )}
          </div>
          <hr />
          {/* Kids */}
          <div className="pb-[24px]">
            <div className="flex justify-between mt-[15px] items-center">
              <p className="font-helvetica font-medium text-[16px]">Kids</p>
              <div
                className="cursor-pointer"
                onClick={() => handleDropdown("kids")}
              >
                {isDropdown.kids ? (
                  <RiArrowDropUpLine size={40} />
                ) : (
                  <RiArrowDropDownLine size={40} />
                )}
              </div>
            </div>
            {isDropdown.kids && (
              <div className="mt-[10px]">
                <div>
                  <input
                    type="checkbox"
                    name="boys"
                    id="boys"
                    className="mr-2  w-[20px] h-[20px] appearance-none border-[#CCCCCC] border-[1px] rounded-[4px]"
                    onChange={() => handleChecked("boy")}
                    checked={checked.includes("boy")}
                  />
                  <label htmlFor="boys">Boys</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="girls"
                    id="girls"
                    className="mr-2  w-[20px] h-[20px] appearance-none border-[#CCCCCC] border-[1px] rounded-[4px]"
                    onChange={() => handleChecked("girl")}
                    checked={checked.includes("girl")}
                  />
                  <label htmlFor="girls">Girls</label>
                </div>
              </div>
            )}
          </div>
          <hr />
          {/* Price */}
          <div className="pb-[24px]">
            <div className="flex justify-between mt-[15px] items-center">
              <p className="font-helvetica font-medium text-[16px]">
                Shop By Price
              </p>
              <div
                className="cursor-pointer"
                onClick={() => handleDropdown("price")}
              >
                {isDropdown.price ? (
                  <RiArrowDropUpLine size={40} />
                ) : (
                  <RiArrowDropDownLine size={40} />
                )}
              </div>
            </div>
            {isDropdown.price && (
              <div className="mt-[10px]">
                <div>
                  <input
                    type="checkbox"
                    name="under-20"
                    id="under-20"
                    className="mr-2  w-[20px] h-[20px] appearance-none border-[#CCCCCC] border-[1px] rounded-[4px]"
                  />
                  <label htmlFor="under-20">Under $20</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="above-20"
                    id="above-20"
                    className="mr-2  w-[20px] h-[20px] appearance-none border-[#CCCCCC] border-[1px] rounded-[4px]"
                  />
                  <label htmlFor="above-20">$21 - Above</label>
                </div>
              </div>
            )}
          </div>
          <hr />
        </div>
        <div>
          {/* filter item based on category */}
          <div
            className={`grid grid-cols-3 max-w-[1092px] gap-x-[16px] gap-y-[18px] mb-[140px]`}
          >
            {categoryFilter.map((data, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(data)}
                className="cursor-pointer max-w-[348px] w-full pb-[42px]"
              >
                <img src={data.img} alt="" className="w-[348px] h-[348px]" />
                <p className="text-[#9E3500] font-helvetica font-medium text-[15px] leading-[28px] mt-[9px]">
                  {data.material}
                </p>
                <p className="font-helvetica font-medium text-[15px] leading-[24px] text-[#111111]">
                  {data.title}
                </p>
                <p className="text-[#757575] font-helvetica font-normal text-[15px] leading-[24px]">
                  {data.genderWear}
                </p>
                <p className="text-[#757575] font-helvetica font-normal text-[15px] leading-[24px] mt-[5px]">
                  {data.color} Colour
                </p>
                <p className="font-helvetica font-medium text-[15px] leading-[28px] text-[#111111] mt-[7px]">
                  ${data.price}
                </p>
              </div>
            ))}
          </div>

          <hr />
          <div className="mt-[62px]">
            <p className="text-[19px] font-helvetica font-medium leading-[24px]">
              Related Categories
            </p>
            <div className="flex gap-x-[8px] gap-y-[10px] mt-[24px] mb-[70px] flex-wrap">
              <Button
                title="Best Selling Products"
                border="1px solid"
                borderColor="#CCCCCC"
                bgcolor="transparent"
                color="#111111"
              />
              <Button
                title="Best Shoes"
                border="1px solid"
                borderColor="#CCCCCC"
                bgcolor="transparent"
                color="#111111"
              />
              <Button
                title="New Basketball Shoes"
                border="1px solid"
                borderColor="#CCCCCC"
                bgcolor="transparent"
                color="#111111"
              />
              <Button
                title="New Football Shoes"
                border="1px solid"
                borderColor="#CCCCCC"
                bgcolor="transparent"
                color="#111111"
              />
              <Button
                title="New Men's Shoes"
                border="1px solid"
                borderColor="#CCCCCC"
                bgcolor="transparent"
                color="#111111"
              />
              <Button
                title="New Running Shoes"
                border="1px solid"
                borderColor="#CCCCCC"
                bgcolor="transparent"
                color="#111111"
              />
              <Button
                title="Best Men's Shoes"
                border="1px solid"
                borderColor="#CCCCCC"
                bgcolor="transparent"
                color="#111111"
              />
              <Button
                title="New Jordan Shoes"
                border="1px solid"
                borderColor="#CCCCCC"
                bgcolor="transparent"
                color="#111111"
              />
              <Button
                title="Best Women's Shoes"
                border="1px solid"
                borderColor="#CCCCCC"
                bgcolor="transparent"
                color="#111111"
              />
              <Button
                title="Best Training & Gym"
                border="1px solid"
                borderColor="#CCCCCC"
                bgcolor="transparent"
                color="#111111"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopContent;
