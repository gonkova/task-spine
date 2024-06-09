import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { images } from './constants';
import Description from './Description';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [direction, setDirection] = useState(1);

  const changeImage = useCallback((direction) => {
    setDirection(direction === 'next' ? 1 : -1);
    setActiveImage((prev) => {
      if (direction === 'next') {
        return prev === images.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => changeImage('next'), 6000);
    return () => clearInterval(timer);
  }, [changeImage]);

  const setActive = useCallback((index) => {
    setDirection(index > activeImage ? 1 : -1);
    setActiveImage(index);
  }, [activeImage]);

  const activeImageData = useMemo(() => images[activeImage], [activeImage]);

  useEffect(() => {
    setActiveImage(0);
    setDirection(1);
  }, []);

  return (
    <div className="md:pt-20 md:pb-14 mx-auto px-4 md:px-0">
      <div className="flex justify-center items-center md:px-20 h-[calc(100vh-5rem)] md:h-[400px] mt-4 md:-mt-10 overflow-hidden px-2 w-full">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeImage}
            className="flex flex-col w-full md:flex-row mx-auto overflow-hidden"
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <div className="w-full md:w-1/3 flex items-center justify-center">
              <div className="relative w-full h-[350px] md:h-[400px]">
                <Image
                  src={activeImageData.src}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="bg-white rounded-2xl"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <Description
                activeImage={activeImage}
                setActive={setActive}
                changeImage={changeImage}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='py-2 mx-auto md:px-20'>
        <div className="flex justify-between md:w-full mx-auto pb-14 md:pb-4 md:mt-4 md:pt-10">
          <div className="flex space-x-2 mt-2 mx-6 md:mx-0">
            <Image
              src='/images/rectangle.svg'
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
          <hr className="border-default w-1/6 md:w-9/12 mx-4 mt-3" />
          <div className="flex space-x-6 md:space-x-4 mx-6 md:mx-0">
            <button
              className="p-2 cursor-pointer rounded-full border-2 border-default bg-gray-100 hover:bg-dark-1 hover:border-transparent transition-all"
              onClick={() => changeImage('prev')}
            >
              <Image
                src='/images/left.svg'
                alt=''
                width={20}
                height={20}
              />
            </button>
            <button
              className="p-2 cursor-pointer rounded-full border-2 border-default bg-gray-100 hover:bg-dark-1 hover:border-transparent transition-all"
              onClick={() => changeImage('next')}
            >
              <Image
                src='/images/left.svg'
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
