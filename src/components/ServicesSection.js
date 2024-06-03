'use client';
import React from 'react';
import Button from './Button';
import Slider from './Slider';

const ServicesSection = () => {
    return (
        <div className="min-h-screen md:pb-16 bg-[url('/images/bg-services.png')] bg-cover bg-no-repeat bg-center">
            <div className="container  mx-auto  py-8">
                <div className=' flex flex-col md:flex-row justify-between'>
                    <div className='flex flex-col items-center mt-8 md:mt-20 relative w-full md:w-1/2 '>
                        <div>
                            <h1 className="-ml-[16%] text-4xl md:text-[64px] font-sf-pro mb-[20%] font-bold leading-110">
                                Elevate Your
                                <br />
                                Digital Presence
                            </h1>
                        </div>
                        <img src='images/vector.svg' alt='' className=' w-[90px] -ml-[155px] md:-ml-[200px] md:w-52 h-auto absolute z-20 top-1/2 transform -translate-y-1/2 -translate-x-1/2' />
                    </div>
                    <div className='w-full md:w-1/2 -mt-10 md:mt-20'>
                        <div className='flex flex-col items-start gap-6 md:mx-20 mx-4'>
                            <p className='text-gray text-left font-bold  text-sm md:text-base leading-140 font-poppins'>
                                Crafting digital masterpieces tailored to your brand,
                                we turn concepts into visually stunning, user-friendly websites.
                                Elevate your online identity with our cutting-edge web design and
                                development services.
                            </p>
                            <Button className=' bg-transparent text-l rounded-xl leading-120 py-3 font-poppins '>
                                See All
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Slider />
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
