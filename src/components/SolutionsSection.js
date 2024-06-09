'use client';
import React from 'react';
import { DiEnvato } from 'react-icons/di';

const SolutionsSection = () => {
  const items = [
    { id: 1, imageSrc: '/images/solutions-1.svg', alt: 'Item 1', title: 'Digital Marketing Solutions', description: 'Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites. Elevate your online identity with our cutting-edge web design and development services.' },
    { id: 2, imageSrc: '/images/solutions-2.svg', alt: 'Item 2', title: 'Web Design and Development', description: 'Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites. Elevate your online identity with our cutting-edge web design and development services.' },
    { id: 3, imageSrc: '/images/solutions-3.svg', alt: 'Item 3', title: 'Consultancy and Strategy', description: 'Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites. Elevate your online identity with our cutting-edge web design and development services.' },
    { id: 4, imageSrc: '/images/solutions-4.svg', alt: 'Item 4', title: 'Analytics and Reporting', description: 'Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites. Elevate your online identity with our cutting-edge web design and development services.' },
  ];

  return (
    <div className="h-auto bg-[url('/images/bg-solutions.png')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center ">
    <div className=" py-10 px-6 md:px-8 max-w-7xl mx-auto mb-5 md:mb-20">
      <h2 className="text-4xl md:text-7xl font-bold text-center mt-10  md:mt-20 mb-16 md:mb-28">
        We are creating a Crafting
        <br className='hidden md:block'/> Optimal Solutions
      </h2>
      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-8 list-decimal list-inside">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-2xl py-12 px-10 flex flex-col items-center md:items-start">
            <img src={item.imageSrc} alt={item.alt} className="w-18 h-18 mb-8" />
            <li className="text-dark-1 text-2xl font-poppins font-semibold text-center md:text-left mb-4">{item.title}</li>
            <p className="text-gray font-poppins text-sm leading-140 text-center md:text-left">{item.description}</p>
          </div>
        ))}
      </ol>
    </div>
    </div>
  );
};

export default SolutionsSection;
