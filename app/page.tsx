"use client";

import { useEffect } from "react";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import SplitText from "@/components/split-text/SplitText";
import HorizontalScroll from "@/components/horipage/HorizontalScroll";
import Lenis from "lenis";
import LocomotiveScroll from "locomotive-scroll";
import ClipText from "@/components/clip-text/ClipText";

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
    <main className="overflow-x-hidden">
      <Hero />

      <SplitText />

      <div className="py-40 px-5 bg-neutral-100">
        <ClipText>perception</ClipText>
        <ClipText>through</ClipText>
        <ClipText>typeface</ClipText>
        <ClipText>selection</ClipText>
      </div>

      <div className="w-full">
        <HorizontalScroll />
      </div>

      <Footer />
    </main>
  );
}
