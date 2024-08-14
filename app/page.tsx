"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ImageScroller from "@/components/image-scroller/ImageScroller";
import SplitTypeTest from "@/components/split-type-test/SplitTypeTest";
import Ticker from "@/components/ticker/Ticker";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="text-white">
      {/* <div style={{ position: "fixed", top: 0, left: 0 }}>
        Scroll Position: {scrollY}
      </div> */}
      <Hero />
      <Ticker scrollY={scrollY} />
      <ImageScroller />
      <SplitTypeTest scrollY={scrollY} />
      <Footer />
    </main>
  );
}
