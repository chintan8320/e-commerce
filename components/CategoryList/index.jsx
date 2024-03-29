"use client";
import { useState } from "react";
import { EnoxRing, NapkinRing, TopazRing, TriangleRing } from "@lib/config";
import { WishList, QuickView, Compare, Troli } from "@utilis/categories";
import Image from "next/image";
import CatogorySlider from "@components/CategorySlider";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

const CategoryList = () => {
  const [hovered, setHovered] = useState(null);
  const open = useSelector((state) => state.sideModal.modalStatus);
  const dispatch = useDispatch();

  const categories = [
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

  const handleAddToCart = () => {
    dispatch(modalChange());
  };

  return (
    <div className="container mt-14">
      <div className="text-center">
        <p className="font-bold text-[55px] leading-14  max-sm:text-[20px] max-sm:leading-[20px]">
          CHOOSE CATEGORY YOU ARE
        </p>
        <span className="font-bold text-[55px] leading-14  max-sm:text-[20px] max-sm:leading-[20px]">
          INTERESTED IN
        </span>
      </div>
      <div class="grid grid-cols-4 gap-4 mt-10 lg:grid-cols-2 md:grid-cols-2 justify-items-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:hidden">
        {categories.map((product, index) => (
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
                        className={`mr-2 bg-white flex items-center justify-center w-[30px] h-[30px] rounded-full p-1 hover:bg-gradient-to-b from-yellow-400 to-orange-600`}
                      >
                        <button
                          onClick={() => dispatch(handleWishList(product))}
                        >
                          <WishList />
                        </button>
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
                        <Link href={`/products/${product.id}`}>
                          <QuickView />
                        </Link>
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
                        <button onClick={() => console.log(categories)}>
                          <Compare />
                        </button>
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
              <div className="font-bold text-lg">
                <h6>{product.name}</h6>
              </div>
              <div className="font-semibold">
                <p>{product.price}</p>
              </div>
              {hovered === index && (
                <div
                  className={`flex m-auto justify-center items-center cursor-pointer mt-2 p-1 w-40 ${
                    hovered === index
                      ? "bg-black rounded-full hover:bg-gradient-to-b from-yellow-400 to-orange-600"
                      : ""
                  }`}
                >
                  <Troli />
                  <button onClick={() => handleAddToCart(product)}>
                    <span className="ml-2 text-white">Add to Cart</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div>
        <CatogorySlider />
      </div>
    </div>
  );
};

export default CategoryList;
