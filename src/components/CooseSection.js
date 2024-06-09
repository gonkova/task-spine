"use client";
import React from "react";
import Button from "./Button";

const CooseSection = () => {
  const SALES_ITEMS = [
    {
      title: "Expertise:",
      description:
        "Our team of professionals brings years of experience and expertise in DigitalBoostPro.",
    },
    {
      title: "Commitment:",
      description:
        "We are committed to like a quality, innovation, customer satisfaction, etc.",
    },
    {
      title: "Client-Centric Approach:",
      description:
        "Our clients are at the heart of everything we do. We listen, understand, and tailor solutions to meet their specific needs",
    },
    {
      title: "Innovation:",
      description:
        " We stay up-to-date with the latest industry trends and technologies, ensuring our clients always receive cutting-edge solutions.",
    },
  ];

  return (
    <div className="h-auto bg-[url('/images/about-bg.png')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center ">
    <div className="py-2 mx-auto w-full h-auto pt-14 md:pt-16 flex items-center justify-center md:pb-14">
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 mx-auto max-w-7xl">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left relative">
          <h2 className="text-4xl md:text-[64px] font-bold font-sf-pro leading-110">
            Why Choose Us?
          </h2>
          <img src="/images/vector.svg" alt="" className="w-[84px] md:w-[155px] h-auto absolute z-20  mt-6 md:mt-11 ml-[96px] md:ml-[165px] transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-0" />
          <p className="mt-4 md:mt-6 text-gray text-center md:text-left text-base md:text-base leading-140 md:leading-140 font-sf-pro">
            At DigitalBoostPro, we&apos;re on a mission to empower businesses
            with the digital tools
            <br className="hidden md:block" />
            and expertise they need to thrive in the ever-evolving online
            landscape.
          </p>
          <ul className="mt-6 md:mt-6">
            {SALES_ITEMS.map((item, index) => (
              <li key={index} className="flex text-left pt-2 md:pt-4">
                <img src="images/polygon-3.svg" alt="" className="mr-2" />
                <p>
                  <span className="text-dark-1 text-left font-bold text-sm md:text-base leading-140 font-poppins">
                    {item.title}
                  </span>
                  &nbsp;
                  <span className="text-gray text-left text-base md:text-base md:leading-110 leading-140 font-sf-pro">
                    {item.description}
                  </span>
                </p>
              </li>
            ))}
          </ul>
          <Button className="bg-primary border-none rounded-lg text-base leading-120 font-poppins mt-10 py-3 hover:bg-dark-1 hover:text-white">
            About Us
          </Button>
        </div>
        <div className="mt-8 md:mt-2 mb-12 w-full mx-auto md:w-1/2 flex justify-center md:justify-end">
          <img
            src="images/about-3.png"
            alt="Изображение"
            className="w-[380px] h-auto md:w-[485px] rounded-lg transition-transform ease-in-out"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default CooseSection;
