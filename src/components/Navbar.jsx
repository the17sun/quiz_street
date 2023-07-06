import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./components.css";
import { navLinks } from "../data/dummy";
import logo from "../data/logo.png";
import russia from "../data/russia.jpg";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className={`
        fixed md:hidden w-full h-full bg-[rgba(125,125,155,0.55)] transition-all duration-500 z-40
        ${open ? "translate-x-0" : "translate-x-[100%]"}`}
                onClick={() => setOpen(false)}></div>
            <div
                className={`
        ${open ? "translate-x-0" : "translate-x-[-100%]"} z-50
        flex md:hidden flex-col bg-white fixed h-[100vh] w-[250px] overflow-y-auto
        transition-all duration-300`}>
                <div className='flex p-[15px]'>
                    <img className='w-[125px]' src={logo} alt='' />
                </div>
                <div className='flex flex-col p-[15px]'>
                    {navLinks.map((link, index) => (
                        <HashLink
                            className={`text-[#0D4C93] font-normal text-[15px] leading-[19px] uppercase py-[12.5px]
              ${index === 0 && "active"}`}
                            smooth
                            onClick={() => setOpen(false)}
                            to={`#${link.path}`}>
                            {link.name}
                        </HashLink>
                    ))}
                </div>
                <div className='mt-auto'>
                    <div className='flex items-center gap-[10px] py-[10px] px-[15px]'>
                        <div className='bg-white rounded-full flex items-center justify-center'>
                            <svg
                                width='22'
                                height='22'
                                viewBox='0 0 25 25'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M12.5 0C7.50754 0 3.44592 4.06162 3.44592 9.054C3.44592 15.2497 11.5484 24.3454 11.8934 24.7295C12.2174 25.0904 12.7831 25.0898 13.1066 24.7295C13.4515 24.3454 21.554 15.2497 21.554 9.054C21.5539 4.06162 17.4924 0 12.5 0ZM12.5 13.6093C9.98816 13.6093 7.9447 11.5658 7.9447 9.054C7.9447 6.54219 9.98821 4.49873 12.5 4.49873C15.0117 4.49873 17.0552 6.54224 17.0552 9.05405C17.0552 11.5659 15.0117 13.6093 12.5 13.6093Z'
                                    fill='#0D4C93'
                                />
                            </svg>
                        </div>
                        <div className='text-[#5A5A5A] font-normal text-[13px] leading-[14px] tracking-wide'>
                            г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
                        </div>
                    </div>
                    <div className='flex items-center gap-[10px] py-[10px] px-[15px]'>
                        <div className='bg-white rounded-full flex items-center justify-center pl-[2px]'>
                            <svg
                                width='20'
                                height='20'
                                viewBox='0 0 22 22'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <g clip-path='url(#clip0_0_114)'>
                                    <path
                                        d='M9.1099 12.89C7.01004 10.7902 6.5359 8.69031 6.42894 7.849C6.39905 7.61637 6.4791 7.38309 6.64552 7.21782L8.34483 5.51927C8.5948 5.26946 8.63916 4.88013 8.4518 4.58048L5.74618 0.379239C5.53889 0.0474371 5.11327 -0.0723136 4.76338 0.102722L0.419903 2.14834C0.136959 2.28767 -0.0294639 2.58829 0.00266119 2.90203C0.230247 5.0641 1.17283 10.379 6.39594 15.6025C11.619 20.826 16.9332 21.7682 19.0964 21.9958C19.4101 22.0279 19.7107 21.8615 19.8501 21.5785L21.8957 17.235C22.0701 16.8859 21.9511 16.4614 21.6207 16.2538L17.4195 13.5489C17.12 13.3613 16.7307 13.4054 16.4807 13.6551L14.7821 15.3544C14.6168 15.5208 14.3836 15.6009 14.1509 15.571C13.3096 15.464 11.2098 14.9899 9.1099 12.89Z'
                                        fill='#0D4C93'
                                    />
                                    <path
                                        d='M17.4483 11.7587C17.0293 11.7587 16.6897 11.4191 16.6897 11.0001C16.6861 7.85927 14.1409 5.31401 11 5.31045C10.581 5.31045 10.2414 4.97081 10.2414 4.55183C10.2414 4.13286 10.581 3.79321 11 3.79321C14.9785 3.7976 18.2025 7.02167 18.2069 11.0001C18.2069 11.4191 17.8673 11.7587 17.4483 11.7587Z'
                                        fill='#0D4C93'
                                    />
                                    <path
                                        d='M21.2414 11.7586C20.8224 11.7586 20.4828 11.419 20.4828 11C20.4769 5.76524 16.2348 1.52309 11 1.51724C10.581 1.51724 10.2414 1.1776 10.2414 0.758621C10.2414 0.339646 10.581 0 11 0C17.0724 0.00668947 21.9933 4.92764 22 11C22 11.2012 21.9201 11.3942 21.7778 11.5364C21.6356 11.6787 21.4426 11.7586 21.2414 11.7586Z'
                                        fill='#0D4C93'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_0_114'>
                                        <rect
                                            width='22'
                                            height='22'
                                            fill='white'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='text-[#5A5A5A] font-normal text-[13px] leading-[14px] tracking-wide'>
                            +998 71 276-62-53 <br /> +998 71 276-62-54
                        </div>
                    </div>
                    <div className='flex items-center gap-[15px] p-[15px] mt-[15px]'>
                        <svg
                            width='14'
                            height='24'
                            viewBox='0 0 12 22'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M7.70372 22V11.9655H11.0705L11.5757 8.05372H7.70372V5.55662C7.70372 4.42442 8.01683 3.65284 9.64224 3.65284L11.7119 3.65199V0.153153C11.354 0.10664 10.1254 0 8.69538 0C5.70933 0 3.66502 1.82266 3.66502 5.1692V8.05372H0.287994V11.9655H3.66502V22H7.70372Z'
                                fill='#0D4C93'
                            />
                        </svg>
                        <span className='text-[#0D4C93] font-normal text-[15px] leading-[18px]'>
                            Мы на Facebook
                        </span>
                    </div>
                </div>
            </div>

            <div
                className='grid 
        md:grid-cols-[5.5fr_6.5fr] 
        lg:grid-cols-[4.1fr_3.25fr_4.65fr] 
        fullHD:grid-cols-[4.25fr_3.25fr_4.25fr] md:gap-[30px] lg:gap-0'>
                <div className='hidden md:flex items-center justify-between'>
                    <div
                        className='flex items-center 
            md:gap-[8px] lg:gap-[10px] xl:gap-[15px] fullHD:gap-[20px]'>
                        <div
                            className='
              md:w-9 md:h-9 xl:w-10 xl:h-10 fullHD:w-12 fullHD:h-12 
              bg-white rounded-full flex items-center justify-center'>
                            <svg
                                width='25'
                                height='25'
                                viewBox='0 0 25 25'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M12.5 0C7.50754 0 3.44592 4.06162 3.44592 9.054C3.44592 15.2497 11.5484 24.3454 11.8934 24.7295C12.2174 25.0904 12.7831 25.0898 13.1066 24.7295C13.4515 24.3454 21.554 15.2497 21.554 9.054C21.5539 4.06162 17.4924 0 12.5 0ZM12.5 13.6093C9.98816 13.6093 7.9447 11.5658 7.9447 9.054C7.9447 6.54219 9.98821 4.49873 12.5 4.49873C15.0117 4.49873 17.0552 6.54224 17.0552 9.05405C17.0552 11.5659 15.0117 13.6093 12.5 13.6093Z'
                                    fill='#0D4C93'
                                />
                            </svg>
                        </div>
                        <div
                            className='text-[#5A5A5A] font-normal tracking-wide
              md:text-[12px] xl:text-[13px] md:leading-[15px] xl:leading-[16px]
              fullHD:text-[16px] fullHD:leading-[19px]'>
                            г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
                        </div>
                    </div>

                    <div
                        className='flex items-center 
            md:gap-[8px] lg:gap-[10px] xl:gap-[15px] fullHD:gap-[20px]'>
                        <div
                            className='
              md:w-9 md:h-9 xl:w-10 xl:h-10 fullHD:w-12 fullHD:h-12 
              bg-white rounded-full flex items-center justify-center'>
                            <svg
                                width='22'
                                height='22'
                                viewBox='0 0 22 22'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <g clip-path='url(#clip0_0_114)'>
                                    <path
                                        d='M9.1099 12.89C7.01004 10.7902 6.5359 8.69031 6.42894 7.849C6.39905 7.61637 6.4791 7.38309 6.64552 7.21782L8.34483 5.51927C8.5948 5.26946 8.63916 4.88013 8.4518 4.58048L5.74618 0.379239C5.53889 0.0474371 5.11327 -0.0723136 4.76338 0.102722L0.419903 2.14834C0.136959 2.28767 -0.0294639 2.58829 0.00266119 2.90203C0.230247 5.0641 1.17283 10.379 6.39594 15.6025C11.619 20.826 16.9332 21.7682 19.0964 21.9958C19.4101 22.0279 19.7107 21.8615 19.8501 21.5785L21.8957 17.235C22.0701 16.8859 21.9511 16.4614 21.6207 16.2538L17.4195 13.5489C17.12 13.3613 16.7307 13.4054 16.4807 13.6551L14.7821 15.3544C14.6168 15.5208 14.3836 15.6009 14.1509 15.571C13.3096 15.464 11.2098 14.9899 9.1099 12.89Z'
                                        fill='#0D4C93'
                                    />
                                    <path
                                        d='M17.4483 11.7587C17.0293 11.7587 16.6897 11.4191 16.6897 11.0001C16.6861 7.85927 14.1409 5.31401 11 5.31045C10.581 5.31045 10.2414 4.97081 10.2414 4.55183C10.2414 4.13286 10.581 3.79321 11 3.79321C14.9785 3.7976 18.2025 7.02167 18.2069 11.0001C18.2069 11.4191 17.8673 11.7587 17.4483 11.7587Z'
                                        fill='#0D4C93'
                                    />
                                    <path
                                        d='M21.2414 11.7586C20.8224 11.7586 20.4828 11.419 20.4828 11C20.4769 5.76524 16.2348 1.52309 11 1.51724C10.581 1.51724 10.2414 1.1776 10.2414 0.758621C10.2414 0.339646 10.581 0 11 0C17.0724 0.00668947 21.9933 4.92764 22 11C22 11.2012 21.9201 11.3942 21.7778 11.5364C21.6356 11.6787 21.4426 11.7586 21.2414 11.7586Z'
                                        fill='#0D4C93'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_0_114'>
                                        <rect
                                            width='22'
                                            height='22'
                                            fill='white'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div
                            className='text-[#5A5A5A] font-normal tracking-wide
              md:text-[12px] xl:text-[13px] md:leading-[15px] xl:leading-[16px]
              fullHD:text-[16px] fullHD:leading-[19px]'>
                            +998 71 276-62-53 <br /> +998 71 276-62-54
                        </div>
                    </div>
                </div>

                <div className='hidden lg:flex justify-center items-center'>
                    <img
                        className='lg:w-[150px] lg:h-[40px] xl:w-[150px] xl:h-[40px] fullHD:w-[200px] fullHD:h-[58px]'
                        src={logo}
                        alt=''
                    />
                </div>

                <div className='flex items-center justify-between p-[10px] md:p-0'>
                    <div className='flex items-center'>
                        <div
                            className='h-10 w-10 md:w-9 md:h-9 xl:w-10 xl:h-10 fullHD:w-12 fullHD:h-12 
            bg-white rounded-full flex items-center justify-center'>
                            <svg
                                width='26'
                                height='26'
                                viewBox='0 0 26 26'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M4.72934 17.9273C1.09066 14.2885 1.09074 8.36781 4.72934 4.72906C8.36809 1.09031 14.2887 1.09031 17.9274 4.72906C21.0144 7.81605 21.4819 12.4072 19.3312 15.9924C19.3312 15.9924 19.1768 16.2515 19.3854 16.46C20.5757 17.6503 24.1468 21.2214 24.1468 21.2214C25.0945 22.1691 25.3201 23.4942 24.4797 24.3348L24.335 24.4793C23.4946 25.3199 22.1694 25.0944 21.2217 24.1467C21.2217 24.1467 17.6582 20.5831 16.4703 19.3953C16.2517 19.1766 15.9926 19.3311 15.9926 19.3311C12.4075 21.4817 7.81632 21.0143 4.72934 17.9273ZM16.2045 16.2043C18.8931 13.5156 18.8931 9.14089 16.2044 6.45223C13.5157 3.76364 9.14102 3.76357 6.45243 6.45223C3.76377 9.14082 3.76377 13.5156 6.45243 16.2043C9.1411 18.8928 13.5157 18.8928 16.2045 16.2043Z'
                                    fill='#0D4C93'
                                />
                                <path
                                    d='M15.6087 10.7745C15.7338 10.7745 15.8611 10.7499 15.9837 10.6981C16.4735 10.4908 16.7027 9.92564 16.4954 9.43574C15.1924 6.35654 11.6273 4.91151 8.54813 6.2145C8.05831 6.42181 7.82914 6.98699 8.03645 7.47689C8.24383 7.96679 8.80886 8.19581 9.29891 7.98857C11.3997 7.09961 13.8323 8.08556 14.7212 10.1864C14.8767 10.5538 15.2334 10.7745 15.6087 10.7745Z'
                                    fill='#0D4C93'
                                />
                            </svg>
                        </div>
                    </div>

                    <div className='hidden md:flex items-center'>
                        <div
                            className='
              fullHD:h-12
              md:h-9 xl:h-10 pl-[15px] pr-[20px] gap-[15px]
              bg-white rounded-full flex items-center justify-center 
              '>
                            <svg
                                width='12'
                                height='22'
                                viewBox='0 0 12 22'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M7.70372 22V11.9655H11.0705L11.5757 8.05372H7.70372V5.55662C7.70372 4.42442 8.01683 3.65284 9.64224 3.65284L11.7119 3.65199V0.153153C11.354 0.10664 10.1254 0 8.69538 0C5.70933 0 3.66502 1.82266 3.66502 5.1692V8.05372H0.287994V11.9655H3.66502V22H7.70372Z'
                                    fill='#0D4C93'
                                />
                            </svg>
                            <span
                                className='text-[#0D4C93] font-normal 
                md:text-[11px] lg:text-[12px] fullHD:leading-[14px]'>
                                Мы на Facebook
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div
                            className=' bg-white rounded-full flex items-center justify-center 
              h-10 md:h-9 xl:h-10 fullHD:h-12 pl-[10px] pr-[15px] gap-[10px]
              '>
                            <img
                                className='w-[30px] h-[30px]
                rounded-full border border-solid border-gray-100'
                                src={russia}
                                alt=''
                            />
                            <span className='text-[#0D4C93] font-normal md:text-[11px] lg:text-[12px] fullHD:leading-[14px]'>
                                Русский
                            </span>
                            <svg
                                width='11'
                                height='11'
                                viewBox='0 0 11 11'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <g clip-path='url(#clip0_0_101)'>
                                    <path
                                        d='M5.50003 8.63506C5.30289 8.63506 5.10577 8.55978 4.95547 8.40955L0.225717 3.67975C-0.0751575 3.37888 -0.0751575 2.89106 0.225717 2.59031C0.526469 2.28956 1.01419 2.28956 1.31509 2.59031L5.50003 6.7755L9.685 2.59046C9.98587 2.2897 10.4735 2.2897 10.7743 2.59046C11.0753 2.89121 11.0753 3.37902 10.7743 3.6799L6.04459 8.4097C5.89422 8.55995 5.6971 8.63506 5.50003 8.63506Z'
                                        fill='#0D4C93'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_0_101'>
                                        <rect
                                            width='11'
                                            height='11'
                                            fill='white'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className='flex md:hidden items-center'>
                        <div
                            className='w-10 h-10 flex items-center justify-center'
                            onClick={() => setOpen(true)}>
                            <svg
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                                <g
                                    id='SVGRepo_tracerCarrier'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'></g>
                                <g id='SVGRepo_iconCarrier'>
                                    <path
                                        fill-rule='evenodd'
                                        clip-rule='evenodd'
                                        d='M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z'
                                        fill='#0D4C93'></path>{" "}
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='hidden md:grid w-full bg-white rounded-full 
        md:mt-[15px] lg:mt-[20px] xl:mt-[25px] fullHD:mt-[50px] items-center'
                style={{
                    gridTemplateColumns: "0.8fr 1fr 1fr 0.8fr 1.2fr 1.2fr",
                }}>
                {navLinks.map((link, index) => (
                    <HashLink
                        className={`text-[#0D4C93] 
            fullHD:py-[24px] fullHD:text-[20px] fullHD:leading-[23px] 
            xl:py-[16px] xl:text-[16px] xl:leading-[19px] 
            lg:py-[15px] lg:text-[15px] lg:leading-[18px] 
            md:py-[10px] md:text-[11px] md:leading-[15px] 
            font-normal navbar_link
            uppercase border-r-2 border-solid border-[#aaaab426] flex justify-center 
            ${navLinks.length === index + 1 && "border-none"}
            ${index === 0 && "active"}`}
                        smooth
                        to={`#${link.path}`}>
                        {link.name}
                    </HashLink>
                ))}
            </div>
        </>
    );
};

export default Navbar;
