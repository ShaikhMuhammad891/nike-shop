import React from "react";
import OpenItem from "../OpenItem";
import { ShoeSize, shop } from "../../../../utils/shop";

const SelectedItems = ({ params }) => {
  const openData = shop.find((data) => data.id == params.id);
  openData.sizes = ShoeSize

  return (
    <div className=" max-w-[1344px] mx-auto">
      <OpenItem openData={openData} />
    </div>
  );
};

export default SelectedItems;
