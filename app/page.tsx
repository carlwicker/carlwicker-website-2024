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

export default function Home() {
  useEffect(() => {
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
      {/* <Video /> */}
      {/* <ImageScroller /> */}
      <SplitText />

      {/* <Ticker color={"#111"} /> */}
      {/* <div className="w-full">
        <HorizontalScroll />
      </div> */}
      {/* <SpinningCube /> */}
      {/* <Interstellar /> */}

      <Footer />
    </main>
  );
}
