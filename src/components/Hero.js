'use client';
import React from 'react';
import Button from './Button';

const Hero = () => {
    return (
        <div className="min-h-screen bg-gradient-to-bottom">
            <div className="container py-2 mx-auto ">
                <div className='flex flex-col justify-between items-center mt-10 md:mt-24 relative'>
                    <div>
                        <h1 className="text-5xl md:text-[88px] text-center font-sf-pro font-bold leading-110 mb-28 md:mb-[20%] ">
                            We love to
                            <br className="block md:hidden" />
                            find { " " }
                            <br className="hidden md:block" />
                            solutions
                        </h1>
                    </div>
                    <img src='images/vector.svg' alt='' className='w-32 md:w-60 h-auto ml-56 md:ml-28  absolute z-20 top-[40%] md:top-1/2 transform -translate-y-1/2 -translate-x-1/2' />
                </div>
                <div>
                    <div className='flex flex-col items-center gap-10 -mt-24'>
                        <p className='mx-10 md:mx-0 text-center text-gray text-sm md:text-base leading-140 font-poppins font-semibold '>
                            Elevate your online presence with Spine
                            cutting-edge solutions. Discover limitless <br/> possibilities for your
                            digital agency&apos;s success.
                        </p>
                        <Button className='bg-primary border-none text-base rounded-xl leading-120 font-poppins py-3' >
                            Start for free
                        </Button>
                    </div>
                </div>
                <div className="flex  flex-row w-80 mx-auto md:w-full  md:mb-16">
                    <div className="1/3 mx-auto  ">

                        <img
                            src="images/hero1.png"
                            alt="Изображение"
                            className="w-[1200px] h-auto rounded-lg transition-transform ease-in-out mt-[80%] md:-mt-10 -ml-4"
                        />
                    </div>
                    <div className="md:w-1/3  ">
                        <img
                            src="images/vector-2.svg"
                            alt="Изображение"
                            className="w-full md:w-full md:h-auto ease-in-out mt-[300%] ml-[80%] md:mt-36  md:-ml-8 -rotate-45 md:-rotate-12"
                        />
                    </div>
                    <div className="w-[1200px] md:w-1/3 ">
                        <img
                            src="images/hero2.png"
                            alt="Изображение"
                            className="w-full h-auto rounded-lg transition-transform ease-in-out mt-0 md:-mt-20 -ml-6 md:-m-5 "
                        />
                    </div>
                </div>
              
                <img src="images/line.svg" alt="" className=" mx-auto pt-32" />
                <div className=" flex flex-col md:flex-row justify-center items-center p-3 md:p-6">
                    <div className="flex md:flex-row gap-5 md:gap-6 md:space-x-16 overflow-x-scroll no-scrollbar md:overflow-x-visible">
                        <img src="images/logo1.svg" alt="" className="w-auto h-5 md:h-10  cursor-pointer" />
                        <img src="images/logo2.svg" alt="" className="w-auto h-5 md:h-10 cursor-pointer" />
                        <img src="images/logo3.svg" alt="" className="w-auto h-5 md:h-10 cursor-pointer" />
                        <img src="images/logo4.svg" alt="" className="w-auto h-5 md:h-10  cursor-pointer" />
                        <img src="images/logo5.svg" alt="" className="w-auto h-5 md:h-10 cursor-pointer" />
                    </div>
                </div>
                <img src="images/line.svg" alt="" className=" mx-auto " />
               
            </div>
        </div>
    );
};

export default Hero;