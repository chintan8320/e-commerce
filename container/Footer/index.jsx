import React from "react";
import { FooterLogo } from "@lib/config";
import { YouTube, Facebook, Twitter, Instagram } from "@utilis/socialsImg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const page = [
    { name: "Home", href: "/"},
  { name: "About us", href: "/about"},
  { name: "Products", href: "/products"},
  { name: "Categories", href: "/category"},
  { name: "Contact", href: "/contact"},
  ];
  return (
    <div className="flex items-center pt-14">
      <div className="absolute bg-black h-[479px] w-full"></div>
      <div className="container relative ">
        <div className="grid grid-cols-4 gap-3 max-sm:grid-cols-2 max-sm:grid-row-2 ">
          <div className="col-span-2 flex flex-col justify-around max-sm:col-span-4 max-sm:items-center">
            <div className="font-normal text-[20px] leading-7 text-white max-sm:text-[12px] max-sm:leading-[20px] max-sm:text-[10px]">
              <p>
              EXQUISITE SOUND aims to harmonize
Premium Quality,<br /> Comfort, and Value
simultaneously, delivering a holistic <br />
Listening Experience and Satisfaction
to our Customers.
              </p>
            </div>
          </div>
          {/* <div className=" max-sm:flex"> */}
          <div>
            <div className="text-white font-semibold text-[24px] leading-[36px] max-sm:text-[20px]">
              Quick links
            </div>
            <hr className="w-[52px] my-[10px]" />
            <ul>
              <div className="grid gap-[15px] justify-between max-sm:gap-[5px]">
                {page.map((prod, index) => (
                  <li
                    key={index}
                    className="flex text-white text-[20px] leading-[30 px] font-normal mb-2 max-sm:text-[15px] max-sm:leading-[15px]"
                  >
                    <Link href={prod.href}>{prod.name}</Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold text-[24px] leading-[36px] max-sm:text-[20px]">
              Contact Info
            </div>
            <hr className="text-white w-[52px] my-[10px]" />
            <div className="font-normal text-[20px] leading-[30px] text-white max-sm:text-[15px] max-sm:leading-[20px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis explicabo iste, sunt commodi minus cum velit officia iusto totam quidem, itaque suscipit ullam voluptatum dolorem nemo atque, nostrum exercitationem odio?
            </div>
            <div className="flex mt-4 gap-[10px]">
              <div className="bg-white rounded-full flex w-[30px] h-[30px] items-center justify-center">
                <YouTube />
              </div>
              <div className="bg-white rounded-full flex w-[30px] h-[30px] items-center justify-center">
                <Facebook />
              </div>
              <div className="bg-white rounded-full flex w-[30px] h-[30px] items-center justify-center">
                <Twitter />
              </div>
              <div className="bg-white rounded-full flex w-[30px] h-[30px] items-center justify-center">
                <Instagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
