import Image from "next/image";
import Button from "./common/Button";

const HelloNike = () => {
  return (
    <>
      <div className=" w-full bg-[#f5f5f5] mt-[10px] pt-[9px] pb-[5px] ">
        <p className="  text-[15px] leading-[16px] font-helvetica font-medium text-center  ">
          Hello Nike App
        </p>
        <p className=" text-center font-normal font-helvetica text-[11px] leading-[24px] mt-[3px]">
          Download the app to access everything Nike.
          <span>
            <span className=" underline">Get Your Great</span>
          </span>
        </p>
      </div>
      <div className=" flex justify-center">
        <Image src="/images/landing-photo.png" alt="none" width={1344} height={700} />
      </div>

      <div className=" mt-[48px]">
        <p className=" text-center text-[15px] leading-[24px] font-medium font-helvetica">
          First Look
        </p>
        <p className="  text-center text-[56px] leading-[60px] font-medium font-helvetica">
          NIKE AIR MAX PULSE
        </p>
        <div className=" flex justify-center mt-[24px]">
          <p className=" max-w-[511px] text-center text-[15px] leading-[24px] font-normal font-helvetica ">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse —designed to push you past your limits and help you go to the
            max.
          </p>
        </div>
        <div className=" flex justify-center gap-[6px] mt-[30px]">
        <Button title="Notify Me" bgcolor = "#111111" color = "#ffffff"  />
        <Button title="Shop Air Max" bgcolor = "#111111" color = "#ffffff" />
        </div>
      
      </div>
    </>
  );
};

export default HelloNike;
