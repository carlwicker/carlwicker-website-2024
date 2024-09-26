"use client";

import { useEffect } from "react";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import SplitText from "@/components/split-text/SplitText";
import HorizontalScroll from "@/components/horipage/HorizontalScroll";
import Lenis from "lenis";
import LocomotiveScroll from "locomotive-scroll";
import LightBloom from "@/components/light-bloom/LightBloom";
import Video from "@/components/video/Video";
import InterstellarPoster from "@/components/interstellar-poster/InterstellarPoster";

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
    <main className="text-white font-thin overflow-x-hidden">
      <Hero />

      {/* <LightBloom /> */}

      <div>
        <SplitText />
      </div>

      <div className="w-full">
        <HorizontalScroll />
      </div>
      {/* <InterstellarPoster /> */}
      <Footer />
    </main>
  );
}
