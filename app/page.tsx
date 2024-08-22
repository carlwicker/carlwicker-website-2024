"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ImageScroller from "@/components/image-scroller/ImageScroller";
import SplitTypeTest from "@/components/split-type-test/SplitTypeTest";
import Ticker from "@/components/ticker/Ticker";
import Video from "@/components/video/Video";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HorizontalScroll from "@/components/horipage/HorizontalScroll";

export default function Home() {
  const horizontalScrollRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = horizontalScrollRef.current;
    if (element) {
      gsap.to(element, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }
  }, []);

  return (
    <main className="text-white w-full flex flex-col items-center justify-center min-h-screen">
      <Hero />

      {/* <Video /> */}

      {/* <ImageScroller /> */}

      <SplitTypeTest />

      {/* <Ticker color={"#111"} /> */}

      <Footer />
      {/*  <div ref={horizontalScrollRef}>
        <HorizontalScroll />
      </div> */}
    </main>
  );
}
