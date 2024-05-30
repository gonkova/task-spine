'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: '/images/hero1.png', title: 'Title 1', desc: 'Description 1' },
  { src: '/images/hero2.png', title: 'Title 2', desc: 'Description 2' },
  { src: '/images/img1-slider.png', title: 'Title 3', desc: 'Description 3' },
];

const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const clickPrev = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(clickNext, 6000);
    return () => clearTimeout(timer);
  }, [activeImage]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto mx-auto">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
        <AnimatePresence initial={false}>
          {images.map((pic, idx) => (
            idx === activeImage && (
              <motion.div
                key={idx}
                className="flex flex-col-reverse md:flex-row w-full h-[70vh] md:h-auto items-center"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="flex flex-col justify-center items-start p-10 bg-gray-50 w-full md:w-1/2 h-full">
                  <h2 className="text-2xl font-semibold mb-4">{pic.title}</h2>
                  <p className="text-base text-gray-600 mb-4">{pic.desc}</p>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">Try for Free</button>
                </div>
                <div className="relative w-full md:w-1/2 h-full">
                  <Image
                    src={pic.src}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="p-2 bg-gray-100 rounded-full border-2 border-gray-400 hover:bg-black hover:border-transparent transition-all"
            onClick={clickPrev}
          >
            <Image
              src='/images/left.svg'
              alt='Previous'
              width={20}
              height={20}
            />
          </button>
          <button
            className="p-2 bg-gray-100 rounded-full border-2 border-gray-400 hover:bg-black hover:border-transparent transition-all"
            onClick={clickNext}
          >
            <Image
              src='/images/right.svg'
              alt='Next'
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
