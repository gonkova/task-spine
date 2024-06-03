'use client';
import React, { useState } from 'react';
import AccordionUI from '@/components/AccordionUI';
import Image from 'next/image';

const FAQ = () => {
    const [Index, setIndex] = useState(null);

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
        <div className='container w-[90%] md:w-9/12  mx-auto pb-24'>
            <div className='flex flex-col justify-between md:items-center  mt-16 md:mt-24 relative'>
                <div>
                    <h1 className="text-4xl md:text-[64px] text-left font-sf-pro mb-[9%] font-bold leading-110">
                        Got Questions?
                        <br className="block md:hidden" />
                        We&apos;ve Got
                        <br />
                        Answers!
                    </h1>
                    <div className='flex md:-mt-12'>
                        <Image
                            src='images/billiard.svg'
                            alr=''
                            width={20}
                            height={20} />
                        <span className='ml-2 text-l  font-bold font-sf-pro text-dark-1'>
                            Check out the services
                        </span>
                    </div>
                </div>
                <img src='images/vector.svg' alt='' className=' w-28 md:w-48 h-auto ml-[153px] md:-ml-[298px] absolute z-20 top-8 md:top-2/3 pb-2.5 md:transform -translate-y-1/2 -translate-x-1/2' />
            </div>
            <div className=" md:px-8 flex flex-col  justify-center items-center mt-6 md:mt-12 md:mx-20 rounded-xl h-auto ">
                {data.map((data) => {
                    return (
                        <AccordionUI
                            title={data.question}
                            Id={data.id}
                            children={data.answer}
                            Index={Index}
                            setIndex={setIndex}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default FAQ;
