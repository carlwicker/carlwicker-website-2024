"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Swiss1 from "../swiss/Swiss1";
import Swiss2 from "../swiss/Swiss2";
import Swiss3 from "../swiss/Swiss3";

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
        // markers: true,
      },
    });
  }, []);

  return (
    <div ref={containerRef}>
      <div className="flex w-fit" ref={horizontalSection}>
        <div className="w-screen h-screen  relative">
          <Swiss1 />
        </div>
        <div className="w-screen h-screen  relative">
          <Swiss2 />
        </div>
        <div className="w-screen h-screen  relative">
          <Swiss3 />
        </div>
      </div>
    </div>
  );
};

export default Scroll;
