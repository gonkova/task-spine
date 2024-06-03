'use client';
import React from 'react';
import { FaTwitter } from "react-icons/fa";
import FormNewslatter from './FormNewslatter';




const Footer = () => {
    const sections = [
        {
            title: "Menu",
            items: [
                "Home",
                "About",
                "Services",
                "FAQ",
                "Contact"
            ]
        },
        {
            title: "Services",
            items: [
                "Web Design & Development",
                "Branding",
                "Content Creation",
                "Technical",
                "Support"
            ]
        },

    ];

    return (
        <div className=' bg-dark-1 w-full m-0 p-0'>
            <div className='bg-dark-1 h-1/2 w-full mx-auto flex flex-col md:flex-row  md:justify-around items-center md:items-start p-10 md:p-20'>
                <div className='p-5 text-center md:text-left '>
                    <ul>
                        <div className='pb-10'>
                            <img src="images/Logo.svg" alt="" className="bg-bgcustom rounded-md w-46 h-auto" />
                        </div>
                        <p className='text-white text-lm w-64 pb-6'>
                            Spine is the ultimate boost for your online presence. We&apos;re here to supercharge your digital agency&apos;s journey.
                        </p>
                        <div className='flex ml-16 md:ml-0 gap-6 pb-5'>
                            <img src='images/facebook-logo.svg' alt='' className='w-8 h-auto cursor-pointer transform hover:scale-150' />
                            <img src='images/twitter-logo.svg' alt='' className='w-7 h-auto cursor-pointer transform hover:scale-150' />
                            <img src='images/instagram-logo.svg' alt='' className='w-10 h-10 cursor-pointer transform hover:scale-150' />
                        </div>
                    </ul>
                </div>
                {sections.map((section, index) => (
                    <div key={index} className='p-5 w-40 '>
                        <p className='text-white font-semibold text-xl pb-4'>{section.title}</p>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i} className='text-white text-md pb-2 font-semibold cursor-pointer hover:underline'>{item}</li>

                            ))}
                        </ul>
                    </div>
                ))}
                <FormNewslatter />
            </div>
            <hr className=" md:mt-10 mx-12 border-white" />
            <div className='p-5 text-center'>
                <p className='text-white font-bold'>&copy; 2024 Spine ALL RIGHTS REVERSED</p>
            </div>


        </div>
    );
}

export default Footer;
