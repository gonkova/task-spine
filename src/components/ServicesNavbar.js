"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../components/Button';
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";

const ServicesNavbar = () => {
    const MENU_ITEMS = [
        { link: '/', title: 'Home' },
        { link: '/about', title: 'About' },
        { link: '/services', title: 'Services' },
        { link: '/faq', title: 'FAQ' },
        { link: '/contact', title: 'Contact' },
    ];
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    const closeNavbar = () => {
        setIsClick(false);
    };

    return (
        <nav >
            <div className='max-w-7xl mx-auto '>
                <div className='flex items-center justify-between h-18 p-7 md:p-10'>
                    <div className='flex items-center w-1/4'>
                    <div className='flex-shrink-0 ml-1 md:ml-0'>
                            <Link href='/'>
                                <div>
                                    <img src="images/spine.svg" alt="" className="bg-bgcustom rounded-md w-full h-full" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:flex justify-center w-1/2'>
                        {MENU_ITEMS.map((item, index) => (
                            <Link key={index} href={item.link}>
                                <div className='flex justify-between mx-4 font-semibold font-poppins leading-110 text-dark-3 hover:text-dark-1 p-2  cursor-pointer line-through hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-primary'>
                                    {item.title}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className='hidden md:flex w-1/4 justify-end'>
                        <Button className='text-dark-3 border-dark-3 bg-transparent hover:bg-transparent text-lg rounded-lg leading-120 font-poppins line-through'>
                            Sign Up
                        </Button>
                    </div>
                    <div className='md:hidden flex items-center'>
                        <button className='inline-flex items-center justify-center p-2  text-dark-1' onClick={toggleNavbar}>
                                {isClick ? (
                                    <RiCloseLargeFill className='text-3xl'/>
                                ) : (
                                    <RiMenu3Fill className='text-4xl'/>
                                )}
                            
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className='md:hidden pl-10 inset-0 flex h-screen w-screen flex-col'>
                    <div className='px-2 pt-12 pb-3 space-y-6 sm:px-3 flex flex-col '>
                        {MENU_ITEMS.map((item, index) => (
                            <Link key={index} href={item.link} onClick={closeNavbar}>
                                <div className='text-dark-1 text-xl font-semibold font-poppins leading-110 line-through '>{item.title}</div>
                            </Link>
                        ))}
                        <div className=' pt-6'>
                            <Button className='bg-transparent hover:bg-transparent text-lg rounded-lg leading-120 font-poppins line-through '>
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
    export default ServicesNavbar;
    