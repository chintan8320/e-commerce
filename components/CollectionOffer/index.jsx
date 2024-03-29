"use client";
import React from "react";

const OfferPage = () => {
  return (
    <div className="offer_img items-center flex mt-20   max-sm:h-[94px] max-sm:mt-[2rem]">
      {/* <div className="absolute bg-black opacity-[0.4] h-[64%] w-full "></div> */}
      <div className="container relative">
        <div class="grid grid-cols-1 text-end">
          <h3 className="font-semibold text-[50px] text-white leading-[75px] max-sm:text-[15px] max-sm:leading-[22.5px]">
            LATEST COLLECTION
          </h3>

          <h5 className="font-normal text-[45px] leading-[67.5px] max-sm:text-[12px] max-sm:leading-[18px]">
            {" "}
            SAVE UP TO 60% OFF
          </h5>

          <div>
            <button class="bg-[#facc15] text-black rounded font-semibold py-2 px-4 mt-[30px] text-[16px] leading-[24px] max-sm:w-[77px] max-sm:h-[17px] max-sm:py-0 max-sm:px-0 max-sm:m-auto mt-2 max-sm:text-[7px] max-sm:leading-[12px] max-sm:mt-2  ">
              VIEW DETAIL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
