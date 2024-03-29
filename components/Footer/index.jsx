import React from "react";
import { FooterLogo } from "@lib/config";
import { YouTube, Facebook, Twitter, Instagram } from "@utilis/socialsImg";
import Image from "next/image";

const Footer = () => {
  const page = [
    "Home",
    "About us",
    "Products",
    "Categories",
    "Blog",
    "Contact",
  ];
  return (
    <div className="footerbg flex items-center mt-14 ">
      <div className="container mt-14">
        <div className="grid grid-cols-4 gap-3 ">
          <div className="col-span-2 flex flex-col justify-between">
            <Image src={FooterLogo} width={156} height={84} alt="header-logo" />
            <div className="font-normal text-[20px] leading-[25px] text-white">
              <p>
                {" "}
                WELL FINISH is taking equal care of Luxury, Comfort and Cost all
                together in order to give complete Soluon and Sasfacon to its
                Clients.
              </p>
            </div>
          </div>
          <div>
            <div className="">
              <h5 className="text-white font-semibold leading-9 text-[20px]">
                Quick links
              </h5>
            </div>
            <div>
              <ul className=" mt-3 text-white font-normal text-[20px] leading-7">
                {page.map((prod, index) => (
                  <li
                    key={index}
                    className="flex leading-6 text-base font-normal mb-2"
                  >
                    {prod}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold leading-9 text-base">
              <h5>Contact Info</h5>
            </div>
            <div className="font-normal text-[20px] leading-7 text-white mt-3">
              <p>
                {" "}
                Street Number 4, near Gokuldham Society, Gokulnagar, Samrat
                Industrial Area, Rajkot, Gujarat 360004{" "}
              </p>
            </div>
            <div className="flex mt-4 gap-[10px]">
              <div className="bg-white rounded-full flex w-[25px] h-[25px] items-center justify-center">
                <YouTube />
              </div>
              <div className="bg-white rounded-full flex w-[25px] h-[25px] items-center justify-center">
                <Facebook />
              </div>
              <div className="bg-white rounded-full flex w-[25px] h-[25px] items-center justify-center">
                <Twitter />
              </div>
              <div className="bg-white rounded-full flex w-[25px] h-[25px] items-center justify-center">
                <Instagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
