import Image from "next/image";
import Hero from '@/components/Hero';
import SectionAbout from '@/components/SectionAbout';
import SectionServices from '@/components/SectionServices';
import SectionFAQ from "@/components/SectionFAQ";
import ContactForm from '@/components/ContactForm';


export default function Home() {
  return (
    < >
      <Hero />
      <SectionAbout />
      <SectionServices />
      <SectionFAQ />
   <ContactForm />
    </>
  );
}
