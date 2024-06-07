"use client";
import React from "react";
import { images } from "./constants";
import { motion } from "framer-motion";
import Button from "./Button";
import { TbArrowNarrowRight } from "react-icons/tb";

const Description = ({ activeImage }) => {
  return (
    <div className="mx-0 h-auto md:w-full space-x-10 md:h-[400px] relative l">
      {images.map((pic, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "flex flex-col justify-center items-center  md:w-full h-[400px]  p-5 "
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full flex flex-col gap-8  md:px-10"
          >
            <div className=" mt-8 md:mt-0 text-4xl md:text-5xl font-semibold font-sf-pro leading-110 ">
              {pic.title}
            </div>
            <div className="leading-140 font-semibold font-poppins text-sm md:text-base tracking-wide md:h-40 py-5  text-gray">
              {pic.desc}
            </div>
            <hr className="border-gray w-full -mt-5  md:-mt-12 buttom-5" />
            <Button className="w-32 flex items-center space-x-2 bg-dark-1 font-poppins py-3 leading-120 text-white rounded-xl  hover:bg-transparent hover:border-dark-1 hover:border-2 hover:border-solid">
              <span className="text-center">See All</span>
              <TbArrowNarrowRight />
            </Button>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Description;
