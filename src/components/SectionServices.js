'use client';
import React from 'react';
import Button from './Button';
import Slider from './Slider';

const SectionServices = () => {
    return (
        <div className="h-auto bg-[url('/images/bg-services.png')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center ">
            <div className="md:pt-28 py-2 mx-auto md:px-10 w-full max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-center md:px-10 space-y-10 md:space-y-0 md:space-x-10 mx-auto">
                    <div className="flex flex-col items-start mt-12 md:mt-2 relative w-full px-4 md:px-0 md:w-1/2 ">
                        <h1 className="text-4xl md:text-7xl text-left font-sf-pro md:mb-10 font-bold leading-110">
                            Elevate Your
                            <br />
                            Digital Presence
                        </h1>
                        <img src="/images/vector.svg" alt="" className="w-[90px] md:w-[237px] h-auto absolute z-20 top-1/2 mt-6 md:mt-7 ml-[54px] md:ml-0 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-0" />
                    </div>
                    <div className="w-full px-4 md:px-0 md:w-1/2 md:p-2 mt-0 md:mt-20 flex flex-col items-start gap-7 md:gap-6">
                        <p className="text-gray text-sm md:text-lg leading-140 font-bold font-poppins text-left -mt-7 md:-mt-10">
                            Crafting digital masterpieces tailored to your brand,
                            we turn concepts into visually stunning, user-friendly websites.
                            Elevate your online identity with our cutting-edge web design and
                            development services.
                        </p>
                        <Button className="bg-transparent text-base rounded-xl leading-120 py-3 px-4 font-poppins hover:bg-dark-1 hover:text-white">
                            See All
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto ">
                <Slider />
            </div>
        </div>
    );
};

export default SectionServices;
