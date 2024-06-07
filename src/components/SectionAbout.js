"use client";
import React, { useState } from 'react';
import Button from './Button';

const SectionAbout = () => {

    const SALES_ITEMS = [
        { title: 'Our Team:', description: 'Introduce the core members of your team, their expertise, and their commitment to your clients\' success.' },
        { title: 'Core Values:', description: 'Share your company\'s core values and the principles that guide your work.' },
        { title: 'Client-Centric Approach:', description: 'Emphasize your dedication to delivering outstanding service and results for your clients.' },
    ];


    return (
        <div className="h-auto flex flex-col items-center justify-center pt-12 md:pt-16 ">
            <div className="py-2 mx-auto md:px-10 w-full max-w-7xl">
                <div className=" flex flex-col md:flex-row w-full md:justify-between  md:space-y-0 md:space-x-10 mx-auto">
                    <div className=" w-90 mx-6 md:w-1/2">
                        <h2 className="text-4xl md:text-7xl font-bold font-sf-pro leading-110 text-left ">
                            Unlocking Digital
                            <br />
                            Excellence
                        </h2>
                        <p className="mt-6 md:mt-6 text-gray text-left font-semibold text-base md:text-base leading-140  md:leading-140 font-sf-pro ">
                            At Spine, we&apos;re on a mission to empower
                            businesses with the digital tools and <br className='hidden md:block' />expertise they need
                            to thrive in the ever-evolving online landscape.
                        </p>
                        <ul className="mt-6 md:mt-6">
                            {SALES_ITEMS.map((item, index) => (
                                <li key={index} className=' flex items-left pt-2 md:pt-4'>
                                    <img src='images/polygon-3.svg' alt='' className='mr-2' />
                                    <p>
                                        <span className=" text-dark-1 text-left font-bold text-sm md:text-base  leading-140 font-poppins">{item.title}</span>
                                        &nbsp;
                                        <span className=" text-gray text-left font-bold text-sm md:text-base md:leading-110 leading-140 font-sf-pro ">{item.description}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <Button className='bg-primary border-none rounded-lg text-base leading-120 font-poppins mt-10 py-3 hover:bg-dark-1 hover:text-white ' >
                            About Us
                        </Button>
                    </div>
                    <div className=" mt-8 md:mt-2 mb-12 w-90 mx-auto md:w-1/2 md:pb-48">
                        <img
                            src="images/img-about.png"
                            alt="Изображение"
                            className=" w-[342px] h-[342px] md:w-[467px] md:h-[467px] rounded-lg transition-transform ease-in-out "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionAbout;