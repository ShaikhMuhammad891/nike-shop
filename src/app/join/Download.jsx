import React from "react";

const Download = () => {
  return (
    <>
      <div>
        <div className=" max-w-[422px] mx-auto mt-[87px]">
          <p className=" flex justify-center text-[#757575] text-[15px] leading-[24px] font-medium">
            Member-Only Apps{" "}
          </p>
          <p className=" mt-[8px] text-[30px] leading-[36px] font-medium flex justify-center text-center ">
            Download our apps, your key to accessing benefits{" "}
          </p>
        </div>
        <div className=" mt-[98px] flex gap-[12px]">
          {download.map((data, index) => (
            <div key={index} className=" max-w-[441.36px]">
              <img src={data.img} alt="" className="" />
              <p className=" mt-[57px] text-[15px] leading-[24px] font-medium">
                {data.name}
              </p>
              <p className=" mt-[4px] text-[24px] leading-[28px] font-medium max-w-[408.43px]">
                {data.description}
              </p>
              <p className=" max-w-[55px] mt-[32px] text-[15px] leading-[24px] font-medium border-b border-b-black">
                {data.explore}
              </p>
            </div>
          ))}
        </div>
        <div className=" w-[1344px] mt-[84px] h-[910px] bg-[#F5F5F5] flex justify-center" />
      </div>
    </>
  );
};

export default Download;

const download = [
  {
    img: "/images/download-1.png",
    name: "Nike App",
    description: "Shop: Discover your personal guide to Nike",
    explore: "Explore",
  },
  {
    img: "/images/download-2.png",
    name: "Nike Run Club",
    description: "Run: Get motivated with Audio-Guided Runs",
    explore: "Explore",
  },
  {
    img: "/images/download-3.png",
    name: "Nike Training Club",
    description: "Train: Break a sweat with over 160 workouts",
    explore: "Explore",
  },
];
