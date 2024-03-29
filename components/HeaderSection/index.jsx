import React from "react";

function HeaderSection({ pageName }) {
  return (
    <div className="aboutus flex items-center justify-center h-[269px]">
      <div className="absolute bg-[#FFFFFF80] opacity-[0.5] h-[269px] w-full"></div>
      <div className="w-[301px] h-[101px]">
        <div className="absolute flex bg-black opacity-[0.2] h-[101px] w-[301px]"></div>
        <h1 className="relative m-2 text-center font-semibold text-[50px] text-[#facc15] h-[101px]">
          {pageName}
        </h1>
      </div>
    </div>
  );
}

export default HeaderSection;
