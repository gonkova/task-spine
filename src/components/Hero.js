"use client";
import React from "react";
import Button from "./Button";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-bottom h-auto md:pb-16">
      <div className="py-2 mx-auto md:px-10 w-full max-w-7xl">
        <div className="flex flex-col items-center mt-10 md:mt-18 relative ">
          <div>
            <h1 className="text-5xl md:text-[88px] text-center font-sf-pro font-bold leading-110 mb-28 md:mb-[20%] ">
              We love to
              <br className="block md:hidden" />
              find <br className="hidden md:block" />
              solutions
            </h1>
          </div>
          <img
            src="images/vector.svg"
            alt=""
            className="w-32 md:w-60 h-auto ml-56 md:ml-28  absolute z-20 top-[40%] md:top-1/2 transform -translate-y-1/2 -translate-x-1/2"
          />
        </div>
        <div>
          <div className="flex flex-col items-center gap-10 -mt-[80px] ">
            <p className="mx-10 md:mx-0 text-center text-gray text-sm md:text-base leading-140 font-poppins font-semibold ">
              Elevate your online presence with Spine cutting-edge solutions.
              Discover limitless <br /> possibilities for your digital
              agency&apos;s success.
            </p>
            <Button className="bg-primary border-none text-base rounded-xl leading-120 font-poppins  py-3 px-7 hover:bg-dark-1 hover:text-white ">
              Start for free
            </Button>
          </div>
        </div>
        <div className="flex  flex-row w-80 mx-auto  md:w-full md:mb-16 relative md:static ">
          <div className="w-full h-auto md:w-1/3 mx-auto ">
            <img
              src="images/hero1.png"
              alt="Изображение"
              className="  md:w-full md:h-auto rounded-lg transition-transform ease-in-out mt-[73%] md:-mt-10 -ml-4 md:-ml-0"
            />
          </div>
          <div className="w-full h-auto md:w-1/3 absolute md:relative">
            <img
              src="images/vector-2.svg"
              alt="Изображение"
              className="w-[125.14px] h-[25.03] md:w-full md:h-[93px] ease-in-out mt-[52%]  ml-[152px] md:mt-[34%]  md:-ml-2 -rotate-[36deg] md:rotate-[4deg]"
            />
          </div>
          <div className="w-full h-auto  md:w-1/3 ">
            <img
              src="images/hero2.png"
              alt="Изображение"
              className="w-full h-auto rounded-lg transition-transform ease-in-out -mt-3 md:-mt-20 ml-6 md:ml-0 "
            />
          </div>
        </div>
        <img
          src="images/line.svg"
          alt=""
          className="w-full mx-auto pt-10 md:pt-16 md:px-5"
        />
        <div className="flex flex-col md:flex-row p-3 md:p-7 ">
          <div className="w-full md:flex justify-between items-center gap-5 md:gap-6 hidden">
            <img
              src="images/logo1.svg"
              alt=""
              className="w-auto h-5 md:h-10 cursor-pointer"
            />
            <img
              src="images/logo2.svg"
              alt=""
              className="w-auto h-5 md:h-10 cursor-pointer"
            />
            <img
              src="images/logo3.svg"
              alt=""
              className="w-auto h-5 md:h-10 cursor-pointer"
            />
            <img
              src="images/logo4.svg"
              alt=""
              className="w-auto h-5 md:h-10 cursor-pointer"
            />
            <img
              src="images/logo5.svg"
              alt=""
              className="w-auto h-5 md:h-10 cursor-pointer"
            />
          </div>
          <div className="md:hidden w-full">
            <Carousel />
          </div>
        </div>
        <img src="images/line.svg" alt="" className="w-full md:px-5" />
      </div>
    </div>
  );
};

export default Hero;
