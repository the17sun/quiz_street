import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar, Header, Main, Production, Services, About, News, Footer, Partners } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="font-roboto" style={{ fontFamily: "Roboto" }}>
      <BrowserRouter>
        {/* <div className="fixed right-5 bottom-5" style={{ zIndex: "1000" }}>
          <FiSettings />
        </div> */}
        <section id="shop" className="relative bg-[url('/src/data/Blur.jpg')] bg-cover 
        h-[850px] 
        sm:h-[1000px]
        md:h-[108vh]
        lg:h-[108vh]
        xl:h-[108vh]
        fullHD:h-[85vh]
        ">
          <div className="absolute w-full h-full bg-[#aaaab426] z-0" />
          <div className="relative w-full h-full 
            md:py-[10px] md:px-[10px] lg:py-[10px] lg:px-[40px] xl:py-[15px] xl:px-[80px] fullHD:py-[25px] fullHD:px-[280px] z-10">
            <Navbar />
            <Main />
          </div>
        </section>

        <section id="production" className="relative bg-white w-full 
          md:py-[15px] md:px-[10px] lg:py-[15px] lg:px-[40px] xl:py-[25px] xl:px-[80px] 
          fullHD:py-[50px] fullHD:px-[280px]">
          <Production />
        </section>

        <section id="services" className="relative bg-[url('/src/data/Blur.jpg')] bg-cover">
          <div className="absolute w-full h-full bg-[#aaaab426] z-0" />
          <div className="relative w-full h-full 
            md:py-[15px] md:px-[10px] lg:py-[15px] lg:px-[40px] xl:py-[25px] xl:px-[80px] 
            fullHD:py-[50px] fullHD:px-[280px] z-10">
            <Services />
          </div>
        </section> 

        <section id="about" className="relative">
          <div className="absolute w-full h-full" />
          <div className="relative w-full h-full 
            md:py-[15px] md:px-[10px] lg:py-[15px] lg:px-[40px] xl:py-[25px] xl:px-[80px] 
            fullHD:py-[50px] fullHD:px-[280px] z-10">
            <About />
          </div>
        </section>

        <section id="news" className="relative">
          <div className="absolute w-full h-full" />
          <div className="relative w-full h-full 
            md:py-[15px] px-[40px] lg:py-[15px] xl:py-[25px] xl:px-[80px] 
            fullHD:py-[50px] fullHD:px-[280px] z-10">
            <News />
          </div>
        </section>

        <section id="partners" className="relative">
          <div className="absolute w-full h-full" />
          <div className="relative w-full h-full 
            md:py-[15px] md:px-[95px] lg:py-[15px] lg:px-[105px] xl:py-[25px] xl:px-[140px] 
            fullHD:py-[60px] fullHD:px-[320px]
            z-10">
            <Partners />
          </div>
        </section>

        <section id="contacts" className="relative bg-[url('/src/data/Blur.jpg')] bg-cover h-full">
          <div className="absolute w-full h-full bg-[#aaaab426] z-0" />
          <div className="relative w-full h-full 
            md:py-[15px] md:px-[40px] lg:py-[15px] xl:py-[25px] xl:px-[80px] 
            fullHD:py-[50px] fullHD:px-[280px] 
            z-10">
            <Footer />
          </div>
        </section> 
      </BrowserRouter>
    </div>
  );
};

export default App;
