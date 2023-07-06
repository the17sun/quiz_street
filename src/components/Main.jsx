import React, { useState } from "react";
import mainPic from "../data/main.png";
import "./components.css";
import { slides } from "../data/dummy";

const Main = () => {
    const [active, setActive] = useState(1);

    return (
        <>
            <div
                className='w-full relative 
        mt-[15px] md:mt-[20px] lg:mt-[25px] xl:mt-[30px] fullHD:mt-[70px] min-h-[400px]'>
                {slides.map((slide) => (
                    <div
                        className={`flex flex-col-reverse md:grid w-full absolute left-0 top-0 transition-all 
            grid-cols-[6fr_6fr] p-[15px] md:p-0 
            ${
                slide.id === active
                    ? "opacity-[4] translate-y-[30px] duration-700"
                    : "opacity-[0] translate-y-0"
            }`}>
                        {/* {slide.id === active && slide.id} */}
                        <div className='flex flex-col xl:pt-[30px] fullHD:pt-[50px]'>
                            <span
                                className='text-[#0D4C93] font-medium tracking-wide 
                w-[100%] md:w-[50%]
                text-[27px] leading-[30px] 
                md:text-[29px] md:leading-[33px] 
                lg:text-[33px] lg:leading-[40px] 
                xl:text-[36px] xl:leading-[45px] 
                fullHD:text-[50px] fullHD:leading-[60px] 
                '>
                                {slide.title}
                            </span>
                            <span
                                className='text-[#363535] font-normal 
              text-[16px] leading-[26px] mt-[17px]
              md:text-[15px] md:leading-[26px] md:mt-[17px]
              lg:text-[18px] lg:leading-[30px] lg:mt-[20px]
              xl:text-[19.5px] xl:leading-[33px] xl:mt-[22.5px]
              fullHD:text-[24px] fullHD:leading-[40px] fullHD:mt-[30px]
              '>
                                {slide.text}
                            </span>
                            <button
                                className='
                w-full text-[16px] leading-[18px] mt-[27px] py-[12px] px-[44px] 
                md:w-fit md:text-[16px] md:leading-[18px] md:mt-[27px] md:py-[12px] md:px-[44px] 
                lg:text-[17px] lg:leading-[20px] lg:mt-[30px] lg:py-[13px] lg:px-[45px] 
                xl:text-[19px] xl:leading-[23px] xl:mt-[35px] xl:py-[15px] xl:px-[50px] 
                fullHD:text-[24px] fullHD:leading-[28px] fullHD:mt-[45px] fullHD:py-[20px] fullHD:px-[70px] 
                text-white font-normal 
                bg-gradient-to-r from-[#0D4C93] to-[#00C9C9] rounded-full tracking-wide'>
                                Подробнее
                            </button>
                        </div>
                        <div>
                            <img
                                className='h-full mb-[50px] md:mb-0 md:h-[90%] fullHD:h-full'
                                src={mainPic}
                                alt=''
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className='absolute bottom-[65px] left-[50%] translate-x-[-50%]'>
                {slides.map((dot) => (
                    <button
                        className={`border-1 border-solid border-[#00C9C9] rounded-full
            mr-2 w-[16px] h-[16px] 
            lg:mr-2 lg:w-[16px] lg:h-[16px] 
            xl:mr-4 xl:w-[18px] xl:h-[18px] 
            fullHD:mr-5 fullHD:w-[22px] fullHD:h-[22px] 
            ${dot.id === active ? "bg-[#00C9C9]" : "bg-white"}`}
                        onClick={() => setActive(dot.id)}></button>
                ))}
            </div>
        </>
    );
};

export default Main;
