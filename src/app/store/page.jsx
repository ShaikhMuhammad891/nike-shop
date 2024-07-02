// import { FilterChange, Search } from "@/icons/logos";
// import React from "react";
// import { stores } from "../../../utils/store";

// const FindStore = () => {
//   return (
//     <>
//       <div className=" max-w-[1440px] w-full mx-auto">
//         <div className=" flex ">
//           <div className=" max-w-[416px] mx-[32px] mt-[36px]">
//             <p className=" text-[27px] leading-[32px] font-medium">
//               Find a Nike Store
//             </p>
//             <div className=" mt-[44px] pl-[12px] py-[16px] flex gap-[12px] items-center border border-[#757575] w-[416px] rounded-[8px]">
//               <Search />
//               <input
//                 type="text"
//                 placeholder="Search Location"
//                 className=" outline-none"
//               />
//             </div>
//             <div className=" mt-[30px] flex justify-between items-center mb-[30px]">
//               <p className=" text-[14px] leading-[20px] font-normal text-[#757575]">
//                 15 Stores Near You
//               </p>
//               <div className=" flex rounded-[30px] px-[21.5px] py-[7.5px] gap-[8.56px] border border-[#757575]">
//                 <p className=" text-center text-[15px] leading-[24px] font-medium">
//                   Filter
//                 </p>
//                 <FilterChange />
//               </div>
//             </div>
//             <hr />
//             <div>
//               {stores.map((store, index) => (
//                 <div key={index} className=" mt-[28px] ">
//                   <p className=" text-[15px] leading-[24px] font-medium">
//                     {store.name}
//                   </p>
//                   <p className=" text-[#757575] text-[15px] leading-[24px] font-normal">
//                     {store.address}
//                   </p>
//                   <p className=" text-[#757575] text-[16px] leading-[24px]">
//                     {store.city}, {store.state}, {store.zip}
//                   </p>
//                   <div className=" flex gap-[3px] items-center text-[#757575] text-[15px] leading-[24px]">
//                     <p className=" text-[#D43F21]">{store.status}</p>
//                     <p className=" mt-[-3px]">.</p>
//                     <p>Opens at</p>
//                     <p>{store.opensAt}</p>
//                   </div>
//                   <hr className="mt-[24px]" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FindStore;

"use client";

import { FilterChange, Search } from "@/icons/logos";
import React, { useState } from "react";
import { stores } from "../../../utils/store";

const FindStore = () => {
  const [showAllStores, setShowAllStores] = useState(false);

  const toggleShowAllStores = () => {
    setShowAllStores(!showAllStores);
  };

  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="flex">
          <div className="max-w-[416px] mx-[32px] mt-[36px]">
            <p className="text-[27px] leading-[32px] font-medium">
              Find a Nike Store
            </p>
            <div className="mt-[44px] pl-[12px] py-[16px] flex gap-[12px] items-center border border-[#757575] w-[416px] rounded-[8px]">
              <Search />
              <input
                type="text"
                placeholder="Search Location"
                className="outline-none"
              />
            </div>
            <div className="mt-[30px] flex justify-between items-center mb-[30px]">
              <p className="text-[14px] leading-[20px] font-normal text-[#757575]">
                {stores.length} Stores Near You
              </p>
              <div className="flex rounded-[30px] px-[21.5px] py-[7.5px] gap-[8.56px] border border-[#757575] cursor-pointer">
                <p className="text-center text-[15px] leading-[24px] font-medium">
                  Filter
                </p>
                <FilterChange />
              </div>
            </div>
            <hr />
            <div>
              {stores
                .slice(0, showAllStores ? stores.length : 3)
                .map((store, index) => (
                  <div key={index} className="mt-[28px]">
                    <p className="text-[15px] leading-[24px] font-medium">
                      {store.name}
                    </p>
                    <p className="text-[#757575] text-[15px] leading-[24px] font-normal">
                      {store.address}
                    </p>
                    <p className="text-[#757575] text-[16px] leading-[24px]">
                      {store.city}, {store.state}, {store.zip}
                    </p>
                    <div className="flex gap-[3px] items-center text-[#757575] text-[15px] leading-[24px]">
                      <p className="text-[#D43F21]">{store.status}</p>
                      <p className="mt-[-3px]">.</p>
                      <p>Opens at</p>
                      <p>{store.opensAt}</p>
                    </div>
                    <hr className="mt-[24px]" />
                  </div>
                ))}
            </div>
            <p
              className=" mt-[14px] underline font-medium text-[15px] leading-[24px] pb-[14px]"
              onClick={toggleShowAllStores}
            >
              {showAllStores ? "View Less" : "View All store"}
            </p>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default FindStore;
