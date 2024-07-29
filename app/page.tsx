"use client";

import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ScrollBlock from "@/components/ScrollBlock";
import FadeComp from "@/components/fade-comp/FadeComp";

export default function Home() {
  return (
    <main className="relative text-white">
      <div className="relative z-10 ">
        <Hero />
        <div className="flex">
          <ScrollBlock />
        </div>

        <FadeComp />
        <div className="flex rotate-180">
          <ScrollBlock />
        </div>
        <Footer />
      </div>
    </main>
  );
}
