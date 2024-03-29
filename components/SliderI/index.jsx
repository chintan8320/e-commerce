"use client";
import React, { Component } from "react";
import { Ellipse1, Ellipse2, Ellipse3, Square } from "@lib/config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import { P1 } from "@lib/config"

const prodImg = [
  {
    src: P1,
    name: "Esther Howard",
    height: 592,
    width: 523,
  },
  {
    src: P1,
    name: "Robert Fox",
    height: 592,
    width: 523,
  },
  {
    src: P1,
    name: "Arlene McCoy",
    height: 592,
    width: 523,
  },
];

const SimpleSliderS = (prop) => {
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
      
      
      
      <div >
        <Slider {...settings} >
          {prodImg.map((item, index) => (
            <div key={index} >
              <div >
                <Image
                  src={prop.src}
                  alt={item.name}
                  height={item.height}
                  width={item.width}
                  className="pb-[120px] max-sm:pb-[50px]"
                />
              </div>
              
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
    
  );
};

export default SimpleSliderS;
