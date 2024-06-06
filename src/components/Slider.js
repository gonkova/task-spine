'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { images } from './constants';
import Description from './Description';
import { motion, AnimatePresence } from 'framer-motion';

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const clickPrev = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const setActive = (index) => {
    setActiveImage(index);
  };

  useEffect(() => {
    const timer = setTimeout(clickNext, 6000);
    return () => clearTimeout(timer);
  }, [activeImage]);

  return (
    <div className="md:pt-20 md:pb-14 mx-auto px-4 md:px-0">
      <div className="flex justify-center items-center md:px-20 h-[100vh] md:h-[400px] mt-4 md:-mt-10 overflow-hidden px-2 w-full">
        <AnimatePresence initial={false}>
          {images.map((pic, idx) => (
            idx === activeImage && (
              <motion.div
                key={idx}
                className="flex flex-col w-full md:flex-row mx-auto overflow-hidden"
                initial={{ x: 300, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: -300, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div className="w-full md:w-1/3">
                  <div className="relative w-full mx-auto  h-[350px] md:h-[400px]">
                    <Image
                      src={pic.src}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                      className="bg-white rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 ">
                  <Description
                    activeImage={activeImage}
                    clickNext={clickNext}
                    clickPrev={clickPrev}
                  />
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
      <div className='py-2 mx-auto md:px-20 '>
      <div className="flex justify-between md:w-full mx-auto  pb-14 md:pb-4 md:mt-4 md:pt-10 ">
        <div className="flex space-x-2 mt-2 mx-6 md:mx-0">
          <Image
            src='images/rectangle.svg'
            alt=''
            width={20}
            height={20}
            className='mb-3'
          />
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === activeImage ? 'bg-dark-1' : 'bg-default'}`}
              onClick={() => setActive(idx)}
            />
          ))}
        </div>
        <hr className="border-default w-1/6  md:w-9/12 mx-4 mt-3" />
        <div className=" flex space-x-6 md:space-x-4 mx-6 md:mx-0">
          <button
            className="p-2 cursor-pointer rounded-full border-2 border-default bg-gray-100 hover:bg-dark-1 hover:border-transparent transition-all"
            onClick={clickPrev}
          >
            <Image
              src='images/left.svg'
              alt=''
              width={20}
              height={20}
            />
          </button>
          <button
            className="p-2 cursor-pointer rounded-full border-2 border-default bg-gray-100 hover:bg-dark-1 hover:border-transparent transition-all"
            onClick={clickNext}
          >
            <Image
              src='images/left.svg'
              alt=''
              width={20}
              height={20}
              className='rotate-180'
            />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
