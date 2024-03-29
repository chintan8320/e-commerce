import React, { useState } from "react";
import { SearchIcon } from "@utilis/searchIcons";
import CustomSvg from "@utilis/customSideArrow";
import RangeSlider from "@components/RangeSlider";

const SearchBar = () => {
  const ProdCategory = [
    "Napkin ring",
    "Soap Dish",
    "Double Soap Dish",
    "Soap Dish With Dispenser",
    "Soap Dish With Tumbler",
    "Roobe Hook",
    "Paper Holder",
    "Towel rack",
    "Towel Rod",
    "Dispenser",
    "Tumbler",
  ];

  const FilterColor = [
    "Round CP Finish",
    "Round Gold PVD",
    "Round Rose Gold PVD",
    "Square CP Finish",
    "Square Gold PVD",
    "Square Rose Gold PVD",
    "Square Matt Black Finish",
    "Crystal CP Finish",
    "Brezza CP Finish",
    "Royal CP Finish",
    "Square Diamond",
    "Round diamond",
    "Flora Glossy Finish",
    "Flora Matt Finish",
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="relative">
      <div className="md:hidden max-sm:hidden xl:block ">
        {/* Search bar section */}
        <div>
          <div className="font-medium text-base leading-[37.5px]">Search</div>
          <div className="text-black bg-white flex items-center justify-center">
            <div className="border rounded-[35px] mt-[10px] bg-[#ECECEC] flex">
              <input
                type="text"
                className="px-4 py-2 rounded-[35px] h-[60px] w-[324px] bg-[#ECECEC] max-sm:py-[5px] max-sm:w-[230px]"
                placeholder="Search Products..."
              />
              <div className="flex items-center mr-4">
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Range slider section */}
        <div className="mt-14 mb-10">
          <div className="mt-10 font-medium text-base leading-[37.5px]">
            Range Slider
          </div>
          <div className="mt-10">
            <RangeSlider />
          </div>
        </div>
      </div>
      {/* Side Drawer for sm and md screen sizes */}
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 h-full w-64 bg-white p-4 overflow-y-auto">
            <button className="mb-4" onClick={closeDrawer}>
              Close Drawer
            </button>
            {/* Search bar section */}
            <div>
              <div className="font-medium text-base leading-[37.5px]">
                Search
              </div>
              <div className="text-black bg-white flex items-center justify-center">
                <div className="border rounded-[35px] mt-[10px] bg-[#ECECEC] flex">
                  <input
                    type="text"
                    className="px-4 py-2 rounded-[35px] h-[60px] w-[194px] bg-[#ECECEC] max-sm:py-[5px] max-sm:w-[230px]"
                    placeholder="Search Products..."
                  />
                  <div className="flex items-center mr-4">
                    <SearchIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* Range slider */}
            <div className="mb-6">
              <div className="font-medium text-base leading-[37.5px]">
                Range Slider
              </div>
              <div className="mt-4">
                <RangeSlider />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Button to open the side drawer on sm and md screen sizes */}
      <button
        className=" right-4 p-2 rounded bg-gradient-to-b from-yellow-400 to-orange-600 text-[#000000] rounded xl:hidden "
        onClick={openDrawer}
      >
        Filter
      </button>
    </div>
  );
};

export default SearchBar;
