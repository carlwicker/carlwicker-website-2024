import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Ticker = ({ color }: { color: string }) => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateTicker = () => {
      if (tickerRef.current) {
        const tickerWidth = tickerRef.current.offsetWidth;

        gsap.to(tickerRef.current, {
          x: -tickerWidth,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: tickerRef.current,
            start: "center bottom",
            end: "bottom top",
            scrub: 50,
          },
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % tickerWidth),
          },
        });
      }
    };

    animateTicker();

    // Cleanup function to remove GSAP animations
    return () => {
      if (tickerRef.current) {
        gsap.killTweensOf(tickerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="py-40"
      style={{
        overflow: "hidden",
      }}
    >
      <div
        ref={tickerRef}
        className="text-[7vw] text-nowrap font-bold uppercase p-0  m-0 flex gap-0 transform"
        style={{
          display: "inline-block",
          fontSize: "19vw",
          lineHeight: "18vw",
          height: "19vw",
          width: "content",
          color: color,
          transform: "skew(10deg) translateY(90deg)",
        }}
      >
        ReactJS//NextJS//TypeScript//JavaScript//GSAP//Framer
        Motion//TailwindCSS//CSS//ReactJS//NextJS//TypeScript//JavaScript//GSAP//Framer
        Motion//TailwindCSS//CSS
      </div>
    </div>
  );
};

export default Ticker;
