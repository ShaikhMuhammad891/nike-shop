import React from "react";
import Bag from "./Bag";
import { shop } from "../../../utils/shop";
import Fav from "./Fav";

const page = () => {

  return (
    <div className=" max-w-[1344px] mx-auto">
      <Bag />
      <Fav />
    </div>
  );
};

export default page;
