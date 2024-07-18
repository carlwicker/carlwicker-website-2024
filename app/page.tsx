"use client";

import TypographyMask from "@/components/home/TypographyMask";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="relative text-white">
      <div className="absolute inset-0">
        <TypographyMask aria-label="Background Typography" />
      </div>
      <div className="relative z-10">
        <Hero />

        <Footer />
      </div>
    </main>
  );
}
