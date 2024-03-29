"use client";
import { useState } from "react";
import { Blog1, Blog2, Blog3 } from "@lib/config";
import Calender from "@utilis/calender";
import LeftArrow from "@utilis/left";
import RightArrow from "@utilis/right";
import Slider from "react-slick";
import Image from "next/image";
import SVGArrow from "@utilis/arrows";

const BlogSlider = () => {
  const BlogList = [
    {
      image: Blog1,
      date: "June 29, 2023",
      item: "Which is Best for Bathroom Towel Ring, Rod, or Rack?",
      content:
        "Manufacturers are producing a huge variety of bathroom accessories that help us make the bathroom space comfortable and practical. A few such accessories that are often found in every bathroom are towel rings, rods and even towel racks.",
    },
    {
      image: Blog2,
      date: "June 14, 2023",
      item: "Shelf Tray & Towel Rack Best for Both Bathroom",
      content:
        "In modern homes, every inch of space matters. Maximizing the functionality and efficiency of every room is paramount, and clever storage solutions are the key to achieving this goal. Two versatile Bathroom Fittings that can serve multi-room purposes include shelf.",
    },
    {
      image: Blog3,
      date: "June 16, 2023",
      item: "Which is Best for Bathroom Towel Ring, Rod, or Rack?",
      content:
        "When equipping a washroom, whether it's for your home, an office, or a public space, one important decision is choosing between a liquid soap dispenser and a traditional soap dish.",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="md:hidden">
      <Slider {...settings}>
        {BlogList.map((product, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow dark:border-gray-700 w-[419px] max-sm:w-[284px]"
          >
            <Image
              src={product.image}
              width={419}
              height={315}
              alt="blog-list"
            />
            <div className="flex flex-col h-[100%] p-5">
              <div class="mb-2 text-[#969696] font-medium tracking-tight">
                {product.date}
              </div>
              <div class="mb-3 text-base font-semibold leading-6">
                {product.item}
              </div>
              <div class="text-[#969696] font-medium">{product.content}</div>
            </div>
            <div>
              <div className="flex m-[25px]">
                <div className="font-medium">
                  READ MORE
                  <div className="border-b border-black w-[45%]"></div>
                </div>

                <div className="flex items-center ml-2">
                  <SVGArrow />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
