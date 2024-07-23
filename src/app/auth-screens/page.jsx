"use client";
import React from "react";
import Header from "../components/common/Header";
import SignIn from "../signin/page";
import { usePathname } from "next/navigation";
import SignUp from "../signup/SignUp";

const AuthScreen = () => {
  const pathname = usePathname();
  return (
    <>
      <div>
        {pathname === "/signup" ? (
          <SignUp />
        ) : (
          <>
            <SignIn />
          </>
        )}
      </div>
    </>
  );
};

export default AuthScreen;
