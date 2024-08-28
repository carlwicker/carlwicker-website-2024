"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ImageScroller from "@/components/image-scroller/ImageScroller";
import SplitTypeTest from "@/components/split-type-test/SplitTypeTest";
import Ticker from "@/components/ticker/Ticker";
import Video from "@/components/video/Video";
import HorizontalScroll from "@/components/horipage/HorizontalScroll";

export default function Home() {
  return (
    <main className="text-white flex flex-col items-center justify-center">
      <Hero />

      {/* <Video /> */}

      {/* <ImageScroller /> */}

      <SplitTypeTest />

      {/* <Ticker color={"#111"} /> */}
      {/* <div className="w-full">
        <HorizontalScroll />
      </div> */}

      <Footer />
    </main>
  );
}
