import React from "react";
import HeroSectionAbout from "@/components/HeroSectionAbout";
import OurStorySection from "@/components/OurStorySection";
import ChooseSection from "@/components/CooseSection";
import ContactAbout from '@/components/ContactAbout';


const page = () => {
  return (
    <div>
      <HeroSectionAbout />
      <OurStorySection />
      <ChooseSection />
    <ContactAbout />
    </div>
  );
};

export default page;
