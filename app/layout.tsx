"use client";

import { Inter } from "next/font/google";
import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";

import Head from "next/head";
import PageTransitionEffect from "@/components/PageTransitionEfffect";

const inter = Inter({ subsets: ["latin"], weight: ["200", "400", "900"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scroll: any | null;
    // Dynamically import LocomotiveScroll only on the client side
    import("locomotive-scroll").then((LocomotiveScroll) => {
      if (scrollRef.current) {
        scroll = new LocomotiveScroll.default({
          el: scrollRef.current,
          smooth: true,
        });

        new ResizeObserver(() => scroll.update()).observe(
          document.querySelector("[data-scroll-container]") as Element
        );
      }
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Carl Wicker - Web Developer</title>
        <meta
          name="description"
          content="Transforming Ideas Into Stunning, High-Performance Websites"
        />
        {/* Add more meta tags as needed for SEO */}
      </Head>

      <html lang="en" className="">
        <body data-scroll-container ref={scrollRef} className={inter.className}>
          <PageTransitionEffect>{children}</PageTransitionEffect>
        </body>
      </html>
    </>
  );
}
