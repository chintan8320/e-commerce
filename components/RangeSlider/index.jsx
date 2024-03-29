import React, { useState, useEffect } from 'react';

const RangeSlider = () => {
    const [minPrice, setMinPrice] = useState(70);
    const [maxPrice, setMaxPrice] = useState(2500);

    const min = 70;
    const max = 2500;

    const handleMinPriceChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice - 70);
        setMinPrice(value);
    };

    const handleMaxPriceChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice + 70);
        setMaxPrice(value);
    };

    
    const [minThumb, setMinThumb] = useState(((minPrice - min) / (max - min)) * 100);
    const [maxThumb, setMaxThumb] = useState(100 - ((maxPrice - min) / (max - min)) * 100);
    useEffect(() => {
        setMinThumb(((minPrice - min) / (max - min)) * 100);
        setMaxThumb(100 - ((maxPrice - min) / (max - min)) * 100);
    }, [minPrice, maxPrice]);

    return (
        <div className="flex justify-center items-center">
            <div className="relative max-w-xl w-full">
                <div>
                    <input
                        type="range"
                        step="70"
                        min={min}
                        max={max}
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                    />
                    <input
                        type="range"
                        step="70"
                        min={min}
                        max={max}
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                    />
                    <div className="relative z-10 h-2">
                        <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
                        <div
                            className="absolute z-20 top-0 bottom-0 rounded-md bg-gradient-to-b from-yellow-400 to-orange-600"
                            style={{ right: `${maxThumb}%`, left: `${minThumb}%` }}
                        ></div>
                        <div
                            className="absolute z-30 w-6 h-6 top-0 left-0 bg-gradient-to-b from-yellow-400 to-orange-600 rounded-full -mt-2"
                            style={{ left: `${minThumb}%` }}
                        ></div>
                        <div
                            className="absolute z-30 w-6 h-6 top-0 right-0 bg-gradient-to-b from-yellow-400 to-orange-600 rounded-full -mt-2"
                            style={{ right: `${maxThumb}%` }}
                        ></div>
                    </div>
                </div>
                <div className='flex justify-between mt-1.5'>
                    <div className="flex items-center justify-center pt-5 space-x-4 text-sm text-gray-700">
                        <span>Price: {minPrice}RS - {maxPrice}RS</span>
                    </div>
                    <div className='flex items-center mt-4'>
                        FILTER
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RangeSlider;
