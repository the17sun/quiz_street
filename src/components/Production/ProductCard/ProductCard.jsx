import React, { useState } from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      className="bg-gradient-to-b from-gray-100 to-gray-50 flex flex-col items-center rounded-[40px]
      pt-[15px] pb-[24px] px-[24px] 
      md:pt-[17px] md:pb-[26px] md:px-[26px] 
      lg:pt-[20px] lg:pb-[30px] lg:px-[30px] 
      xl:pt-[25px] xl:pb-[35px] xl:px-[35px] 
      fullHD:pt-[30px] fullHD:pb-[45px] fullHD:px-[50px] 
      ">
      <img className="
      h-[125px] p-[10px]
      xl:h-[150px] xl:p-[12px]
      fullHD:h-[200px] fullHD:p-[15px]
      " src={product.pic} alt="" />
      <span
        className="flex items-center 
        h-[55px] text-[15px] leading-[17px] p-[17px]
        lg:h-[65px] lg:text-[17px] lg:leading-[19px] lg:p-[19px]
        xl:h-[80px] xl:text-[20px] xl:leading-[22px] xl:p-[22px]
        fullHD:h-[100px] fullHD:text-[24px] fullHD:leading-[28px] fullHD:p-[25px]
        tracking-wide font-normal text-center 
        ">
        {product.title}
      </span>
      <button
        className="
        text-[14px] leading-[16px] py-[14px] px-[44px] 
        md:text-[13px] md:leading-[16px] md:py-[13px] md:px-[40px] 
        lg:text-[14px] lg:leading-[17px] lg:py-[14px] lg:px-[45px] 
        xl:text-[16px] xl:leading-[20px] xl:py-[16px] xl:px-[50px] 
        fullHD:text-[20px] fullHD:leading-[23px] fullHD:py-[20px] fullHD:px-[60px] 
        text-white font-normal bg-gradient-to-r from-[#0D4C93] to-[#00C9C9] w-fit rounded-full tracking-wide">
        Посмотреть Все
      </button>
    </div>
  );
};

export default ProductCard;
