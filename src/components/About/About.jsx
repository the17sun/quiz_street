import React, { useState } from "react";
import logo from "../../data/logo.png";

const About = () => {
    return (
        <>
            <div className='relative p-[15px] lg:p-0'>
                <div
                    className='font-medium text-[#0D4C93] 
          w-full flex justify-center 
          text-[23px] leading-[26px] mb-[23px] mt-[15px] md:mt-0
          md:text-[25px] md:leading-[30px] md:mb-[50px]
          lg:text-[27px] lg:leading-[31px] lg:mb-[54px]
          xl:text-[30px] xl:leading-[35px] xl:mb-[60px]
          fullHD:text-[40px] fullHD:leading-[47px] fullHD:mb-[75px]'>
                    О КОМПАНИИ
                </div>
                <div className='lg:grid'>
                    <div
                        className='lg:absolute z-10 border-[#00C9C933] border-solid bg-white rounded-full 
            lg:translate-y-[-50px] 
            mx-auto lg:mx-0
            mb-[50px] lg:mb-0
            border-[25px] w-[300px] h-[300px] p-[12px] 
            lg:border-[25px] lg:w-[400px] lg:h-[400px] lg:p-[12px] 
            xl:border-[35px] xl:w-[500px] xl:h-[500px] xl:p-[13px] 
            fullHD:border-[40px] fullHD:w-[600px] fullHD:h-[600px] fullHD:p-[15px] 
            '>
                        <div
                            className='
              border-[#0D4C9333] border-solid bg-white w-full h-full p-[12.5px] rounded-full
              border-[25px] 
              lg:border-[25px] 
              xl:border-[35px] 
              fullHD:border-[40px] 
              '>
                            <div
                                className='rounded-full flex justify-center items-center border-[#00C9C933] border-solid bg-white w-full h-full 
                p-[25px] border-[25px] 
                lg:p-[25px] lg:border-[25px] 
                xl:p-[30px] xl:border-[35px] 
                fullHD:p-[35px] fullHD:border-[40px] 
                '>
                                <img src={logo} alt='' />
                            </div>
                        </div>
                    </div>
                    <div
                        className='
            lg:grid-cols-[4.9fr_7.1fr]
            bg-gradient-to-b from-gray-100 to-gray-50 grid
            w-[calc(100%)] h-fit translate-x-0 rounded-[35px] 
            lg:w-[calc(100%-30px)] lg:h-[300px] lg:translate-x-[30px] lg:rounded-[80px] 
            xl:w-[calc(100%-50px)] xl:h-[400px] xl:translate-x-[50px] xl:rounded-[100px] 
            fullHD:w-[calc(100%-75px)] fullHD:h-[500px] fullHD:translate-x-[75px] fullHD:rounded-[150px] 
            '>
                        <div></div>
                        <div
                            className='flex flex-col 
              py-[20px] pr-[25px] pl-[25px]
              lg:py-[30px] lg:pr-[30px] lg:pl-[5px]
              xl:py-[30px] xl:pr-[30px] xl:pl-[30px]
              fullHD:py-[50px] fullHD:pr-[45px] fullHD:pl-[25px]
              '>
                            <span
                                className='font-light tracking-wide
                text-[15px] leading-[25px]
                lg:text-[15px] lg:leading-[25px]
                xl:text-[17px] xl:leading-[30px]
                fullHD:text-[20px] fullHD:leading-[35px]
                '>
                                Группа компаний MEDOL создавалась
                                высококвалифицированными специалистами в сфере
                                медицины, инженерии и экономики, за плечами
                                которых значительный опыт на рынке высоких
                                медицинских технологий, которая имеет свои
                                представительства в разных уголках Земли. В 2011
                                году MEDOL зарегистрировал в Узбекистане ИП ООО
                                “Medical Online Services". Цель компании
                                построить прозрачный долгосрочный бизнес,
                                принести пользу обществу путем развития и
                                внедрения передовых технологий в систему
                                здравоохранения Республики Узбекистан.
                            </span>
                            <button
                                className='
                  text-white font-normal 
                  bg-gradient-to-r from-[#0D4C93] to-[#00C9C9] w-full sm:w-fit rounded-full tracking-wide
                  text-[15px] leading-[17px] py-[12px] px-[50px] mt-[20px]
                  lg:text-[15px] lg:leading-[17px] lg:py-[12px] lg:px-[50px] lg:mt-[20px]
                  xl:text-[17px] xl:leading-[20px] xl:py-[13px] xl:px-[55px] xl:mt-[30px]
                  fullHD:text-[20px] fullHD:leading-[23px] fullHD:py-[15px] fullHD:px-[75px] fullHD:mt-[30px]
                  '>
                                Узнать Больше
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
