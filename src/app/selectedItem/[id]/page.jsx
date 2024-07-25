import React from "react";
import OpenItem from "../OpenItem";
import { Colors, ShoeSize, shop } from "../../../../utils/shop";

const SelectedItems = ({ params }) => {
  const openData = shop.find((data) => data.id == params.id);
  // add ShoeSize with openData as an object
  openData.sizes = ShoeSize;
  openData.itemColor = Colors;

  return (
    <div className=" ">
      <OpenItem openData={openData} />
    </div>
  );
};

export default SelectedItems;
