import { ArrowBack } from "@/icons/logos";

const LandingSwiper = () => {
  return (
    <>
      <div className=" mt-[84px] max-w-[1344px] w-full mx-auto">
        <div className=" flex justify-between">
          <p className=" text-[22px] leading-[28px] font-helvetica font-medium">
            Best of Air Max
          </p>
          <div className=" flex gap-[12.38px] items-center">
            <p className=" text-[15px] leading-[24px] font-helvetica font-medium"> Shop</p>
            <button className=" bg-[#f5f5f5] w-[48px] h-[48px] rounded-full flex items-center justify-center">
              <img src="/images/arrow-back.png" alt="" />
            </button>
            <button className=" bg-[#E5E5E5] w-[48px] h-[48px] rounded-full flex items-center justify-center">
              <img src="/images/arrow-next.png" alt="" className=" " />
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default LandingSwiper;
