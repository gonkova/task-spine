'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';

const ContactForm = () => {
  const handleSubmit = () => {
    console.log('Form submitted!');
  };

  return (
    <div className=" w-full">
      <div className="bg-bgcustom container mx-auto py-8 px-2 md:px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:space-x-20">
          <div className="w-full md:w-2/5 mb-4 md:mb-36">
            <h1 className="text-sm md:text-2xl font-semibold leading-110 font-sf-pro mb-4 md:pb-14 md:-mt-14">
              Get in Touch with
              <br />
              Spine
            </h1>
            <p className='text-gray leading-140 font-poppins font-semibold'>
              Whether you have questions about our services, want to discuss a potential collaboration, or just feel like saying hello, we&apos;d love to hear from you.
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
          <div className="w-full mx-auto md:w-3/5">
            <form className="px-4 md:px-8 pt-8 pb-8 mb-4">
              <div className="mb-6 flex flex-wrap -mx-2">
                <div className="w-1/2 px-2 ">
                  <label className="block text-dark-1 text-lg font-sf-pro font-bold leading-140 mb-3" htmlFor="firstName">
                    Name<span className="text-red-500 text-3xl">*</span>
                  </label>
                  <input
                    className=" text-dark-4 font-poppins font-semibold leading-140 bg-secondary shadow appearance-none rounded-lg w-full py-3 md:py-6 px-3  focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="w-1/2 px-2">

                  <input
                    className=" mt-11 text-dark-4 font-poppins font-semibold leading-140 bg-secondary shadow appearance-none rounded-lg w-full py-3 md:py-6 px-3 focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-6 flex flex-wrap -mx-2">
                <div className=" w-1/2 px-2 mb-2 md:mb-0">
                  <label className="block text-dark-1 text-lg font-sf-pro font-bold leading-140 mb-3" htmlFor="email">
                    Email <span className="text-red-500 text-3xl">*</span>
                  </label>
                  <input
                    className=" text-dark-4 font-poppins font-semibold leading-140 bg-secondary shadow appearance-none rounded-lg w-full py-3 md:py-6 px-3 focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="spine@gmail.com"
                    required
                  />
                </div>
                <div className=" w-1/2 px-2">
                  <label className="block text-dark-1 text-lg font-sf-pro font-bold leading-140 mb-3" htmlFor="phone">
                    Phone <span className="text-red-500 text-3xl">*</span>
                  </label>
                  <input
                    className=" text-dark-4 font-poppins font-semibold leading-140 bg-secondary shadow appearance-none rounded-lg w-full py-3 md:py-6 px-3  focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="+359 000 000 000"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-dark-1 text-lg font-sf-pro font-bold leading-140 mb-4" htmlFor="message">
                  Comment or Message
                </label>
                <textarea
                  className="text-dark-4 text-xs md:font-xl font-semibold leading-140 bg-secondary shadow appearance-none rounded-lg w-full py-20 md:py-16 px-3 focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder=""
                ></textarea>
              </div>
              <div className="flex items-center justify-between mt-4">
              <Button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-primary text-dark-1 border-none font-poppins leading-120 font-bold hover:bg-transparent hover:border-dark-1 hover:border-2 hover:border-solid py-5 md:py-4 px-10 rounded-xl"
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