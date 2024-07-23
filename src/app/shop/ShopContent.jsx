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
  const [hideFilter, setHideFilter] = useState(false);
  const [checked, setChecked] = useState([]);
  const [isDropdown, setIsDropdown] = useState({
    gender: true,
    kids: true,
    price: true,
    sort: false,
  });
  const [priceFilter, setPriceFilter] = useState([]);
  const [sortOption, setSortOption] = useState(null);

  const router = useRouter();

  const sortOnClick = (title) => {
    setSortOption(title);
    window.scrollTo(0, 0)

  };

  // Handle checked
  const handleChecked = (value, type) => {
    setChecked((prev) => {
      if (type === "gender" || type === "kids") {
        return prev.includes(value)
          ? prev.filter((g) => g !== value)
          : [...prev, value];
      }
    });
  };
  console.log(checked, "checkbox");

  // Handle price filter
  const handlePriceFilter = (price) => {
    setPriceFilter((prev) =>
      prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
    );
  };

  useEffect(() => {
    let categoryFiltered = shop;

    if (category) {
      categoryFiltered = categoryFiltered.filter(
        (item) => item.gender === category
      );
    }

    if (checked.length !== 0) {
      categoryFiltered = categoryFiltered.filter(
        (item) => checked.includes(item.gender) || checked.includes(item.kid)
      );
    }

    if (priceFilter.length !== 0) {
      categoryFiltered = categoryFiltered.filter((item) => {
        return priceFilter.some((price) => {
          if (price === "under-20") return item.price < 20;
          if (price === "above-20") return item.price >= 20;
        });
      });
    }

    // Sort items based on sort option
    if (sortOption === "high-to-low") {
      categoryFiltered = categoryFiltered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "low-to-high") {
      categoryFiltered = categoryFiltered.sort((a, b) => a.price - b.price);
    } 

    setCategoryFilter(categoryFiltered);
  }, [category, checked, priceFilter, sortOption, isDropdown]);

  useEffect(() => {
    if (category) {
      setChecked([category]);
    } else {
      setChecked([]);
    }
  }, [category]);

  // Handle dropdown
  const handleDropdown = (value) => {
    setIsDropdown({ ...isDropdown, [value]: !isDropdown[value] });
  };

  const handleSortOption = (option) => {
    setSortOption(option);
  };
  // Push to another page
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

        <div className={`flex items-center gap-[32px] ${category && "hidden"}`}>
          <div
            className="flex items-center gap-[7.91px] cursor-pointer"
            onClick={() => setHideFilter(!hideFilter)}
          >
            <p className="font-helvetica text-[16px] leading-[28px]">
              Hide Filters
            </p>
            <div>
              <FilterChange />
            </div>
          </div>
          {/* <div className="flex items-center gap-[7.8px]">
            <p className="font-helvetica text-[16px] leading-[28px]">Sort By</p>
            <div className="" onClick={() => handleDropdown("sort")}>
              {isDropdown.sort ? (
                <div className=" rotate-180">
                  <ArrowDrop />
                </div>
              ) : (
                <ArrowDrop />
              )}
            </div>
          </div> */}
        </div>
      </div>

      {/* sort */}
      {/* {isDropdown.sort && (
        <ul className=" absolute right-11 bg-white py-2 px-4 space-y-3 translate-y-4 transition-all duration-300">
          <li
            className={`font-inter font-medium text-[16px] leading-7 cursor-pointer hover:scale-105 duration-300 ${
              sortOption === "high-to-low" && " border-b border-black"
            } `}
            onClick={() => {
              handleSortOption("high-to-low");
              handleDropdown("sort");
            }}
          >
            High-To-Low
          </li>
          <li
            className={`font-inter font-medium text-[16px] leading-7 cursor-pointer hover:scale-105 duration-300 ${
              sortOption === "low-to-high" && " border-b border-black"
            }`}
            onClick={() => {
              handleSortOption("low-to-high");
              handleDropdown("sort");
            }}
          >
            Low-To-High
          </li>
        </ul>
      )} */}

      <div className="mt-[30px] flex gap-[48px] max-w-[1344px] mx-auto   ">
        <div
          className={`max-w-[260px] w-full transition ease-in duration-500   ${
            hideFilter && " -translate-x-[420px] transition duration-300"
          }`}
        >
          <ul className="space-y-[14.9px] max-h-[400px] overflow-y-auto pb-[50px] mb-[52.59px] ">
            {clothingItems.map((items, index) => (
              <li
                key={index}
                className="font-helvetica font-medium text-[15px] leading-[17px] max-w-[161.17px] cursor-pointer hover:scale-105 duration-100 hover:translate-x-2"
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
                    onChange={() => handleChecked("Men", "gender")}
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
                    onChange={() => handleChecked("Women", "gender")}
                    checked={checked.includes("Women")}
                  />
                  <label htmlFor="women">Women</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="kid"
                    id="kid"
                    className={`mr-2 w-[20px] h-[20px] appearance-none border-[#CCCCCC] border-[1px] rounded-[4px]}`}
                    onChange={() => handleChecked("Kid", "gender")}
                    checked={checked.includes("Kid")}
                  />
                  <label htmlFor="kid">Kid</label>
                </div>
              </div>
            )}
          </div>
          <hr />
          {/* Kids */}
          <div className={`pb-[24px] ${category && "hidden"}`}>
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
                    onChange={() => handleChecked("boy", "kids")}
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
                    onChange={() => handleChecked("girl", "kids")}
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
                    onChange={() => handlePriceFilter("under-20")}
                    checked={priceFilter.includes("under-20")}
                  />
                  <label htmlFor="under-20">Under $20</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="above-20"
                    id="above-20"
                    className="mr-2  w-[20px] h-[20px] appearance-none border-[#CCCCCC] border-[1px] rounded-[4px]"
                    onChange={() => handlePriceFilter("above-20")}
                    checked={priceFilter.includes("above-20")}
                  />
                  <label htmlFor="above-20">$20 - Above</label>
                </div>
              </div>
            )}
          </div>
          <hr />
        </div>
        <div>
          {/* Filter item based on category */}
          <div
            className={`grid grid-cols-3 max-w-[1092px] gap-x-[16px] transition duration-500 gap-y-[18px] mb-[140px]  ${
              hideFilter &&
              "max-w-[1344px] -translate-x-[300px] transition duration-500  w-full"
            }`}
          >
            {categoryFilter.map((data, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(data)}
                className={`cursor-pointer max-w-[348px] w-full pb-[42px] hover:scale-105 transition duration-150`}
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
                onClick={() => sortOnClick("Best Selling Products")}
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
