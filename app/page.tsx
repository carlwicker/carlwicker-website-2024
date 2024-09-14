"use client";

import { useEffect } from "react";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import SplitText from "@/components/split-text/SplitText";
import HorizontalScroll from "@/components/horipage/HorizontalScroll";
import Lenis from "lenis";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main
      className="text-white font-thin overflow-x-hidden"
      data-scroll-container
    >
      <Hero />
      {/* <div className="w-full">
        <HorizontalScroll />
      </div> */}

      <div data-scroll data-scroll-speed="0.25">
        <SplitText />
      </div>

      <Footer />
    </main>
  );
}
