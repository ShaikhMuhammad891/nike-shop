"use client"
import React from "react";
import HelloNike from "./HelloNike";
import LandingSwiper from "./LandingSwiper";
import Featured from "./Featured";
import GearUp from "./GearUp";
import Essential from "./Essential";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const LandingPage = () => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });
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

LandingPage.requireAuth = true;
