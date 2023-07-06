import React, { useState } from "react";
import { services } from "../../data/dummy";

const Services = () => {
  return (
    <>
      <div className="relative">
        <div
          className="
          w-[35px] h-[35px] 
          lg:w-[50px] lg:h-[50px] 
          rounded-full bg-gradient-to-b from-[#0D4C93] to-[#00C9C9]
        absolute left-0 top-[40%] translate-x-[-50%] z-10 flex items-center justify-center">
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
          className="
          w-[35px] h-[35px] 
          lg:w-[50px] lg:h-[50px] 
          rounded-full bg-gradient-to-b from-[#0D4C93] to-[#00C9C9]
          absolute right-0 top-[40%] translate-x-[50%] z-10 flex items-center justify-center">
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
          className="font-medium text-[#0D4C93] 
          w-full flex justify-center 
          text-[23px] leading-[26px] mb-[23px] mt-[15px] md:mt-0
          md:text-[25px] md:leading-[30px] md:mb-[50px]
          lg:text-[27px] lg:leading-[31px] lg:mb-[54px]
          xl:text-[30px] xl:leading-[35px] xl:mb-[60px]
          fullHD:text-[40px] fullHD:leading-[47px] fullHD:mb-[75px]">
            НОВОСТИ
        </div>
        <div 
          className="grid 
          gap-[15px] mt-[100px]
          md:gap-[15px] md:mt-[100px]
          lg:gap-[50px] lg:mt-[110px]
          xl:gap-[70px] xl:mt-[125px]
          fullHD:gap-[90px] fullHD:mt-[150px]
          grid-cols-[12fr]
          md:grid-cols-[4fr_4fr_4fr]
          "
          >
          {services.map((service, index) => (
            <div
              className={ `bg-gradient-to-b from-gray-100 to-gray-50  
                ${index === 0 ? 'flex' : 'hidden'} md:flex flex-col items-center relative
                rounded-[15px] 
                md:rounded-[15px] 
                lg:rounded-[20px] 
                xl:rounded-[30px] 
                fullHD:rounded-[50px] 
                `}>
              <img
                className=" absolute translate-y-[-50%]
                w-[95%] rounded-[40px] p-[7px] 
                block
                sm:hidden
                md:block
                md:w-auto
                md:h-[150px] md:rounded-[40px] md:p-[7px] 
                lg:h-[180px] lg:rounded-[50px] lg:p-[10px] 
                xl:h-[220px] xl:rounded-[60px] xl:p-[15px] 
                fullHD:h-[275px] fullHD:rounded-[75px] fullHD:p-[25px] 
                "
                src={service.pic}
                alt=""
              />
              <span
                className="flex items-center tracking-wide font-normal text-center text-[#0D4C93] 
                text-[16px] leading-[17px] px-[18px] mt-[95px] sm:mt-[50px]
                md:text-[15px] md:leading-[17px] md:px-[18px] md:mt-[85px]
                lg:text-[16px] lg:leading-[18px] lg:px-[20px] lg:mt-[100px]
                xl:text-[17px] xl:leading-[20px] xl:px-[25px] xl:mt-[120px]
                fullHD:text-[20px] fullHD:leading-[24px] fullHD:px-[40px] fullHD:mt-[140px]
                ">
                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
              </span>
              <span
                className="flex items-center tracking-wide font-normal text-center text-[#0D4C93] 
                text-[15px] leading-[17px] px-[18px] mt-[12px]
                md:text-[15px] md:leading-[17px] md:px-[18px] md:mt-[12px]
                lg:text-[16px] lg:leading-[18px] lg:px-[20px] lg:mt-[13px]
                xl:text-[17px] xl:leading-[20px] xl:px-[25px] xl:mt-[15px]
                fullHD:text-[18px] fullHD:leading-[24px] fullHD:px-[40px] fullHD:mt-[25px]
                ">
                26.07.2021
              </span>
              <span
                className="flex items-center opacity-[0.9] font-light text-center 
                text-[12px] leading-[18px] px-[18px] my-[12px] 
                md:text-[12px] md:leading-[18px] md:px-[18px] md:my-[12px] 
                lg:text-[13px] lg:leading-[20px] lg:px-[20px] lg:my-[13px] 
                xl:text-[15px] xl:leading-[24px] xl:px-[25px] xl:my-[15px] 
                fullHD:text-[16px] fullHD:leading-[26px] fullHD:px-[40px] fullHD:my-[20px] 
                ">
                С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский
                Специализированный Научно-Практический Медицинский Центр
                Урологии) при поддержке компаний Ethicon Endo Surgery
                (Johnson&Johnson) и ИП ООО «Medical Online Services» был...
              </span>
              <button
                className="
                bg-gradient-to-r from-[#0D4C93] to-[#00C9C9] w-fit rounded-full tracking-wide translate-y-[50%] text-white font-normal 
                text-[15px] leading-[17px] py-[7px] px-[50px] 
                md:text-[15px] md:leading-[17px] md:py-[7px] md:px-[50px] 
                lg:text-[16px] lg:leading-[18px] lg:py-[10px] lg:px-[55px] 
                xl:text-[18px] xl:leading-[20px] xl:py-[12px] xl:px-[65px] 
                fullHD:text-[20px] fullHD:leading-[23px] fullHD:py-[15px] fullHD:px-[75px] 
                ">
                Подробнее
              </button>
            </div>
          ))}
        </div>
        <div
          className="grid 
          grid-cols-[12fr]
          md:grid-cols-[6fr_6fr]
          gap-[25px] mt-[45px]
          md:gap-[75px] md:mt-[50px]
          ">
          <div
            className="font-normal text-[#00C9C9] 
            text-[14px] leading-[18px] mb-[15px] mt-[15px] 
            md:text-[18px] md:leading-[20px] md:mb-[45px] md:mt-[45px] 
            xl:text-[20px] xl:leading-[23px] xl:mb-[50px] xl:mt-[50px] 
            fullHD:text-[24px] fullHD:leading-[28px] fullHD:mb-[55px] fullHD:mt-[55px] 
            w-full justify-center flex items-center 
          ">
            Посмотреть все Новости
            <button
              className="rounded-full flex items-center justify-center 
              w-[22px] h-[22px] ml-[15px] 
              md:w-[23px] md:h-[23px] md:ml-[16px] 
              xl:w-[24px] xl:h-[24px] xl:ml-[18px] 
              fullHD:w-[26px] fullHD:h-[26px] fullHD:ml-[20px] 
              border-2 border-solid border-[#00C9C9]">
              <svg
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.39661 13.1643L8.20606 7.55166C8.65688 7.11384 8.65688 6.40668 8.20606 5.96887L2.39661 0.356175C1.96208 -0.00414218 1.31954 -0.00414221 0.885006 0.356175C0.39815 0.759176 0.341256 1.4686 0.758385 1.93897L5.74284 6.75466L0.758325 11.5816C0.307505 12.0194 0.307505 12.7265 0.758325 13.1643C1.21149 13.5999 1.9435 13.5999 2.39661 13.1643Z"
                  fill="#00C9C9"
                />
              </svg>
            </button>
          </div>
          <div
          className="font-normal text-[#0D4C93] 
          text-[14px] leading-[18px] mb-[15px] mt-[15px] 
          md:text-[18px] md:leading-[20px] md:mb-[45px] md:mt-[45px] 
          xl:text-[20px] xl:leading-[23px] xl:mb-[50px] xl:mt-[50px] 
          fullHD:text-[24px] fullHD:leading-[28px] fullHD:mb-[55px] fullHD:mt-[55px] 
          w-full justify-center flex items-center">
          Перейти в каталог продукции
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
        </div>
      </div>
    </>
  );
};

export default Services;
