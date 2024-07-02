"use client";
import { Cart, Heart, Line, NikeLogo, SearchIcon } from "@/icons/logos";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className=" bg-[#F5F5F5] h-[36px] w-full flex items-center">
        <div className=" max-w-[1343px] w-full mx-auto flex justify-between items-center ">
          <Image src="/images/header-person.png" width={24} height={24} />
          <ul className=" flex gap-[15px] items-center">
            <li
              className=" text-[11px] font-[500] leading-[14px] cursor-pointer"
              onClick={() => router.push("/store")}
            >
              Find store
            </li>
            <li>
              <Line />
            </li>
            <li className=" text-[11px] font-[500] leading-[14px] cursor-pointer ">
              Help
            </li>
            <li>
              <Line />
            </li>
            <li
              className=" text-[11px] font-[500] leading-[14px] cursor-pointer "
              onClick={() => router.push("/join")}
            >
              Join Us
            </li>
            <li>
              <Line />
            </li>
            <li
              onClick={() => router.push("/signin")}
              className=" text-[11px] font-[500] leading-[14px] cursor-pointer "
            >
              Sign In
            </li>
          </ul>
        </div>
      </div>

      <div className=" max-w-[1343px] w-full mx-auto h-[60px] flex justify-between items-center relative">
        <button onClick={() => router.push("/")}>
          <NikeLogo />
        </button>
        <ul className=" flex gap-6 max-w-[760px] w-full absolute inset-0 mx-auto justify-center items-center">
          <li className=" text-[16px] text-[#111111] font-[500] leading-[24px] font-helvetica">
            New & Featured
          </li>
          <li className=" text-[16px] text-[#111111] font-[500] leading-[24px] font-helvetica">
            Men
          </li>
          <li className=" text-[16px] text-[#111111] font-[500] leading-[24px] font-helvetica">
            Women
          </li>
          <li className=" text-[16px] text-[#111111] font-[500] leading-[24px] font-helvetica ">
            Kids
          </li>
          <li className=" text-[16px] text-[#111111] font-[500] leading-[24px] font-helvetica">
            Sale
          </li>
          <li className=" text-[16px] text-[#111111] font-[500] leading-[24px] font-helvetica">
            SNKRS
          </li>
        </ul>
        <div className=" flex items-center gap-[18px]">
          <div className="flex bg-[#f5f5f5] w-[180px] h-[40px] rounded-[100px] items-center pl-[10px] ">
            <SearchIcon />
            <input
              type="text"
              className=" w-[84px] outline-none bg-[#f5f5f5] ml-[14px]"
              placeholder="Search"
            />
          </div>
          <Heart />
          <Cart />
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Header;
