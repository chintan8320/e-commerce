"use client";
import React from "react";
import { Bathroom, Toilets, Kitchen } from "@lib/config";
import Image from "next/image";
import Link from "next/link";

const ExploreItem = () => {
  const ExploreList = [
    {
      src: Bathroom,
      name: "HEADPHONE",
      items: "28",
      href: "product/headphone",
    },
    {
      src: Toilets,
      name: "EARBUDS",
      items: "18",
      href: "product/earbuds",
    },
    {
      src: Kitchen,
      name: "SPEAKER",
      items: "8",
      href: "product/speaker",
    },
  ];
  return (
    <div className="container mt-14">
      <div className="text-center">
        <h6 className="text-[#facc15]  font-medium text-[20px] leading-8 max-sm:flex max-sm:leading-[22.5px] max-sm:text-[15px] max-sm:justify-center">
          EXPLORE OUR DEPARTMENTS
        </h6>

        <p className="font-medium	px-[16px] text-[40px] leading-[3.75rem] max-sm:font-semibold max-sm:leading-[22.5px] max-sm:text-[15px] max-sm:flex max-sm:justify-center max-sm:w-[240px] max-sm:text-center max-sm:m-auto">
        Your Music, Your Way.
        </p>
      </div>
      <div className="flex justify-center">
        <div class="grid grid-cols-3 w-full gap-[85px] mt-10 max-sm:flex max-sm:flex-col max-sm:gap-[12px]">
          {ExploreList.map((product, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="max-sm:w-[178px] max-sm:h-[178px]">
                <Image
                  src={product.src}
                  width={300}
                  height={300}
                  alt="blog-list"
                />
              </div>
              <div className="p-5 text-center">
                <Link href={product.href}>
                  <div className="mb-2 ">
                   <h5 className="text-2xl  leading-[37.5px] font-semibold  tracking-tight bg-[#facc15] inline-block hover:text-transparent bg-clip-text max-sm:text-[16px] max-sm:leading-[24px]">{product.name}</h5> 
                  </div>
                  
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreItem;
