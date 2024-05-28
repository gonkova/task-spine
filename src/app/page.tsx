import Image from "next/image";
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    < >
      <Hero />
      <About />
      <ServicesSection />
    </>
  );
}
