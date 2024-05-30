'use client';

import React from 'react';
import Image from 'next/image';
import { images } from './constants';
import { motion } from 'framer-motion';
import Button from './Button';

const Description = ({ activeImage, clickNext, clickPrev }) => {
  return (
    <div className="grid place-items-start w-full  relative md:rounded-tr-3xl md:rounded-br-3xl">

      {images.map((pic, idx) => (
        <div
          key={idx}
          className={`${idx === activeImage
            ? "  flex flex-col justify-center items-center bg-[#e7dfd9] w-full h-96 md:h-[80vh] md:rounded-tr-3xl md:rounded-br-3xl p-5 md:p-20"
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
            className="w-full"
          >
            <div className="-mt-20 md:-mt-0 md:py-10 md:text-2xl font-semibold font-sf-pro leading-110">{pic.title}</div>
            <div className="leading-140 font-medium font-poppins text-base tracking-wide md:h-40 py-5 md:py-0 -t-80 md:-mt-0 text-gray-600">
              {" "}
              {pic.desc}
            </div>
            <Button className="flex items-center space-x-2  bg-dark-1 font-poppins leading-120 text-white  rounded-lg buttom-72 md:mb-0">
              <span className='text-center'>
                Try for Free

              </span>
              <span><Image
                src='images/right.svg'
                alt=''
                width={20}
                height={20}
              /></span>
            </Button>
          </motion.div>


          <div className="absolute bottom-10 right-10 md:bottom-2 md:right-2 flex justify-between w-full px-10">
            <div
              className="absolute bottom-2  p-2 right-20 cursor-pointer rounded-full border-2 border-gray-400 bg-gray-100 hover:bg-black hover:border-transparent transition-all"
              onClick={clickPrev}
            >
              <Image
                src='images/left.svg'
                alt=''
                width={20}
                height={20}
              />
            </div>

            <div
              className="absolute bottom-2 right-2  p-2 cursor-pointer rounded-full border-2 border-gray-400 bg-gray-100 hover:bg-black hover:border-transparent transition-all"
              onClick={clickNext}
            >
              <Image
                src='images/left.svg'
                alt=''
                width={20}
                height={20}
                className='rotate-180'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Description;
