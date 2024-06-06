"use client";
import React, { useState } from "react";
import Link from "next/link";
import Cookies from 'js-cookie';

const HeroSection = () => {
  return (
    <div className="bg_hero flex items-center max-sm:h-[160px] max-sm:w-[100%]">
      <div className="container relative">
        <div className="flex items-center h-[100%]">
          <div class="grid grid-cols-1">
            <div>
              <p className="font-semibold text-[70px] text-white max-sm:text-[16px]  max-sm:text-center max-sm:flex  justify-center max-sm:font-bold">
              PREMIUM SOUND <br />
                <span className="font-semibold text-[70px]  max-sm:text-[16px]  max-sm:text-center max-sm:flex  justify-center max-sm:font-bold">
                  COLLECTIONS
                </span>
              </p>
            </div>
            <div>
              <p className=" font-medium text-[23px] leading-[62.5px] max-sm:text-[12px] max-sm:leading-[15px] max-sm:px-8 max-sm:text-center">
                FLAT 60% OFF FOR FIRST 30 CUSTOMER.
              </p>
            </div>
            <div>
              <p className=" font-normal text-[14px] leading-[21px] mt-2 max-sm:text-[7px] max-sm:leading-[11px] max-sm:text-center max-sm:px-20">
                Quis Est Tam Dissimile Homini. Quia Dolori Non Voluptas.
              </p>
            </div>
            <div className="max-sm:m-auto">
            <button class="bg-[#facc15] font-semibold py-2 px-4  w-[155px] h-[50px] mt-[30px] text-[16px]  max-sm:justify-center leading-[24px] max-sm:w-[6rem] max-sm:h-[28px] max-sm:text-[10px] max-sm:mt-2 max-sm:flex  max-sm:items-center rounded">
              <Link href="/product/all">SHOP NOW</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
