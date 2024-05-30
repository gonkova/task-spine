import Image from "next/image";
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesSection from '@/components/ServicesSection';
import FAQ from "@/components/FAQ";
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    < >
      <Hero />
      <About />
      <ServicesSection />
      <FAQ />
   <ContactForm />
    </>
  );
}
