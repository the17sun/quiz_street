/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../../data/logo.png";

const About = () => {
  return (
    <div className="flex flex-col p-[15px] md:p-0">
      <div
        className="relative grid 
        lg:gap-[20px] 
        xl:gap-[25px] 
        fullHD:gap-[30px] 
        
        grid-cols-[12fr]
        lg:grid-cols-[6.5fr_5.5fr]
        fullHD:grid-cols-[6.5fr_5.5fr]
        ">
        <div>
          <div
            className="
            grid 
            mb-[25px] md:mb-0
            grid-cols-[12fr]
            md:grid-cols-[3fr_4.5fr_4.5fr]
            ">
            <div className="mb-[25px] md:mb-0">
              <span
                className="font-medium text-[#595959] 
                text-[20px] leading-[22px] 
                lg:text-[21px] lg:leading-[23px] 
                xl:text-[24px] xl:leading-[26px] 
                fullHD:text-[26px] fullHD:leading-[28px] 
                tracking-wide">
                Контакты
              </span>
            </div>
            <div>
              <div
                className="flex items-center 
                gap-[12px] md:gap-[8px] lg:gap-[10px] xl:gap-[15px] fullHD:gap-[20px] mb-[25px]">
                <div
                  className="
                  w-9 h-9 xl:w-10 xl:h-10 fullHD:w-12 fullHD:h-12 
                  bg-white rounded-full flex items-center justify-center">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.5 0C7.50754 0 3.44592 4.06162 3.44592 9.054C3.44592 15.2497 11.5484 24.3454 11.8934 24.7295C12.2174 25.0904 12.7831 25.0898 13.1066 24.7295C13.4515 24.3454 21.554 15.2497 21.554 9.054C21.5539 4.06162 17.4924 0 12.5 0ZM12.5 13.6093C9.98816 13.6093 7.9447 11.5658 7.9447 9.054C7.9447 6.54219 9.98821 4.49873 12.5 4.49873C15.0117 4.49873 17.0552 6.54224 17.0552 9.05405C17.0552 11.5659 15.0117 13.6093 12.5 13.6093Z"
                      fill="#0D4C93"
                    />
                  </svg>
                </div>
                <div
                  className="text-[#5A5A5A] font-normal tracking-wide
                  text-[14px] leading-[17px] 
                  md:text-[12px] md:leading-[15px] 
                  xl:text-[13px] 
                  xl:leading-[16px]
                  fullHD:text-[16px] fullHD:leading-[19px]">
                  г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
                </div>
              </div>
              <div className="flex items-center 
                gap-[12px] md:gap-[8px] lg:gap-[10px] xl:gap-[15px] fullHD:gap-[20px] mb-[25px]">
                <div
                  className="w-9 h-9 xl:w-10 xl:h-10 fullHD:w-12 fullHD:h-12 
                  bg-white rounded-full flex items-center justify-center">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_0_282)">
                      <path
                        d="M20.9785 2.74023H2.02147C1.7103 2.74023 1.41898 2.81674 1.15543 2.94283L11.4551 13.2425L13.7636 11.0239C13.7636 11.0239 13.7637 11.0237 13.7638 11.0236C13.7638 11.0235 13.764 11.0234 13.764 11.0234L21.8449 2.94301C21.5813 2.81683 21.2898 2.74023 20.9785 2.74023Z"
                        fill="#0D4C93"
                      />
                      <path
                        d="M22.7977 3.89624L15.1932 11.5003L22.7974 19.1046C22.9235 18.841 23 18.5497 23 18.2385V4.76197C23 4.45098 22.9237 4.15971 22.7977 3.89624Z"
                        fill="#0D4C93"
                      />
                      <path
                        d="M0.202598 3.89575C0.076502 4.15931 0 4.45063 0 4.7618V18.2384C0 18.5494 0.0764121 18.8407 0.202418 19.1042L7.80693 11.5001L0.202598 3.89575Z"
                        fill="#0D4C93"
                      />
                      <path
                        d="M14.2403 12.453L11.9315 14.6718C11.7999 14.8034 11.6275 14.8692 11.4551 14.8692C11.2828 14.8692 11.1103 14.8034 10.9787 14.6718L8.75977 12.4529L1.15512 20.057C1.41872 20.1832 1.71022 20.2598 2.02148 20.2598H20.9785C21.2897 20.2598 21.581 20.1833 21.8446 20.0572L14.2403 12.453Z"
                        fill="#0D4C93"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_282">
                        <rect width="23" height="23" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className="text-[#5A5A5A] font-normal tracking-wide
                  text-[14px] leading-[17px] 
                  md:text-[12px] md:leading-[15px] 
                  xl:text-[13px] 
                  xl:leading-[16px]
                  fullHD:text-[16px] fullHD:leading-[19px]">
                  info@medol.uz
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center 
                gap-[12px] md:gap-[8px] lg:gap-[10px] xl:gap-[15px] fullHD:gap-[20px] mb-[25px]">
                <div
                  className="w-9 h-9 xl:w-10 xl:h-10 fullHD:w-12 fullHD:h-12 
                  bg-white rounded-full flex items-center justify-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_0_114)">
                      <path
                        d="M9.1099 12.89C7.01004 10.7902 6.5359 8.69031 6.42894 7.849C6.39905 7.61637 6.4791 7.38309 6.64552 7.21782L8.34483 5.51927C8.5948 5.26946 8.63916 4.88013 8.4518 4.58048L5.74618 0.379239C5.53889 0.0474371 5.11327 -0.0723136 4.76338 0.102722L0.419903 2.14834C0.136959 2.28767 -0.0294639 2.58829 0.00266119 2.90203C0.230247 5.0641 1.17283 10.379 6.39594 15.6025C11.619 20.826 16.9332 21.7682 19.0964 21.9958C19.4101 22.0279 19.7107 21.8615 19.8501 21.5785L21.8957 17.235C22.0701 16.8859 21.9511 16.4614 21.6207 16.2538L17.4195 13.5489C17.12 13.3613 16.7307 13.4054 16.4807 13.6551L14.7821 15.3544C14.6168 15.5208 14.3836 15.6009 14.1509 15.571C13.3096 15.464 11.2098 14.9899 9.1099 12.89Z"
                        fill="#0D4C93"
                      />
                      <path
                        d="M17.4483 11.7587C17.0293 11.7587 16.6897 11.4191 16.6897 11.0001C16.6861 7.85927 14.1409 5.31401 11 5.31045C10.581 5.31045 10.2414 4.97081 10.2414 4.55183C10.2414 4.13286 10.581 3.79321 11 3.79321C14.9785 3.7976 18.2025 7.02167 18.2069 11.0001C18.2069 11.4191 17.8673 11.7587 17.4483 11.7587Z"
                        fill="#0D4C93"
                      />
                      <path
                        d="M21.2414 11.7586C20.8224 11.7586 20.4828 11.419 20.4828 11C20.4769 5.76524 16.2348 1.52309 11 1.51724C10.581 1.51724 10.2414 1.1776 10.2414 0.758621C10.2414 0.339646 10.581 0 11 0C17.0724 0.00668947 21.9933 4.92764 22 11C22 11.2012 21.9201 11.3942 21.7778 11.5364C21.6356 11.6787 21.4426 11.7586 21.2414 11.7586Z"
                        fill="#0D4C93"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_114">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className="text-[#5A5A5A] font-normal tracking-wide
                  text-[14px] leading-[17px] 
                  md:text-[12px] md:leading-[15px] 
                  xl:text-[13px] 
                  xl:leading-[16px]
                  fullHD:text-[16px] fullHD:leading-[19px]">
                  +998 71 276-62-53 <br /> +998 71 276-62-54
                </div>
              </div>
              <button
                className="
                text-[16px] leading-[18px] py-[11px] 
                md:text-[15px] md:leading-[17px] md:py-[10px] 
                lg:text-[16px] lg:leading-[18px] lg:py-[11px] 
                xl:text-[18px] xl:leading-[20px] xl:py-[13px] 
                fullHD:text-[20px] fullHD:leading-[23px] fullHD:py-[15px] 

                text-white font-normal w-full
                bg-gradient-to-r from-[#0D4C93] to-[#00C9C9] rounded-full tracking-wide">
                Оставить Заявку
              </button>
            </div>
          </div>
          <div
            className="
            grid 
            md:gap-[40px] md:mt-[20px]
            lg:gap-[20px] lg:mt-[20px]
            xl:gap-[30px] xl:mt-[30px]
            fullHD:gap-[40px] fullHD:mt-[45px]
            grid-cols-[12fr] md:grid-cols-[3.6fr_8.4fr]
            mb-[30px] lg:mb-0
            ">
            <div className="mb-[25px] md:mb-0">
              <img className="w-[150px] md:w-auto" src={logo} alt="" />
            </div>
            <div
              className="text-[#585858] font-normal tracking-wide
              text-[15px] leading-[18px] 
              lg:text-[16px] lg:leading-[20px] 
              xl:text-[17px] xl:leading-[22px] 
              fullHD:text-[18px] fullHD:leading-[24px] 
              ">
              Наша цель – построить прозрачный, долгосрочный бизнес, приносить
              огромную пользу населению, путем решения глобальных вопросов.
              Внедряя инновационные технологии на рынок Узбекистана.
            </div>
          </div>
        </div>
        <div
          className="
          grid 
          grid-cols-[12fr]
          md:grid-cols-[4.25fr_4.25fr_3fr]
          ">
          <div className="flex flex-col">
            <span
              className="font-medium text-[#595959] tracking-wide
              mt-[15px] md:mt-0 
              text-[20px] leading-[22px] 
              lg:text-[21px] lg:leading-[23px] 
              xl:text-[24px] xl:leading-[26px] 
              fullHD:text-[26px] fullHD:leading-[28px]
            ">
              О Компании
            </span>
            <a
              href="#"
              className="font-light text-[#595959] 
              lg:text-[14px] lg:leading-[20px] lg:mt-[5px]
              xl:text-[15px] xl:leading-[22px] xl:mt-[6px]
              fullHD:text-[16px] fullHD:leading-[24px] fullHD:mt-[7px]
              tracking-wide 
              ">
              История
            </a>
            <a
              href="#"
              className="font-light text-[#595959] 
              lg:text-[14px] lg:leading-[20px] lg:mt-[5px]
              xl:text-[15px] xl:leading-[22px] xl:mt-[6px]
              fullHD:text-[16px] fullHD:leading-[24px] fullHD:mt-[7px]
              tracking-wide 
              ">
              Партнеры
            </a>
            <a
              href="#"
              className="font-light text-[#595959] 
              lg:text-[14px] lg:leading-[20px] lg:mt-[5px]
              xl:text-[15px] xl:leading-[22px] xl:mt-[6px]
              fullHD:text-[16px] fullHD:leading-[24px] fullHD:mt-[7px]
              tracking-wide 
              ">
              Вакансии
            </a>
          </div>
          <div className="flex flex-col">
            <span
              className="font-medium text-[#595959]
                mt-[15px] md:mt-0  
                text-[20px] leading-[22px] 
                lg:text-[21px] lg:leading-[23px]  
                xl:text-[24px] xl:leading-[26px] 
                fullHD:text-[26px] fullHD:leading-[28px] tracking-wide">
              Продукция
            </span>
            <a
              href="#"
              className="font-light text-[#595959] 
              lg:text-[14px] lg:leading-[20px] lg:mt-[5px]
              xl:text-[15px] xl:leading-[22px] xl:mt-[6px]
              fullHD:text-[16px] fullHD:leading-[24px] fullHD:mt-[7px]
              tracking-wide">
              Эндохирургия
            </a>
            <a
              href="#"
              className="font-light text-[#595959] 
              lg:text-[14px] lg:leading-[20px] lg:mt-[5px]
              xl:text-[15px] xl:leading-[22px] xl:mt-[6px]
              fullHD:text-[16px] fullHD:leading-[24px] fullHD:mt-[7px]
              tracking-wide 
              ">
              Аритмология
            </a>
            <a
              href="#"
              className="font-light text-[#595959] 
              lg:text-[14px] lg:leading-[20px] lg:mt-[5px]
              xl:text-[15px] xl:leading-[22px] xl:mt-[6px]
              fullHD:text-[16px] fullHD:leading-[24px] fullHD:mt-[7px]
              tracking-wide 
              ">
              Кардиохирургия
            </a>
            <a
              href="#"
              className="font-light text-[#595959] 
              lg:text-[14px] lg:leading-[20px] lg:mt-[5px]
              xl:text-[15px] xl:leading-[22px] xl:mt-[6px]
              fullHD:text-[16px] fullHD:leading-[24px] fullHD:mt-[7px]
              tracking-wide 
              ">
              Диагностика
            </a>
            <a
              href="#"
              className="font-light text-[#595959] 
              lg:text-[14px] lg:leading-[20px] lg:mt-[5px]
              xl:text-[15px] xl:leading-[22px] xl:mt-[6px]
              fullHD:text-[16px] fullHD:leading-[24px] fullHD:mt-[7px]
              tracking-wide 
              ">
              Анестезиология
            </a>
            <a
              href="#"
              className="font-light text-[#595959] 
              lg:text-[14px] lg:leading-[20px] lg:mt-[5px]
              xl:text-[15px] xl:leading-[22px] xl:mt-[6px]
              fullHD:text-[16px] fullHD:leading-[24px] fullHD:mt-[7px]
              tracking-wide 
              ">
              Нейрохирургия
            </a>
            <a
              href="#"
              className="font-light text-[#595959] 
              lg:text-[14px] lg:leading-[20px] lg:mt-[5px]
              xl:text-[15px] xl:leading-[22px] xl:mt-[6px]
              fullHD:text-[16px] fullHD:leading-[24px] fullHD:mt-[7px]
              tracking-wide 
              ">
              Диабет
            </a>
          </div>
          <div className="flex flex-col">
            <span
              className="font-medium text-[#595959] 
                mt-[15px] md:mt-0 
                text-[20px] leading-[22px] 
                lg:text-[21px] lg:leading-[23px] 
                xl:text-[24px] xl:leading-[26px] 
                fullHD:text-[26px] fullHD:leading-[28px] tracking-wide">
              Услуги
            </span>
            <a
              href="#"
              className="font-light text-[#595959] 
              lg:text-[14px] lg:leading-[20px] lg:mt-[5px]
              xl:text-[15px] xl:leading-[22px] xl:mt-[6px]
              fullHD:text-[16px] fullHD:leading-[24px] fullHD:mt-[7px]
              tracking-wide">
              Сервисы
            </a>
            <a
              href="#"
              className="font-light text-[#595959] 
              lg:text-[14px] lg:leading-[20px] lg:mt-[5px]
              xl:text-[15px] xl:leading-[22px] xl:mt-[6px]
              fullHD:text-[16px] fullHD:leading-[24px] fullHD:mt-[7px]
              tracking-wide">
              Регистрации
            </a>
            <a
              href="#"
              className="font-light text-[#595959] 
              lg:text-[14px] lg:leading-[20px] lg:mt-[5px]
              xl:text-[15px] xl:leading-[22px] xl:mt-[6px]
              fullHD:text-[16px] fullHD:leading-[24px] fullHD:mt-[7px]
              tracking-wide">
              Логистика
            </a>
          </div>
        </div>
      </div>
      <div className="
        w-full 
        flex flex-col
        md:flex-row
        justify-between 
        md:items-center text-[#353535] 
        text-[15px] leading-[22px] mt-[35px]
        md:text-[16px] md:leading-[25px] md:mt-[65px]
        lg:text-[18px] lg:leading-[28px] lg:mt-[75px]
        ">
        <div>© 2023 ООО «Medical Online Services»</div>
        <div>
          Вебсайт сделан:{" "}
          <span className="text-[#00C9C9] ml-[3px]">
            {" "}
            <a href="https://the17sun.vercel.app/">XVII</a>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
