import React from "react";
import Input from "@components/input";
import Sentsvg from "@utilis/sentBtn";

const Newsletter = () => {
  return (
    <div className="container pb-[40px] mt-14">
      <div className="text-center">
        <p className="text-[#facc15] font-medium text-[20px] leading-8 max-sm:flex max-sm:leading-[22.5px] max-sm:text-[15px] max-sm:justify-center">
          NEWSLATTER SIGNUP
        </p>

        <h5 className="font-bold text-[55px] leading-[82.5px] text-center mt-4 max-sm:text-[23px] max-sm:leading-[35.5px]">
          SIGN UP FOR EXCLUSIVE<br/> OFFERS FROM US
        </h5>
      </div>
      <div className="formsletter mt-6  max-sm:h-[74px]">
        <div className="container">
          <form className="flex justify-between px-[2rem] max-sm:flex max-sm:flex-col max-sm:px-[1px] max-sm:text-center">
            <label className="font-semibold text-[32px] max-sm:text-[10px] max-sm:leading-[15px]">
              SIGN UP FOR NEWSLETTER
            </label>
            <div className="flex max-sm:justify-center">
              <Input
                placeholder={"Search..."}
                type={"text"}
                className={
                  "p-[20px] border border-black-600 h-[53px] w-[100%] bg-gradient-to-r from-[rgba(0,0,0,0.1)] via-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.1)] max-sm:w-[186px] max-sm:h-[19px]"
                }
              />
              <button className="bg-[#facc15] flex items-center justify-center w-[78px]">
                <Sentsvg />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
