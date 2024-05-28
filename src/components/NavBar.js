"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../components/Button';

const Navbar = () => {
    const MENU_ITEMS = [
        { link: '/', title: 'Home' },
        { link: '/about', title: 'About' },
        { link: '/serv', title: 'Services' },
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
        <nav className='bg-custombg '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16 pt-11'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0 '>
                            <Link href='/'>
                                <div>
                                    <img src="images/spine.svg" alt="" className="bg-bgcustom rounded-md w-full h-full" />
                                </div>
                            </Link>
                        </div>
                        <div className='hidden md:flex items-center  ml-36 mr-6'>
                            {MENU_ITEMS.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <div className='font-semibold text-dark-3 hover:text-dark-1 p-2 ml-10 cursor-pointer hover:underline underline-offset-8 decoration-4 decoration-primary'>
                                        {item.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='hidden md:flex items-center '>
                        <Button className='bg-transparent hover:bg-transparent text-lg rounded-lg leading-120 font-poppins'>
                            Sign Up
                        </Button>
                    </div>
                    <div className='md:hidden   flex items-center'>
                        <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="w-10 h-10">
                                {isClick ? (
                                    <path fillRule="evenodd" d="M6 8.707l5.146-5.147a1 1 0 011.415 1.414L7.414 10l5.147 5.146a1 1 0 11-1.415 1.415L6 11.414l-5.146 5.147a1 1 0 11-1.415-1.415L4.586 10 1.44 6.854a1 1 0 111.415-1.414L6 8.707z" clipRule="evenodd" />
                                ) : (
                                    <path fillRule="evenodd" d="M3 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 5a1 1 0 100 2h12a1 1 0 100-2H4zm12 6a1 1 0 110 2H7a1 1 0 110-2h9z" clipRule="evenodd" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className='md:hidden pl-10  inset-0 flex flex-col items-center justify-center w-full h-[80vh] '>
                    <div className='px-2 pt-2 pb-3 space-y-6 sm:px-3 flex flex-col'>
                        {MENU_ITEMS.map((item, index) => (
                            <Link key={index} href={item.link} onClick={closeNavbar}>
                                <div className='text-3xl font-semibold text-custom1 hover:text-blue'>{item.title}</div>
                            </Link>
                        ))}
                        <div className='space-y-12 pt-10'>
                            <button onClick={closeNavbar} className="w-60 text-2xl bg-white text-custom1 border border-silver text-center font-bold py-2 px-8 rounded">
                                Log in
                            </button>
                            <Button onClick={closeNavbar} className='w-60 text-2xl hover:bg-custom3 hover:text-blue'>
                                Sign up
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
