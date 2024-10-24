"use client";

import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import LocomotiveScroll from "locomotive-scroll";
import ParticleCube from "@/components/particle-cube/ParticleCube";
import PerceptionTypography from "@/components/perception-typography/PerceptionTypography";
import ThreeColumnTypography from "@/components/three-col-typo/ThreeColumnTypography";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GlowingScrollCube from "@/components/glowing-scroll-cube/GlowingScrollCube";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const threeColRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    function getRandomHexColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        // Generate a random number between 0 and 7 to ensure dark colors
        color += letters[Math.floor(Math.random() * 4)];
      }
      setColor(color);
      return color;
    }

    getRandomHexColor();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container className="overflow-x-hidden">
      {/* <Hero /> */}
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <ParticleCube color={color} />
      </div>
      <div>
        <PerceptionTypography color={color} />
      </div>
      {/* <div className="h-[3000px] "> */}
      {/* <div ref={threeColRef}> */}

      <ThreeColumnTypography />
      {/* </div>
      </div> */}
    </div>
  );
}
