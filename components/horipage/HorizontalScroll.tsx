import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      gsap.to(container, {
        x: () => -(container.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${container.scrollWidth - window.innerWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: true,
        },
      });
    }

    return () => {
      if (container) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        overflow: "hidden",
        height: "100vh",
        width: "400vw",
      }}
    >
      <div style={{ width: "100vw", height: "100vh", backgroundColor: "red" }}>
        Section 1
      </div>
      <div style={{ width: "100vw", height: "100vh", backgroundColor: "blue" }}>
        Section 2
      </div>
      <div
        style={{ width: "100vw", height: "100vh", backgroundColor: "green" }}
      >
        Section 3
      </div>
      <div
        style={{ width: "100vw", height: "100vh", backgroundColor: "yellow" }}
      >
        Section 4
      </div>
    </div>
  );
};

export default HorizontalScroll;
