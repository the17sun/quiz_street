import React, { useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { products } from "../../data/dummy";

const Production = () => {
  return (
    <>
      <div className="p-[15px] md:p-0">
        <div
          className="font-medium text-[#0D4C93] 
          w-full flex justify-center 
          text-[23px] leading-[26px] mb-[23px] mt-[15px] md:mt-0
          md:text-[25px] md:leading-[30px] md:mb-[25px]
          lg:text-[27px] lg:leading-[31px] lg:mb-[26px]
          xl:text-[30px] xl:leading-[35px] xl:mb-[30px]
          fullHD:text-[40px] fullHD:leading-[47px] fullHD:mb-[55px]">
          ПРОДУКЦИЯ
        </div>
        <div
          className="
          grid 
          gap-[20px]
          md:gap-[30px]
          lg:gap-[40px]
          xl:gap-[50px]
          fullHD:gap-[60px]
          md:grid-cols-[6fr_6fr]
          lg:grid-cols-[4fr_4fr_4fr]
          ">
          {products.map((product, index) => (
            <ProductCard product={product}></ProductCard>
          ))}
        </div>
        <div
          className="font-normal text-[#0D4C93] 
          text-[14px] leading-[18px] mb-[42px] mt-[42px] 
          md:text-[18px] md:leading-[20px] md:mb-[45px] md:mt-[45px] 
          xl:text-[20px] xl:leading-[23px] xl:mb-[50px] xl:mt-[50px] 
          fullHD:text-[24px] fullHD:leading-[28px] fullHD:mb-[55px] fullHD:mt-[55px] 
          w-full justify-center flex items-center">
          Перейти в каталог нашей продукции
          <button
            className="rounded-full flex items-center justify-center 
            w-[22px] h-[22px] ml-[15px] 
            md:w-[23px] md:h-[23px] md:ml-[16px] 
            xl:w-[24px] xl:h-[24px] xl:ml-[18px] 
            fullHD:w-[26px] fullHD:h-[26px] fullHD:ml-[20px] 
            border-2 border-solid border-[#0D4C93]">
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.39661 13.6344L8.20606 7.82493C8.65688 7.37176 8.65688 6.63981 8.20606 6.18664L2.39661 0.377185C1.96208 0.00423546 1.31954 0.00423543 0.885005 0.377185C0.39815 0.794314 0.341255 1.52861 0.758383 2.01547L5.74284 6.99999L0.758324 11.9961C0.307504 12.4493 0.307504 13.1812 0.758324 13.6344C1.21149 14.0852 1.9435 14.0852 2.39661 13.6344Z"
                fill="#0D4C93"
              />
            </svg>
          </button>
        </div>
        <div
          className="font-medium text-[#0D4C93] 
          text-[23px] leading-[26px] mb-[23px] mt-[15px] md:mt-0
          md:text-[25px] md:leading-[30px] md:mb-[25px]
          lg:text-[27px] lg:leading-[31px] lg:mb-[26px]
          xl:text-[30px] xl:leading-[35px] xl:mb-[30px]
          fullHD:text-[40px] fullHD:leading-[47px] 
          w-full flex justify-center">
          УСЛУГИ
        </div>
      </div>
    </>
  );
};

export default Production;
