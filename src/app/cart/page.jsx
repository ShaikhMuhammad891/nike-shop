import React from "react";
import Bag from "./Bag";
import { shop } from "../../../utils/shop";
import Fav from "./Fav";

const page = ({ params }) => {
  const bagData = shop.find((data) => data.id == params.id);

  return (
    <div className=" max-w-[1344px] mx-auto">
      <Bag bagData={bagData} />
      <Fav />
    </div>
  );
};

export default page;
