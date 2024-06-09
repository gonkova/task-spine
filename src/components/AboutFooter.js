"use client";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import FormNewslatter from "./FormNewslatter";

const AboutFooter = () => {
  const sections = [
    {
      title: "Menu",
      items: ["Home", "About", "Services", "FAQ", "Contact"],
    },
    {
      title: "Services",
      items: [
        "Web Design & Development",
        "Branding",
        "Digital Marketing",
        "Content Creation",
        "Technical Support",
      ],
    },
  ];

  return (
    <div className=" bg-dark-1 h-1/2 w-full m-0 p-0">
      <div className="bg-dark-1  w-full mx-auto flex flex-col md:flex-row md:justify-around items-center md:items-start p-10  md:p-0">
        <div className="p-5 md:mt-10 text-center md:text-left ">
          <ul>
            <div className="pb-10 ml-14 md:ml-0">
              <img
                src="images/logo.svg"
                alt=""
                className="bg-bgcustom rounded-md w-46 h-auto"
              />
            </div>
            <p className="text-light-5 text-sm -mt-4 md:-mt-0  w-full md:w-64 pb-6">
              DigitalBoostPro is the ultimate boost for your online presence.
              We&apos;re here to supercharge your digital agency&apos;s journey.
            </p>
            <div className="flex ml-20 md:ml-0 gap-6 pb-5">
              <img
                src="images/facebook-logo.svg"
                alt=""
                className=" h-auto cursor-pointer transform hover:scale-150"
              />
              <img
                src="images/twitter-logo.svg"
                alt=""
                className=" cursor-pointer transform hover:scale-150"
              />
              <img
                src="images/instagram-logo.svg"
                alt=""
                className="cursor-pointer transform hover:scale-150"
              />
            </div>
          </ul>
        </div>
        {sections.map((section, index) => (
          <div key={index} className="mt-10 md:mt-16 w-40 ">
            <p className="text-white  text-xl pb-4">
              {section.title}
            </p>
            <ul>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="text-light-5 text-md pb-2  cursor-pointer hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <FormNewslatter
          thanksMessage="Thanks for subscribing!"
          formTitle="Join our newslatter"
          placeholderText="Enter email address"
          buttonText="Get Start"
          containerClass="my-custom-container-class"
          formClass="my-custom-form-class"
          titleClass="my-custom-title-class"
          inputClass="my-custom-input-class"
          buttonClass=" text-light-dark-5"
          thanksContainerClass="my-custom-thanks-container-class"
          thanksIconClass="my-custom-thanks-icon-class"
          thanksTextClass="my-custom-thanks-text-class"
          placeholderTextClass="placeholder:text-light-6 "
          inputBorderClass="border-light-6"
        />
      </div>
      <hr className=" md:mt-10 mx-12 border-white" />
      <div className="p-10 text-center">
        <p className="text-white md:text-base">
          &copy; 2023 Spine ALL RIGHTS REVERSED
        </p>
      </div>
    </div>
  );
};

export default AboutFooter;
