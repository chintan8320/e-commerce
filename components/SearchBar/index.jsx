import React, { useState } from "react";
import RangeSlider from "@components/RangeSlider";

const SearchBar = ({setMinPrice, setSearchQuery, searchQuery, setMaxPrice, maxPrice, minPrice}) => {

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
        

        <div className="mt-14 mb-10">
          <div className="mt-10 font-medium text-base leading-[37.5px]">
            Range Slider
          </div>
          <div className="mt-10">
            <RangeSlider maxPrice = {maxPrice}
                setMaxPrice = {setMaxPrice}
                minPrice = {minPrice}
                setMinPrice = {setMinPrice}
                />
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
            

            {/* Range slider */}
            <div className="mb-6">
              <div className="font-medium text-base leading-[37.5px]">
                Range Slider
              </div>
              <div className="mt-4">
                <RangeSlider
                maxPrice = {maxPrice}
                setMaxPrice = {setMaxPrice}
                minPrice = {minPrice}
                setMinPrice = {setMinPrice}
                 />
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        className=" right-4 p-2 bg-gradient-to-b from-yellow-400 to-orange-600 text-[#000000] rounded xl:hidden "
        onClick={openDrawer}
      >
        Filter
      </button>
    </div>
  );
};

export default SearchBar;
