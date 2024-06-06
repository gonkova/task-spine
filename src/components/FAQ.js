'use client';
import React, { useState } from 'react';
import AccordionUI from '@/components/AccordionUI';
import Image from 'next/image';

const FAQ = () => {
    const [index, setIndex] = useState(null);

    const data = [
        {
            id: 1,
            question: 'What is Spine?',
            answer: 'Spine is a cutting-edge platform designed to elevate your digital agency\'s online presence. It combines impressive design with intuitive features, empowering you to tell your agency\'s story in a way that captivates clients.',
        },
        {
            id: 2,
            question: 'How can Spine enhance my digital agency\'s narrative?',
            answer: 'Spine is a cutting-edge platform designed to elevate your digital agency\'s online presence. It combines impressive design with intuitive features, empowering you to tell your agency\'s story in a way that captivates clients.',
        },
        {
            id: 3,
            question: 'What makes Spine different from other website solutions?',
            answer: 'Spine is a cutting-edge platform designed to elevate your digital agency\'s online presence. It combines impressive design with intuitive features, empowering you to tell your agency\'s story in a way that captivates clients.',
        },
        {
            id: 4,
            question: 'Is Spine suitable for agencies of all sizes?',
            answer: 'Spine is a cutting-edge platform designed to elevate your digital agency\'s online presence. It combines impressive design with intuitive features, empowering you to tell your agency\'s story in a way that captivates clients.',
        },
        {
            id: 5,
            question: 'How can Spine help improve my agency\'s creativity?',
            answer: 'Spine is a cutting-edge platform designed to elevate your digital agency\'s online presence. It combines impressive design with intuitive features, empowering you to tell your agency\'s story in a way that captivates clients.',
        },
    ];

    return (
        <div className=" min-h-screen flex flex-col items-center justify-center">
            <div className="py-2 mx-auto px-6 md:px-52 w-full max-w-7xl -mt-60 md:mt-10">
                <div className=' mx-auto flex flex-col  md:justufy-center md:items-center mt-16  relative'>
                    <div>
                        <h1 className="text-4xl md:text-7xl text-left font-sf-pro mb-[9%] font-bold leading-110">
                            Got Questions?
                            <br className="block md:hidden" />
                            We&apos;ve Got
                            <br />
                            Answers!
                        </h1>
                        <div className='flex -mt-4 md:-mt-12'>
                            <Image
                                src='images/billiard.svg'
                                alt=''
                                width={15}
                                height={15} />
                            <span className='ml-2 text-l  font-bold font-sf-pro text-dark-1'>
                                Check out the services
                            </span>
                        </div>
                    </div>
                    <img src='images/vector.svg' alt='' className=' w-28 md:w-[215px] h-auto ml-[153px] md:-ml-[323px] absolute z-20 top-8 md:-mt-1.5 md:top-2/3 pb-2.5 md:transform -translate-y-1/2 -translate-x-1/2' />
                </div>
                <div className="flex flex-col  justify-center items-center mt-6 md:mt-12 rounded-xl h-auto ">
                    {data.map((item) => (
                        <AccordionUI
                            key={item.id}
                            Id={item.id}
                            title={item.question}
                            Index={index}
                            setIndex={setIndex}
                        >
                            {item.answer}
                        </AccordionUI>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;