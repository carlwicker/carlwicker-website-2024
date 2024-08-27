"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Scroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalSection = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(containerRef.current, {
      x: () => -(horizontalSection.current.offsetWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${horizontalSection.current.offsetWidth}`,
        scrub: 1,
        pin: containerRef.current,
      },
    });
    scrollTrigger: {
      pin: true;
    }
  }, []);

  return (
    <div className="flex w-[400vw]" ref={containerRef}>
      <div
        className="flex w-[400vw] h-[100vh] bg-red-400"
        ref={horizontalSection}
      >
        <div className="w-[100vw] h-[100vh] bg-red-400"></div>
        <div className="w-[100vw] h-[100vh] bg-blue-400"></div>
        <div className="w-[100vw] h-[100vh] bg-green-400"></div>
        <div className="w-[100vw] h-[100vh] bg-yellow-400"></div>
      </div>
    </div>
  );
};

export default Scroll;
