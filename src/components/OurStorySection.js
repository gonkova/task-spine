'use client';
import React from "react";
import Button from "./Button";
import { TbArrowNarrowRight } from "react-icons/tb";

const OurStorySection = () => {
  return (
    <div className=" py-2 mx-auto  w-full h-auto pt-12 md:pt-20  ">
      <div className="flex flex-col md:flex-row  w-full md:px-40 mx-auto max-w-7xl">
        <div className="w-90 mx-6 md:mx-auto md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-[80px] font-bold font-sf-pro leading-140 md:leading-110">
            Our Story
          </h2>
          <p className="mt-4 md:mt-8 text-gray text-sm md:text-lg leading-140 font-poppins">
            Our journey began with a vision to Problem finding and
            <br className="hidden md:block" />
            solution. Since then, we&apos;ve grown steadily, earning a
            <br className="hidden md:block" />
            reputation for excellence in the DigitalBoostPro sector.
            <br className="hidden md:block" />
            Over the years, we&apos;ve worked with numerous clients,
            <br className="hidden md:block" />
            helping them achieve has been to help people solve their{" "}
            <br className="hidden md:block" />
            problems.
          </p>
          <Button className="mt-10 md:mt-10 flex items-center space-x-2 bg-primary border-none font-poppins py-3 leading-120 text-dark-1 rounded-xl hover:bg-dark-1 hover:text-white">
            <span className="text-center">Learn More</span>
            <TbArrowNarrowRight />
          </Button>
        </div>
        <div className="mt-14 md:mt-2 mb-12 w-90 mx-auto md:w-1/2 md:pb-28 flex justify-center md:justify-end">
          <img
            src="images/about-2.png"
            alt="Изображение"
            className="w-[342px] h-[301.82px] md:w-[400px] md:h-[353px] rounded-lg transition-transform ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
