"use client";

import { useEffect } from "react";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ImageScroller from "@/components/image-scroller/ImageScroller";
import SplitText from "@/components/split-text/SplitText";
import Ticker from "@/components/ticker/Ticker";
import Video from "@/components/video/Video";
import HorizontalScroll from "@/components/horipage/HorizontalScroll";
import Interstellar from "@/components/interstellar-poster/InterstellarPoster";
import SpinningCube from "@/components/spinning-cube/SpinningCube";
import Lenis from "lenis";
import LocomotiveScroll from "locomotive-scroll";
import Iracing from "@/components/iracing/Iracing";

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

      {/* <ImageScroller /> */}

      {/* <SpinningCube /> */}
      {/* <Ticker color={"#111"} /> */}
      {/* <div className="w-full">
        <HorizontalScroll />
      </div> */}

      <div data-scroll data-scroll-speed="0.25">
        <SplitText />
      </div>
      <div data-scroll data-scroll-speed="-0.5">
        <Iracing />
      </div>

      {/* <Video />          */}
      <Footer />
    </main>
  );
}
