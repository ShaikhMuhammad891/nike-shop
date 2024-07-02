import React from "react";
import Button from "../components/common/Button";

const Benifits = () => {
  return (
    <div className=" mt-[32px]">
      <div className=" max-w-[736.06px] mx-auto">
        <p className=" flex justify-center text-[55px] leading-[60px] font-medium">
          A Year Of You
        </p>
        <p className=" mt-[12px] text-[15px] leading-[24px]">
          365 days. 663 million miles. 37.5 million workouts. Let's see how the
          Nike community made 2022 proud.
        </p>
      </div>

      <div className=" flex justify-center mt-[34px]">
        <Button title="Watch" bgcolor="black" color="white" watch />
      </div>

      <div className=" max-w-[308px] mx-auto mt-[87px]">
        <p className=" flex justify-center text-[#757575] text-[15px] leading-[24px] font-medium">
          Benifits
        </p>
        <p className=" mt-[8px] text-[30px] leading-[36px] font-medium flex justify-center text-center ">
          Nike Member Benefits bring out your best
        </p>
      </div>
      <div className=" mt-[98px] flex gap-[12px]">
        {benifits.map((data, index) => (
          <div key={index} className=" max-w-[441.36px]">
            <img src={data.img} alt="" className=" h-[294.23px]" />
            <p className=" mt-[57px] text-[15px] leading-[24px] font-medium">
              {data.name}
            </p>
            <p className=" mt-[4px] text-[24px] leading-[28px] font-medium">
              {data.description}
            </p>
            <p className=" max-w-[55px] mt-[32px] text-[15px] leading-[24px] font-medium border-b border-b-black">
              {data.explore}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benifits;

const benifits = [
  {
    img: "/images/benifits-1.png",
    name: "Member Products",
    description:
      "First and exclusive access to the newest styles in the Member Shop",
    explore: "Explore",
  },
  {
    img: "/images/benifits-2.png",
    name: "Nike By You",
    description:
      "Customise performance or lifestyle sneakers with unique colour ways and materials",
    explore: "Explore",
  },
  {
    img: "/images/benifits-3.png",
    name: "Member Rewards",
    description:
      "Special offers and promos to thank Members throughout the year",
    explore: "Explore",
  },
];
