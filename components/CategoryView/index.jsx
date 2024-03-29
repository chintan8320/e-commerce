import { useState } from "react";
import { ProductView } from "./prod";
import { WishList, QuickView, Compare, Troli } from "@utilis/categories";
import Image from "next/image";

const Category = () => {
  const [hovered, setHovered] = useState(null);
  const [viewAll, setViewAll] = useState(false);
  const productList = ProductView();

  const displayedProducts = viewAll ? productList : productList.slice(0, 12);

  return (
    <div className="container  p-[20px]">
      <div className="font-semibold text-[25px] lg:text-[55px] leading-[40.5px] lg:leading-[82.5px] text-center">
      <p>CHOOSE CATEGORY YOU ARE <br /> INTERESTED IN</p>  
      </div>
      <div className="grid xl:grid-cols-4  lg:grid-cols-3 md:md:grid-cols-2  grid-cols-1 items-center  gap-4  pt-4 ">
        {displayedProducts.map((product, index) => (
          <div
            key={index}
            className={`h-[452px] w-[277px] flex flex-col items-center justify-around hover:shadow-md `}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="w-[277px] h-[306px] relative">
              <div className=" w-full h-[306px] mb-4 flex justify-center items-center bg-[#ECECEC] hover:bg-[#CACACA]">
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
                        className={`mr-2 bg-white rounded-full p-1 hover:bg-gradient-to-b from-yellow-400 to-orange-600`}
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
                      <div className="mr-2 bg-white rounded-full p-1 hover:bg-gradient-to-b from-yellow-400 to-orange-600">
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
                      <div className="mr-2 bg-white rounded-full p-1 hover:bg-gradient-to-b from-yellow-400 to-orange-600">
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
        ))}
      </div>
      {!viewAll && (
        <div className="flex justify-center pt-[20px]">
          <button
            className="bg-gradient-to-b from-yellow-400 to-orange-600 text-black font-semibold py-2 px-4 w-40"
            onClick={() => setViewAll(true)}
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default Category;
