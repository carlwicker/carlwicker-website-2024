"use client";

import { useEffect } from "react";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import SplitText from "@/components/split-text/SplitText";
import HorizontalScroll from "@/components/horipage/HorizontalScroll";
import Lenis from "lenis";
import LocomotiveScroll from "locomotive-scroll";
import ClipText from "@/components/clip-text/ClipText";
import Iracing from "@/components/iracing/Iracing";
import InterstellarPoster from "@/components/interstellar-poster/InterstellarPoster";
import LightBloom from "@/components/light-bloom/LightBloom";
import UxUi from "@/components/uxui/UxUi";

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
      <LightBloom />

      <div className="py-40 px-5 bg-neutral-900 min-h-[200vh]">
        <ClipText color="white" fontSize={250}>
          perception
        </ClipText>
        <p className="container mx-auto text-white text-6xl pt-20 pb-40 flex">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          veniam voluptas neque! Laborum rerum modi quisquam blanditiis
          perspiciatis, perferendis, nisi tempora accusamus dolorum cum
          voluptates expedita doloribus illo! Aliquam.
        </p>
        <ClipText color="cyan" fontSize={155}>
          perception
        </ClipText>
        <ClipText color="red" fontSize={255}>
          reaction
        </ClipText>
        <ClipText fontSize={300}>perception</ClipText>{" "}
        <ClipText color="blue" fontSize={155}>
          perception
        </ClipText>
      </div>

      {/* <Iracing /> */}

      <div className="w-full">
        <HorizontalScroll />
      </div>

      <InterstellarPoster />
      <Footer />
    </main>
  );
}
