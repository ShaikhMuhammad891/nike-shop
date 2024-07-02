import React from "react";
import Membership from "./Membership";
import Benifits from "./Benifits";
import Download from "./Download";
import Challenge from "./Challenge";

const JoinUs = () => {
  return (
    <div className=" max-w-[1344px] mx-auto">
      <Membership />
      <Benifits />
      <Download />
      <Challenge />
    </div>
  );
};

export default JoinUs;
