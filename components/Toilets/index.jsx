"use client";
import React, { useState } from "react";
import Image from "next/image";
import { WishList, QuickView, Compare, Troli } from "@utilis/categories";
import { prodList } from "./prod";
import Pagination from "@components/Pagination";
import SearchBar from "@components/SearchBar";
import ButtonsCategory from "@components/ButtonsCategory";

const ToiletsItems = () => {
  const [hovered, setHovered] = useState(null);

  const itemsPerPage = 9;
  const productList = prodList();
  const totalPages = Math.ceil(productList.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = productList.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mt-20">
      <div className="grid grid-cols-4 xl:grid-cols-3 max-lg:grid-cols-2 md:grid-cols-2 gap-3 max-sm:grid-cols-1">
        <div className="col-span-3  md:col-span-2 max-md:order-2">
        <ButtonsCategory title='Earbuds'/>
          <div className=" grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 md:pl-[55px] gap-4 my-[5rem] max-sm:flex max-sm:flex-col max-sm:justify-evenly max-sm:items-center">
            {paginatedItems.map((product, index) => (
              <div
                key={index}
                className={`h-[452px] w-[277px] flex flex-col items-center justify-around hover:shadow-md `}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="w-[277px] h-[306px] relative">
                  <div className=" w-full h-[306px] mb-4 flex justify-center items-center">
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
                          <div class="absolute bottom-0 top-[-25px]  flex flex-col items-center hidden mb-6 group-hover:flex">
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
          {/* <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          /> */}
        </div>
        <div className=" pl-[15px] max-md:order-1 max-sm:absolute max-sm:right-[20px] md:absolute md:right-[40px]">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default ToiletsItems;
