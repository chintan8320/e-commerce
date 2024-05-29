import { useState } from "react";
import { ProductView } from "./prod";
import { WishList, QuickView, Compare, Troli } from "@utilis/categories";
import Image from "next/image";
import { Bathroom, Kitchen, Toilets } from "@lib/config";
import Link from "next/link";

const Category = () => {
  const [hovered, setHovered] = useState(null);
  const [viewAll, setViewAll] = useState(false);
  
  const displayedProducts = [
    {
      src: Bathroom,
      name: "HEADPHONE",
      items: "28",
      href: "product/headphone",
    },
    {
      src: Toilets,
      name: "EARBUDS",
      items: "18",
      href: "product/earbuds",
    },
    {
      src: Kitchen,
      name: "SPEAKER",
      items: "8",
      href: "product/speaker",
    },
  ];
  

  return (
    <div className="container  p-[20px]">
      <div className="font-semibold text-[25px] lg:text-[55px] leading-[40.5px] lg:leading-[82.5px] text-center">
      <p>CHOOSE CATEGORY YOU ARE <br /> INTERESTED IN</p>  
      </div>
      <div className="grid xl:grid-cols-4  lg:grid-cols-3 md:md:grid-cols-2  grid-cols-1 items-center  gap-4  pt-4 ">
      {displayedProducts.map((product, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="max-sm:w-[178px] max-sm:h-[178px]">
                <Image
                  src={product.src}
                  width={300}
                  height={300}
                  alt="blog-list"
                />
              </div>
              <div className="p-5 text-center">
                <Link href={product.href}>
                  <div className="mb-2 ">
                   <h5 className="text-2xl  leading-[37.5px] font-semibold  tracking-tight bg-[#facc15] inline-block hover:text-transparent bg-clip-text max-sm:text-[16px] max-sm:leading-[24px]">{product.name}</h5> 
                  </div>
                  
                </Link>
              </div>
            </div>
          ))}
      </div>
      
    </div>
  );
};

export default Category;
