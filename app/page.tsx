"use client";

import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import LocomotiveScroll from "locomotive-scroll";
import ParticleCube from "@/components/particle-cube/ParticleCube";
import PerceptionTypography from "@/components/perception-typography/PerceptionTypography";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
      const letters = "012345"; // Use only mid-tone hex characters
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
      }
      setColor(color);
    }

    getRandomHexColor();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container className="overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <ParticleCube color={color} />
      </div>
      <div>
        <PerceptionTypography color={color} />
      </div>
    </div>
  );
}
