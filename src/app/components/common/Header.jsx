import { Line, NikeLogo, SearchIcon } from "@/icons/logos";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className=" bg-[#F5F5F5] h-[36px] w-full flex items-center">
        <div className=" max-w-[1343px] w-full mx-auto flex justify-between items-center ">
          <Image src="/images/header-person.png" width={24} height={24} />
          <ul className=" flex gap-[15px] items-center">
            <li className=" text-[11px] font-[500] leading-[14px] ">
              Find store
            </li>
            <li>
              <Line />
            </li>
            <li className=" text-[11px] font-[500] leading-[14px] ">Help</li>
            <li>
              <Line />
            </li>
            <li className=" text-[11px] font-[500] leading-[14px] ">Join Us</li>
            <li>
              <Line />
            </li>
            <li className=" text-[11px] font-[500] leading-[14px] ">Sign In</li>
          </ul>
        </div>
      </div>

      <div className=" max-w-[1343px] w-full mx-auto h-[60px] flex justify-between items-center">
        <NikeLogo />
        <ul className=" flex gap-5">
          <li>New & Featured</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
          <li>SNKRS</li>
        </ul>
        <div>
          <div className="flex bg-green-300 w-[180px] h-[40px] rounded-[100px]">
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
