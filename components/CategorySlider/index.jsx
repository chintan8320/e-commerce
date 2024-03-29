"use client";
import { useState } from "react";
import { Compare, QuickView, Troli, WishList } from "@utilis/categories";
import { EnoxRing, NapkinRing, TopazRing, TriangleRing } from "@lib/config";
import Slider from "react-slick";
import Image from "next/image";

const CatogorySlider = () => {
  const [hovered, setHovered] = useState(null);

  const Categories = [
    {
      src: EnoxRing,
      name: "ENOX RING",
      price: "RS : 520/-",
      height: 192,
      width: 151,
    },
    {
      src: TopazRing,
      name: "TOPAZ RING",
      price: "RS : 560/-",
      height: 207,
      width: 216,
    },
    {
      src: NapkinRing,
      name: "NAPKIN RING",
      price: "RS : 520/-",
      height: 219,
      width: 253,
    },
    {
      src: TriangleRing,
      name: "TRIANGLE RING",
      price: "RS : 520/-",
      height: 232,
      width: 224,
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    // centerPadding: "55px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    responsive:[
      {
        breakpoint:375,
        settings:{
          className: "center",
           centerPadding:"25px",
           centerMode: true,
           slidesToShow: 1,
           slidesToScroll: 1,
        }
      },
      {
        breakpoint:320,
        settings:{
           centerPadding:"10px",
           centerMode: true,
           slidesToShow: 1,
           slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className="md:hidden">
      <Slider {...settings}>
        {Categories.map((product, index) => (
          <div key={index}>
            <div
              className={`h-[452px] w-[277px] flex flex-col items-center justify-around hover:shadow-md  `}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="w-[277px] h-[306px] relative xsm:w-auto min-[375px]:p-[30px]">
                <div className="w-full h-[306px] min-[375px]:w-auto mb-4 flex justify-center items-center bg-[#ECECEC] hover:bg-[#CACACA]">
                  <Image
                    src={product.src}
                    alt={product.name}
                    height={product.height}
                    width={product.width}
                  />
                  {hovered === index && (
                    <div className=" absolute bottom-[0] mb-4 flex justify-center w-full mt-2 cursor-pointer">
                      <div class="relative flex flex-col items-center group">
                        <div
                          className={`mr-2 bg-white flex items-center justify-center w-[30px] h-[30px] rounded-full p-1 hover:bg-gradient-to-b from-yellow-400 to-orange-600`}
                        >
                          <WishList />
                        </div>
                        <div class="absolute bottom-0 top-[-25px] flex flex-col items-center hidden mb-6 group-hover:flex">
                          <span class="relative z-10 p-1 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg w-[104px] flex justify-center">
                            Add To Wishlist
                          </span>
                          <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                        </div>
                      </div>
                      <div class="relative flex flex-col items-center group">
                        <div className="mr-2 bg-white flex items-center justify-center w-[30px] h-[30px] rounded-full p-1 hover:bg-gradient-to-b from-yellow-400 to-orange-600">
                          <QuickView />
                        </div>
                        <div class="absolute bottom-0 top-[-25px] flex flex-col items-center hidden mb-6 group-hover:flex">
                          <span class="relative z-10 p-1 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg w-[104px] flex justify-center">
                            Quick View
                          </span>
                          <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                        </div>
                      </div>
                      <div class="relative flex flex-col items-center group">
                        <div className="mr-2 bg-white flex items-center justify-center w-[30px] h-[30px] rounded-full p-1 hover:bg-gradient-to-b from-yellow-400 to-orange-600">
                          <Compare />
                        </div>
                        <div class="absolute bottom-0 top-[-25px] flex flex-col items-center hidden mb-6 group-hover:flex">
                          <span class="relative z-10 p-1 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg w-[104px] flex justify-center">
                            Compare
                          </span>
                          <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-center w-full flex flex-col py-5 hover:bg-[#FFFFFF]">
                <div className="font-bold text-lg">{product.name}</div>
                <div className="font-semibold">{product.price}</div>
                {hovered === index && (
                  <div
                    className={`flex m-auto justify-center items-center cursor-pointer mt-2 p-1 w-40 ${
                      hovered === index
                        ? "bg-black rounded-full hover:bg-gradient-to-b from-yellow-400 to-orange-600"
                        : ""
                    }`}
                  >
                    <Troli />
                    <span className="ml-2 text-white">Add to Cart</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default CatogorySlider;
