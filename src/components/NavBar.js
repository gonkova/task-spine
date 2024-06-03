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
        <nav className='bg-custombg'>
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
                                <div className='flex justify-between mx-4 font-semibold font-poppins leading-110 text-dark-3 hover:text-dark-1 p-2  cursor-pointer hover:underline underline-offset-8 decoration-4 decoration-primary'>
                                    {item.title}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className='hidden md:flex w-1/4 justify-end'>
                        <Button className='bg-transparent hover:bg-transparent text-lg rounded-lg leading-120 font-poppins'>
                            Sign Up
                        </Button>
                    </div>
                    <div className='md:hidden flex items-center'>
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
                <div className='md:hidden pl-10 inset-0 flex h-screen w-screen flex-col'>
                    <div className='px-2 pt-12 pb-3 space-y-6 sm:px-3 flex flex-col '>
                        {MENU_ITEMS.map((item, index) => (
                            <Link key={index} href={item.link} onClick={closeNavbar}>
                                <div className='text-dark-1 text-xl font-semibold font-poppins leading-110 hover:text-blue'>{item.title}</div>
                            </Link>
                        ))}
                        <div className=' pt-6'>
                            <Button className='bg-transparent hover:bg-transparent text-lg rounded-lg leading-120 font-poppins'>
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
    export default Navbar;
    