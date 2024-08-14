import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Ticker({ scrollY }: { scrollY: number }) {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tickerRef.current) {
      const tickerWidth = tickerRef.current.offsetWidth;

      gsap.to(tickerRef.current, {
        x: -tickerWidth,
        ease: "none",
        duration: 80000, // Increased duration for slower scroll
        scrollTrigger: {
          trigger: tickerRef.current,
          start: "center bottom",
          end: "bottom top",
          scrub: 200,
        },
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % tickerWidth),
        },
      });
    }
  }, []);

  return (
    <div
      className=""
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <motion.div
        ref={tickerRef}
        className="text-[30vh] text-nowrap font-bold text-white uppercase"
        style={{
          display: "inline-block",
          fontFamily: "'Inter', sans-serif",
          transform: "skewZ(-100deg) skewY(-0deg)",
        }}
      >
        ReactJS//NextJS//TypeScript//JavaScript//GSAP//Framer
        Motion//TailwindCSS//CSS//ReactJS//NextJS//TypeScript//JavaScript//GSAP//Framer
        Motion//TailwindCSS//CSS//ReactJS//NextJS//TypeScript//JavaScript//GSAP//Framer
        Motion//TailwindCSS//CSS//
      </motion.div>
    </div>
  );
}
