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
        <div>
            <div className='flex flex-col justify-between items-center  mt-20 md:mt-24 relative'>
                <div>
                    <h1 className="text-xl md:text-[64px] text-left font-sf-pro mb-[9%] font-bold leading-110">
                        Got Questions? We&apos;ve Got
                        <br className="hidden md:block" />
                        Answers!
                    </h1>
                </div>
                <img src='images/vector.svg' alt='' className='w-48 h-auto -ml-[298px] absolute z-20 top-1/2 transform -translate-y-1/2 -translate-x-1/2' />
                <div className='flex flex-1 w-1/2 mx-auto'>
                    <Image
                        src='images/billiard.svg'
                        alr=''
                        width={20}
                        height={20} />
                    <p className='ml-2 font-bold text-dark-1'>Check out the services</p>
                </div>
            </div>

            <div className=" flex flex-col  justify-center items-center md:mt-32 md:mx-20 p-5 rounded-xl h-auto py-20 bg-green-50">
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
