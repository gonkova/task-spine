"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";

const ContactAbout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="h-auto flex flex-col items-center justify-center">
      <div className="pt-14 md:pt-24 -mb-52 md:-mb-20 mx-auto px-4 md:px-10 w-full max-w-7xl">
        <div className="flex flex-col md:flex-row mx-auto">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl text-center md:text-left font-semibold leading-110 font-sf-pro">
              Get in Touch with
              <br />
              DigitalBoostPro
            </h1>
            <p className="mt-6 md:mt-10 text-gray text-sm md:text-base text-center md:text-left leading-140 font-poppins font-semibold">
            Whether you have questions about our services,<br className="block md:hidden" /> want to discuss a 
              <br className="hidden md:block" />
              potential collaboration, or just<br className="block md:hidden" />  feel like saying hello, we&apos;d love to 
              <br className="hidden md:block" />
              hear from you.
            </p>
            <div>
              <div className="flex flex-col gap-3 md:gap-6 items-center md:items-start pt-10 md:pt-16">
                <div className="flex space-x-4">
                  <img
                    src="images/location.svg"
                    alt=""
                    className="w-6 h-6  md:w-7 md:h-7"
                  />
                  <p className="text-dark-3 text-base md:text-xl font-bold font-poppins text-center md:text-left">
                  Old Port Mouseio, Mykonos, Greece
                  </p>
                </div>
                <div className="flex space-x-4">
                  <img
                    src="images/phone.svg"
                    alt=""
                    className="w-6 h-6  md:w-7 md:h-7"
                  />
                  <a
                    href="tel:+10 (239) 555-0108"
                    className="text-dark-3 text-base md:text-xl font-bold font-poppins text-center md:text-left"
                  >
                    +10 (239) 555-0108
                  </a>
                </div>
                <div className="flex space-x-4">
                  <img
                    src="images/email-icon.svg"
                    alt="Email Icon"
                    className="w-6 h-6  md:w-7 md:h-7"
                  />
                  <a
                    href="mailto:j.borisov@spine.com"
                    className="text-dark-3 text-base md:text-xl font-bold font-poppins text-center md:text-left"
                  >
                    jessica.hanson@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto md:w-1/2 mt-16 md:mt-0">
            <form
              onSubmit={handleSubmit}
              className="px-4 pb-8 mb-4 h-[800px] overflow-hidden"
            >
              <div className="mb-6 flex flex-wrap -mx-2">
                <div className="w-1/2 px-2">
                  <label
                    className="block text-dark-1 md:text-lg font-sf-pro font-bold leading-140 mb-3"
                    htmlFor="firstName"
                  >
                    Name
                    <span className="text-red-500 text-2xl md:text-3xl">*</span>
                  </label>
                  <input
                    className="text-dark-4 text-sm md:text-base font-poppins font-semibold leading-140 bg-secondary shadow appearance-none rounded-lg w-full py-3 md:py-4 px-3 focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="w-1/2 px-2">
                  <input
                    className="mt-12 text-dark-4 text-sm md:text-base font-poppins font-semibold leading-140 bg-secondary shadow appearance-none rounded-lg w-full py-3 md:py-4 px-3 focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-6 flex flex-wrap -mx-2">
                <div className="w-1/2 px-2 mb-2 md:mb-0">
                  <label
                    className="block text-dark-1 text-base md:text-lg font-sf-pro font-bold leading-140 mb-3"
                    htmlFor="email"
                  >
                    Email{" "}
                    <span className="text-red-500 text-2xl md:text-3xl">*</span>
                  </label>
                  <input
                    className="text-dark-4 text-sm md:text-base font-poppins font-semibold leading-140 bg-secondary shadow appearance-none rounded-lg w-full py-3 md:py-4 px-3 focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="b*************.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="w-1/2 px-2">
                  <label
                    className="block text-dark-1 md:text-lg font-sf-pro font-bold leading-140 mb-3"
                    htmlFor="phone"
                  >
                    Phone{" "}
                    <span className="text-red-500 text-2xl md:text-3xl">*</span>
                  </label>
                  <input
                    className="text-dark-4 text-sm md:text-base font-poppins font-semibold leading-140 bg-secondary shadow appearance-none rounded-lg w-full py-3 md:py-4 px-3 focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="+1(480) 555-0103"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-dark-1 md:text-lg font-sf-pro font-bold leading-140 mb-4"
                  htmlFor="message"
                >
                  Comment or Message
                </label>
                <textarea
                  className="text-dark-4 text-xs md:font-xl font-semibold leading-140 bg-secondary shadow appearance-none rounded-lg w-full py-20 md:py-20 px-3 focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder=""
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="flex items-center justify-between mt-4">
                <Button
                  type="submit"
                  className="w-full bg-primary text-dark-1 border-none font-poppins leading-120 font-bold hover:bg-dark-1 hover:text-white py-5 md:py-5 px-10 rounded-xl "
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

export default ContactAbout;
