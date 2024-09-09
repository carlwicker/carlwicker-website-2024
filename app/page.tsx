"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ImageScroller from "@/components/image-scroller/ImageScroller";
import SplitText from "@/components/split-text/SplitText";
import Ticker from "@/components/ticker/Ticker";
import Video from "@/components/video/Video";
import HorizontalScroll from "@/components/horipage/HorizontalScroll";
import Interstellar from "@/components/interstellar-poster/InterstellarPoster";
import SpinningCube from "@/components/spinning-cube/SpinningCube";

export default function Home() {
  return (
    <main className="text-white flex flex-col items-center justify-center">
      <Hero />
      {/* <Video /> */}
      {/* <ImageScroller /> */}
      <SplitText />

      {/* <Ticker color={"#111"} /> */}
      {/* <div className="w-full">
        <HorizontalScroll />
      </div> */}
      <SpinningCube />
      {/* <Interstellar /> */}

      <Footer />
    </main>
  );
}
