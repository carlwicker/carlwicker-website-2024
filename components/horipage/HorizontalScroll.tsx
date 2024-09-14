"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Video from "../video/Video";
import Unsplash from "../unsplash/Unsplash";
import SplitText from "../split-text/SplitText";
import SpinningCube from "../spinning-cube/SpinningCube";
import Iracing from "../iracing/Iracing";

const Scroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalSection = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(containerRef.current, {
      x: () => -(horizontalSection.current!.offsetWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${horizontalSection.current!.offsetWidth}`,
        scrub: 1,
        pin: containerRef.current,
      },
    });
  }, []);

  return (
    <div ref={containerRef}>
      <div className="flex w-fit" ref={horizontalSection}>
        <div className="w-screen h-screen  relative">
          <Iracing />
        </div>
        <div className="w-screen h-screen  relative">
          <SpinningCube />
        </div>
        <div className="w-screen h-screen  relative">
          <Iracing />
        </div>
      </div>
    </div>
  );
};

export default Scroll;
