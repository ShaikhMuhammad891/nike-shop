import React from "react";
import OpenItem from "../OpenItem";
import { shop } from "../../../../utils/shop";

const SelectedItems = ({ params }) => {
  console.log(params);
  const openData = shop.find((data) => data.id == params.id);
  console.log( openData ,params.id);
  return (
    <div className=" max-w-[1344px] mx-auto">
      <OpenItem openData={openData} />
    </div>
  );
};

export default SelectedItems;
