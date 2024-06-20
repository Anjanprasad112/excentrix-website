import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComp  from "@/components/NavbarComp/page";
import FooterComp from '@/components/FooterComp/page';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Excentrix | Empower your business with AI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComp/>
        {children}
        <FooterComp/>
      </body>
    </html>
  );
}
