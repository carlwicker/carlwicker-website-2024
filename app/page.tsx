"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import LocomotiveScroll from "locomotive-scroll";
import ParticleCube from "@/components/particle-cube/ParticleCube";
import PerceptionTypography from "@/components/perception-typography/PerceptionTypography";
import ThreeColumnTypography from "@/components/three-col-typo/ThreeColumnTypography";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const threeColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    gsap.set(threeColRef.current, {
      position: "absolute",
    });

    gsap.to(threeColRef.current, {
      y: threeColRef.current?.offsetTop,
      scrollTrigger: {
        trigger: threeColRef.current,
        start: "top top",
        end: "+=2000px",
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: true,
        toggleActions: "play reset reset reset",
        onLeave: () => {
          gsap.set(threeColRef.current, {
            opacity: 0,
          });
        },
      },
    });

    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container className="overflow-x-hidden">
      {/* <Hero /> */}
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <ParticleCube />
      </div>
      <PerceptionTypography />
      {/* <div className="h-[3000px] "> */}
      {/* <div ref={threeColRef}> */}
      <ThreeColumnTypography />
      {/* </div>
      </div> */}
    </div>
  );
}
