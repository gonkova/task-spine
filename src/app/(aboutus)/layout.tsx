import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import AboutNavbar from "@/components/AboutNavbar";
import AboutFooter from "@/components/AboutFooter";


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
       <AboutNavbar />
        {children}
        <AboutFooter />
        </body>
    </html>
  );
}