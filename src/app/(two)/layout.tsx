import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import ServicesNavbar from "@/components/ServicesNavbar";
import ServicesFooter from '@/components/ServicesFooter';

const poppins = Poppins({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPINE",
  description: "Web site",
};

export default function RootLayout({
  children,
}: Readonly<{
  
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans`}>
        <ServicesNavbar />
        {children}
        <ServicesFooter />
        </body>
    </html>
  );
}
