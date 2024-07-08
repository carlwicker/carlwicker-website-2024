"use client";

import { Inter } from "next/font/google";
import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";
import CyberCortexVideo from "@/components/CyberCortexVideo";
import useBgColor from "../hooks/useBgColor"; //

const inter = Inter({ subsets: ["latin"], weight: ["200", "400", "900"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const scrollRef = useRef(null);
  const bgColor = useBgColor();

  useEffect(() => {
    // Dynamically import LocomotiveScroll only on the client side
    import("locomotive-scroll").then((LocomotiveScroll) => {
      if (scrollRef.current) {
        const scroll = new LocomotiveScroll.default({
          el: scrollRef.current,
          smooth: true,
        });

        new ResizeObserver(() => scroll.update()).observe(
          document.querySelector("[data-scroll-container]") as Element
        );

        return () => {
          scroll.destroy();
        };
      }
    });
  }, []);

  return (
    <html lang="en" className="">
      <body data-scroll-container ref={scrollRef} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
