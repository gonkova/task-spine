import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';


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
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
