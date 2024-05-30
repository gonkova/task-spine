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

  useEffect(() => {
    const timer = setTimeout(clickNext, 6000);
    return () => clearTimeout(timer);
  }, [activeImage]);

  return (
    <main className="md:flex justify-center items-center w-full mx-auto max-w-5xl shadow-2xl rounded-2xl overflow-hidden">
  <AnimatePresence initial={false}>
    {images.map((pic, idx) => (
      idx === activeImage && (
        <motion.div
          key={idx}
          className="flex flex-col w-full md:flex-row items-center justify-center"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="md:w-1/2 ">
            <Image
              src={pic.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
            />
          </div>

          <div className="md:w-1/2 ">
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
</main>
  );
};

export default Slider;