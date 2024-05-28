'use client';
import React from 'react';
import Button from './Button';

const ServicesSection = () => {
    return (
        <div className="min-h-screen ">
            <div className="container mx-auto py-8 px-8 ">
                <div className='flex flex-row w-full space-x-4'>
                    <div className='flex flex-col items-center mt-8 md:mt-10 relative w-1/2'>
                        <div>
                            <h1 className="text-xl md:text-[64px] text-left font-sf-pro mb-[20%] font-bold leading-110">
                               Elevate Your
                                <br />
                                Digital Presence
                            </h1>
                        </div>
                        <img src='images/vector.svg' alt='' className='w-52 h-auto mr-11  absolute z-20 top-1/2 transform -translate-y-1/2 -translate-x-1/2' />
                    </div>
                    <div className=' w-1/2 md:mt-10 '>
                        <div className='flex flex-col items-start gap-6 mx-20 '>
                            <p className='text-gray text-left font-bold text-base leading-140 font-poppins'>
                            Crafting digital masterpieces tailored to your brand, 
                            we turn concepts into visually stunning, user-friendly websites. 
                            Elevate your online identity with our cutting-edge web design and 
                            development services.
                            </p>
                            <Button className='bg-transparent hover:bg-transparent text-lg rounded-lg leading-120 font-poppins'>
                            See All
                        </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:gap-0 md:flex-row  w-full md:w-11/12 md:mb-16">
                    <div className="w-80 mx-auto md:mx-0 md:w-80 lg:w-80">

                        <img
                            src="images/g12.svg"
                            alt="Изображение"
                            className="w-full h-auto rounded-lg transition-transform ease-in-out  mt-4 -m-4"
                        />
                    </div>
                    <div className="w-80 mx-auto md:w-4/12 lg:w-4/12 md:-ml-4">
                        <img
                            src="images/vector-2.svg"
                            alt="Изображение"
                            className="w-full h-60rounded-lg transition-transform -rotate-12 ease-in-out mt-[33%] -m-6"
                        />
                    </div>
                    <div className="w-80 mx-auto md:w-4/12 lg:w-4/12  md:-ml-32">
                        <img
                            src="images/hero-img.svg"
                            alt="Изображение"
                            className="w-full h-auto rounded-lg transition-transform ease-in-out -m-5 "
                        />
                    </div>
                </div>

              

            </div>
        </div>
    );
};

export default ServicesSection;
