import React from "react";
import HelloNike from "./HelloNike";
import LandingSwiper from "./LandingSwiper";
import Featured from "./Featured";
import GearUp from "./GearUp";
import Essential from "./Essential";

const LandingPage = () => {
  return (
    <div>
      <HelloNike />
      <LandingSwiper />
      <Featured />
      <GearUp />
      <Essential />
    </div>
  );
};

export default LandingPage;
