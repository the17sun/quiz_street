import React, { useState } from "react";
import { partners } from "../../data/dummy";

const About = () => {
  return (
    <>
      <div className="relative">
        <div
          className="font-medium text-[#0D4C93] 
          w-full flex justify-center 
          text-[23px] leading-[26px] mb-[23px] mt-[15px] md:mt-0
          md:text-[25px] md:leading-[30px] md:mb-[50px]
          lg:text-[27px] lg:leading-[31px] lg:mb-[54px]
          xl:text-[30px] xl:leading-[35px] xl:mb-[60px]
          fullHD:text-[40px] fullHD:leading-[47px] fullHD:mb-[75px]">
          ПАРТНЕРЫ
        </div>
        <div
          className="w-[35px] h-[35px] hidden md:flex
          lg:w-[50px] lg:h-[50px]  rounded-full bg-gradient-to-b from-[#0D4C93] to-[#00C9C9]
        absolute left-[-40px] top-[50%] translate-x-[-50%] z-10 items-center justify-center">
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.084807 9.50007C0.084807 9.15955 0.214824 8.81908 0.474312 8.55946L8.64397 0.389891C9.16366 -0.129801 10.0063 -0.129801 10.5257 0.389891C11.0452 0.909372 11.0452 1.75179 10.5257 2.27153L3.29677 9.50007L10.5255 16.7287C11.045 17.2483 11.045 18.0907 10.5255 18.6101C10.006 19.1301 9.16341 19.1301 8.64372 18.6101L0.47406 10.4407C0.21453 10.1809 0.084807 9.84046 0.084807 9.50007Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          className="w-[35px] h-[35px] hidden md:flex
          lg:w-[50px] lg:h-[50px]  rounded-full bg-gradient-to-b from-[#0D4C93] to-[#00C9C9]
        absolute right-[-40px] top-[50%] translate-x-[50%] z-10 items-center justify-center">
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.9152 9.50007C10.9152 9.15955 10.7852 8.81908 10.5257 8.55946L2.35603 0.389891C1.83634 -0.129801 0.993748 -0.129801 0.474267 0.389891C-0.0452145 0.909372 -0.0452145 1.75179 0.474267 2.27153L7.70323 9.50007L0.47452 16.7287C-0.0449613 17.2483 -0.0449613 18.0907 0.47452 18.6101C0.994001 19.1301 1.83659 19.1301 2.35628 18.6101L10.5259 10.4407C10.7855 10.1809 10.9152 9.84046 10.9152 9.50007Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          className="grid 
          lg:gap-[10px] xl:gap-[15px] 

          sm:grid-cols-[6fr_6fr]
          lg:grid-cols-[3fr_3fr_3fr_3fr]
          ">
          {partners.map((partner) => (
            <div className="p-[15px]">
              <div className="border-1 border-solid border-[#ECECEC] rounded-[25px] px-[60px]">
                <img className="w-full" src={partner.pic} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
