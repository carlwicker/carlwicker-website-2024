"use client";

import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ImageScroller from "@/components/image-scroller/ImageScroller";
import ScrollBlock from "@/components/ScrollBlock";
import SplitTypeTest from "@/components/split-type-test/SplitTypeTest";

export default function Home() {
  return (
    <main className="relative text-white">
      <div className="relative z-10 ">
        <Hero />
        <div className="flex">
          <ScrollBlock />
        </div>

        <SplitTypeTest />
        {/* <div className="flex rotate-180">
          <ScrollBlock />
        </div> */}
        <ImageScroller />
        <Footer />
      </div>
    </main>
  );
}
