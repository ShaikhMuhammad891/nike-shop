import React from "react";
import ShopContent from "./ShopContent";

const Shop = ({ searchParams }) => {
  const { category } = searchParams;
  return (
    <div className=" max-w-[1440px] mx-auto">
      <ShopContent category={category} />
    </div>
  );
};

export default Shop;
