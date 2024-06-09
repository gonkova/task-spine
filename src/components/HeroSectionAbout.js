"use client";
import React from "react";
import Carousel from "./Carousel";

const HeroSectionAbout = () => {
  return (
    <div className=" flex flex-col items-center justify-center  h-auto md:pb-16">
      <div className="py-2 mx-auto md:px-10 w-full max-w-7xl">
        <div className="flex flex-col items-center mt-4 md:mt-16 relative ">
          <div>
            <h1 className="text-5xl md:text-[88px] text-center font-sf-pro font-bold leading-110 mb-28 md:mb-[20%] ">
              About Us
            </h1>
          </div>
          <img
            src="images/vector.svg"
            alt=""
            className="w-[108px] md:w-[248px] h-auto ml-[53px] md:ml-[255px] md:pb-9 absolute z-20 top-[22%] md:top-1/2 transform -translate-y-1/2 -translate-x-1/2"
          />
        </div>
        <div>
          <div className=" flex flex-col items-center  -mt-[80px] md:pt-10">
            <p className="mx-10 md:mx-0 text-center text-gray text-sm md:text-lg leading-140 font-poppins ">
              At DigitalBoostPro, we&apos;re not just a digital marketing
              agency; we&apos;re your strategic <br />
              partner in navigating the dynamic landscape of online success.
            </p>
          </div>
        </div>
        <img
          src="images/Line.svg"
          alt=""
          className="w-full mx-auto pt-14 md:pt-40 md:px-5"
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
        <img src="images/Line.svg" alt="" className="w-full md:px-5" />
      </div>
    </div>
  );
};

export default HeroSectionAbout;
