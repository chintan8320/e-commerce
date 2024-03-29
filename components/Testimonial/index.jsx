"use client";
import React, { Component } from "react";
import { Ellipse1, Ellipse2, Ellipse3, Square } from "@lib/config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import SVGImage from "@utilis/vectors";

const prodImg = [
  {
    src: Ellipse1,
    name: "Esther Howard",
    height: 228,
    width: 228,
  },
  {
    src: Ellipse2,
    name: "Robert Fox",
    height: 228,
    width: 228,
  },
  {
    src: Ellipse3,
    name: "Arlene McCoy",
    height: 228,
    width: 228,
  },
];

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="container ">
      <div>
        <h3 className="font-bold text-black text-[55px] leading-[82.5px] text-center p-[40px] max-sm:text-[35px] max-sm:leading-[1.5px]">
          TESTIMONIAL
        </h3>
      </div>
      <div className="relative mb-14">
        <Image
          className="hidden md:block absolute right-[2rem] mt-[-70px] max-sm:hidden"
          src={Square}
          width={160}
          height={160}
          alt="Square Group"
        />
        <div className="m-auto max-w-[1092px] md:h-[450px] bg-white shadow-[0_0px_24px_0px_rgba(0,0,0,0.16)] border-[1px] border-solid border-[#faefef] md:rounded-tl-[170px] rounded-t-none md:rounded-br-[170px] rounded-b-none  max-sm:rounded-tl-[50px] max-sm:rounded-br-[50px]">
          <Slider
            {...settings}
            className="mt-1.5 p-14 max-sm:p-[15px] max-sm:h-[600px]"
          >
            {prodImg.map((item, index) => (
              <div key={index} className="grid max-md:flex-col testimonial grid-cols-3">
                <div className="m-9 ">
                  <Image
                    className="max-md:mx-auto"
                    src={item.src}
                    alt={item.name}
                    height={item.height}
                    width={item.width}
                  />
                </div>
                <div className="mt-14 ml-2.5 max-sm:mt-[5px] col-start-2 col-span-2">
                  <p className="text-[18px]  font-normal">
                    Pellentesque habitant morbi tristique senIectusy et netus et
                    malesuada fames ac turpis egestase Vestibulum tortor quam,
                    feugiat vitae, ultriceseu get, tempor sit amet, ante. Donec
                    eu libero sitete quam egestas semper.
                  </p>
                  <div className="font-bold text-lg mt-4"><p>{item.name}</p></div>
                </div>
                
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SimpleSlider;
