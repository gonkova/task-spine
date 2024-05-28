"use client";
import React, { useState } from 'react';
import Button from './Button';

const About = () => {

    const SALES_ITEMS = [
        { title: 'Our Team:', description: 'Introduce the core members of your team, their expertise, and their commitment to your clients\' success.' },
        { title: 'Core Values:', description: 'Share your company\'s core values and the principles that guide your work.' },
        { title: 'Client-Centric Approach:', description: 'Emphasize your dedication to delivering outstanding service and results for your clients.' },
    ];


    return (
        <div className="container mx-auto py-8 px-8 ">
            <div className=" flex flex-col md:flex-row w-full space-x-4 ">
                <div className="mt-14  p-4 w-80 mx-auto md:w-1/2 lg:w-1/2">
                    <h2 className="text-3xl md:text-7xl font-bold leading-110 text-left mt-6">
                        Unlocking Digital
                        <br />
                        Excellence
                    </h2>
                    <p className="w-4/3 mt-6 text-gray text-left font-bold text-l leading-140 font-poppins ">
                        At Spine, we&apos;re on a mission to empower
                        businesses with the digital tools and expertise they need
                        to thrive in the ever-evolving online landscape.
                    </p>
                    <ul className="mt-2">
                        {SALES_ITEMS.map((item, index) => (
                            <li key={index} className=' w-4/3 flex items-left pt-2'>
                                <img src='images/polygon-3.svg' alt='' />
                                <p>
                                    <span className=" text-dark-1 text-left font-bold text-l leading-140 font-poppins ">{item.title}</span>
                                    &nbsp;
                                    <span className=" text-gray text-left font-bold text-l leading-140 font-poppins ">{item.description}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                    <Button className='bg-primary border-none rounded-lg text-base leading-120 font-poppins mt-10' >
                            About Us
                        </Button>

                </div>
                <div className="md:p-4 lg:mt-0 w-80 mx-auto md:w-1/2 lg:w-1/2 ">
                    <img
                        src="images/img-about.png"
                        alt="Изображение"
                        className="w-[467px] h-[467px] rounded-lg transition-transform ease-in-out mt-20"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
