"use client";

import { Inter } from "next/font/google";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";
import PageTransitionEffect from "@/components/PageTransitionEfffect";
import { usePathname } from "next/navigation";
import ParticleCube from "@/components/particle-cube/ParticleCube";
import LightBloom from "@/components/light-bloom/LightBloom";
import Footer from "@/components/footer/Footer";
import HorizontalScroll from "@/components/horipage/HorizontalScroll";
import { useEffect, useRef } from "react";
import Link from "next/link";
import TopNav from "@/components/top-nav/TopNav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleRouteChange = () => {
      if (pageRef.current) {
        // Recalculate page length or perform any necessary updates
        const pageHeight = pageRef.current.scrollHeight;
        console.log("Page height:", pageHeight);
      }
    };

    handleRouteChange();
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={`relative w-full h-full ${inter.className}`}
        suppressHydrationWarning
      >
        {/* <TopNav /> */}
        <PageTransitionEffect>
          <div
            ref={pageRef}
            className="relative z-10 w-full h-full overflow-auto"
          >
            <div className="container mx-auto px-5 py-10 min-h-screen">
              {children}
            </div>
          </div>
        </PageTransitionEffect>
        {/* <div className="w-full">
          <HorizontalScroll />
        </div> */}
        <Footer />
      </body>
    </html>
  );
}
