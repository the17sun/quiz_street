import React, { useState } from "react";
import { services } from "../../data/dummy";

const Services = () => {
  return (
    <>
      <div>
        <div
          className="
          px-[15px]
          py-[40px]
          md:p-0
          grid 
          gap-[60px]
          md:gap-[15px]
          lg:gap-[50px]
          xl:gap-[60px]
          fullHD:gap-[90px]
          grid-cols-[12fr]
          md:grid-cols-[4fr_4fr_4fr]
          mb-[25px]">
          {services.map((service, index) => (
            <div
              className="bg-gradient-to-b from-gray-100 to-gray-50 flex flex-col items-center shadow-xl 
              rounded-[50px]
              ">
              <img
                className="rounded-t-[50px]
                block
                sm:hidden
                md:block
                h-[175px]
                md:h-[125px]
                lg:h-[180px]
                xl:h-[210px]
                fullHD:h-[255px]
                w-full
                "
                src={service.pic}
                alt=""
              />
              <span
                className="flex items-center tracking-wide font-medium text-center text-[#0D4C93] 
                text-[14px] leading-[16px] px-[30px] mt-[22px]
                lg:text-[17px] lg:leading-[18px] lg:px-[33px] lg:mt-[25px]
                xl:text-[18px] xl:leading-[20px] xl:px-[35px] xl:mt-[27px]
                fullHD:text-[20px] fullHD:leading-[23px] fullHD:px-[40px] fullHD:mt-[30px]
                ">
                {service.title}
              </span>
              <span
                className="flex items-center opacity-[0.9] font-light text-center 
                text-[12px] leading-[19px] px-[25px] my-[10px] 
                lg:text-[14px] lg:leading-[21px] lg:px-[30px] lg:my-[12px] 
                xl:text-[14px] xl:leading-[23px] xl:px-[35px] xl:my-[13px] 
                fullHD:text-[16px] fullHD:leading-[26px] fullHD:px-[40px] fullHD:my-[15px] 
                ">
                {service.text}
              </span>
              <button
                className="
                text-white font-normal 
                bg-gradient-to-r from-[#0D4C93] to-[#00C9C9] w-fit rounded-full tracking-wide translate-y-[50%]

                text-[16px] leading-[17px] py-[10px] px-[42px] 
                lg:text-[17px] lg:leading-[18px] lg:py-[12px] lg:px-[45px] 
                xl:text-[18px] xl:leading-[20px] xl:py-[13px] xl:px-[55px] 
                fullHD:text-[20px] fullHD:leading-[23px] fullHD:py-[15px] fullHD:px-[75px] 
                ">
                Подробнее
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
