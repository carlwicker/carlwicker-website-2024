"use client";

import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ImageScroller from "@/components/image-scroller/ImageScroller";
import SplitTypeTest from "@/components/split-type-test/SplitTypeTest";

export default function Home() {
  return (
    <main className="relative text-white">
      <div className="relative z-10 ">
        <Hero />
        <SplitTypeTest />
        {/* <ImageScroller /> */}

        <Footer />
      </div>
    </main>
  );
}
