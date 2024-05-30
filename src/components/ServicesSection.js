'use client';
import React from 'react';
import Button from './Button';

import Carousel from './Carousel';


const ServicesSection = () => {
    return (
        <div className="min-h-screen ">
            <div className="container mx-auto py-8 px-8 ">
                <div className='flex flex-col md:flex-row w-full space-x-4'>
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
                    <div className=' md:w-1/2 md:mt-10 '>
                        <div className='flex flex-col items-start gap-6 md:mx-20 '>
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
                <div >
                   
                </div>

                <Carousel />

            </div>
        </div>
    );
};

export default ServicesSection;
