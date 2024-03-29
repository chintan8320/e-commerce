"use client";
import { BathroomList, BathroomRec, Quotation } from "@lib/config";
import CustomSvg from "@utilis/customSideArrow";
import Image from "next/image";
import Link from "next/link";

const ProdOPtions = () => {
  const ProdOps = [
    "Enox Ring",
    "Soap Dispenser",
    "Paper Holder",
    "Towel Rod",
    "Soap Dish",
    "Double Soap Dish",
  ];
  const ProdLis = [
    "Shelf",
    "Towel Rack",
    "Tumbler Holder",
    "Napkin Ring",
    "Rob Hook",
    "Soap Dish With Tumbler",
  ];
  return (
    <div className="container mt-20 max-sm:m-0">
      <div className="text-center">
        <h6 className="bg-gradient-to-b  from-yellow-400 to-orange-600 inline-block text-transparent bg-clip-text font-medium text-[20px] leading-8 max-sm:flex max-sm:leading-[22.5px] max-sm:text-[15px] max-sm:justify-center">
          THE BEST, A LITTLE BETTER.
        </h6>
        <p className="mt-4 font-medium text-4xl leading-[3rem] max-sm:font-semibold max-sm:leading-[1.75rem] max-sm:text-lg max-sm:px-[10px]">
          Out Stunning Bathroom <br /> <span>Product Options</span>
        </p>
      </div>
      <div className="grid gap-2 grid-cols-2 max-sm:flex flex-col-reverse m-[20px]">
        <div className="mx-auto mt-16 max-sm:m-0">
          <div className="hidden sm:block">
            <Image
              className="opacity-50 md:white-[148] md:height-[128] "
              src={Quotation}
              width={148}
              height={128}
              alt="quotation-list"
            />
          </div>

          <p className="font-normal text-[24px] leading-[npx] max-sm:text-[10px] p-2 max-sm:leading-[15px] max-sm:p-2">
            Are you ready to trasform your bathroom? we offer, smart and stylish
            nathroom products with focus on comfort, sophistication, hygiene and
            durability.
          </p>
          <div className="flex max-sm:text-[10px] p-[20px] max-sm:leading-[]">
            <div className="">
              <ul className="list-disc">
                {ProdOps.map((prod, index) => (
                  <li
                    key={index}
                    className="text-[10px] md:text-[16px] font-medium mb-2 "
                  >
                    {prod}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="ml-7 list-disc">
                {ProdLis.map((prod, index) => (
                  <li
                    key={index}
                    className="text-[10px] md:text-[16px] font-medium mb-2"
                  >
                    {prod}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button class="bg-gradient-to-b from-yellow-400 to-orange-600 text-black font-semibold py-2 px-4 mt-[30px] text-[16px] leading-[24px] max-sm:w-[105px] max-sm:h-[20px] max-sm:m-auto mt-2 max-sm:text-[7px] max-sm:leading-[12px] max-sm:mt-2 max-sm:flex max-sm:justify-center max-sm:items-center">
            <Link href="/products">EXPLORE PRODUCTS</Link>
          </button>
        </div>
        <div className="relative  max-sm:m-auto">
          <Image
            className="absolute top-[0] left-[20px] max-sm:w-[187px] max-sm:h-[267px] max-sm:left-[12px]"
            src={BathroomList}
            width={500}
            height={500}
            alt="bathroom-list"
          />
          <Image
            className="z-[-2] flex max-sm:w-[187px]  max-sm:h-[267px]"
            src={BathroomRec}
            width={500}
            height={500}
            alt="bathroom-rec"
          />
        </div>
      </div>
    </div>
  );
};

export default ProdOPtions;
