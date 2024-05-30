'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';

const ContactForm = () => {
  const handleSubmit = () => {
    console.log('Form submitted!');
  };

  return (
    <div className="bg-bgcustom w-full">
      <div className="bg-bgcustom container mx-auto py-8 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:space-x-20">
          <div className="w-full md:w-2/5 mb-4 md:mb-36">
            <h1 className="text-sm md:text-2xl font-semibold leading-110 font-sf-pro mb-4 md:pb-14 md:-mt-14">
              Get in Touch with
              <br />
              Spine
            </h1>
            <p className='text-gray leading-140 font-poppins font-semibold'>
              Whether you have questions about our services, want to discuss a potential collaboration, or just feel like saying hello, we'd love to hear from you.
            </p>
            <div className="flex flex-col md:flex-row justify-between pt-8 space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex flex-col items-start">
                <div className='flex space-x-2'>
                  <Image
                    src='images/location.svg'
                    alt=''
                    width={20}
                    height={20}
                  />
                  <p className="text-dark-4 text-xl font-bold">Plovdiv, K. Riacho 95, Bulgaria</p>
                </div>
                <div className='flex space-x-4'>
                  <Image
                    src='images/phone.svg'
                    alt=''
                    width={20}
                    height={20}
                  />
                  <a href="tel:+359884777777" className="text-dark-4 text-xl font-bold">+359 884 77 77 777</a>
                </div>
                <div className='flex space-x-2'>
                  <Image
                    src="images/email-icon.svg"
                    alt="Email Icon"
                    width={20}
                    height={20}
                  />
                  <a href="mailto:j.borisov@spine.com" className="text-dark-4 text-xl font-bold">j.borisov@spine.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <form className="px-4 md:px-8 pt-8 pb-8 mb-4">
              <div className="mb-6">
                <input
                  className="shadow appearance-none rounded-lg w-full py-3 md:py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <input
                  className="shadow appearance-none rounded-lg w-full py-3 md:py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <textarea
                  className="shadow appearance-none rounded-lg w-full py-3 md:py-16 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <Button
                  type="button"
                  onClick={handleSubmit}
                  className=" bg-primary text-dark-1 border-tran font-poppins leading-120 font-bold hover:text-blue-500 hover:bg-green-600 py-4 px-10 rounded-lg"
                >
            Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
