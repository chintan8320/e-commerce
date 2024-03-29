"use client";
import React, { Component } from "react";
import { Blog1, Blog2, Blog3 } from "@lib/config";
import Image from "next/image";
import SVGArrow from "@utilis/arrows";
import BlogSlider from "@components/BlogSlider";
import Link from "next/link";

const BlogSection = () => {
  const BlogList = [
    {
      image: Blog1,
      date: "June 29, 2023",
      item: "Which is Best for Bathroom Towel Ring, Rod, or Rack?",
      id: 0,
      content:
        "Manufacturers are producing a huge variety of bathroom accessories that help us make the bathroom space comfortable and practical. A few such accessories that are often found in every bathroom are towel rings, rods and even towel racks.",
    },
    {
      image: Blog2,
      date: "June 14, 2023",
      item: "Shelf Tray & Towel Rack Best for Both Bathroom",

      id: 1,
      content:
        "In modern homes, every inch of space matters. Maximizing the functionality and efficiency of every room is paramount, and clever storage solutions are the key to achieving this goal. Two versatile Bathroom Fittings that can serve multi-room purposes include shelf.",
    },
    {
      image: Blog3,
      date: "June 16, 2023",
      id: 2,
      item: "Which is Best for Bathroom Towel Ring, Rod, or Rack?",
      content:
        "When equipping a washroom, whether it's for your home, an office, or a public space, one important decision is choosing between a liquid soap dispenser and a traditional soap dish.",
    },
  ];

  return (
    <div className="container py-[60px]">
      <div>
        <h3 className="font-bold text-[55px] leading-[82.5px] text-center p-[40px] max-sm:text-[35px] max-sm:leading-[1.5px]">
          OUR BLOG
        </h3>
      </div>
      <div className="grid justify-items-center max-sm:hidden">
        <div class="grid grid-cols-3 gap-[36px] justify-items-center max-sm:flex max-sm:flex-col">
          {BlogList.map((product, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow dark:border-gray-700 w-full sm:w-full md:w-full lg:w-[calc(33.333% - 36px)] xl:w-[calc(33.333% - 36px)] 2xl:w-[calc(33.333% - 36px)] max-sm:w-[284px]"

            >
              <Image
                src={product.image}
                width={419}
                height={315}
                alt="blog-list"
              />
              <div className="flex flex-col h-[100%] p-5">
                <div class="mb-2 text-[#969696] font-medium tracking-tight">
                  <p>{product.date}</p>
                </div>
                <div class="mb-3 text-base font-semibold leading-6">
                  <h6>{product.item}</h6>
                </div>
                <div class="text-[#969696] font-medium">
                  <p>{product.content}</p>
                </div>
              </div>
              <div>
                <div className="flex m-[25px]">
                  <div className="font-medium">
                    <Link href={`/blog/${product.id}`}>READ MORE</Link>
                    <div className="border-b border-black w-[45%]"></div>
                  </div>

                  <div className="flex items-center ml-2">
                    <SVGArrow />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <BlogSlider />
      </div>
    </div>
  );
};

export default BlogSection;
