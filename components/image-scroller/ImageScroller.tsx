import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      gsap.to(scrollRef.current, {
        x: "-100vw",
        ease: "none",

        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top top",
          end: "+=100vh",
          scrub: 1,

          markers: true,
        },
      });
    }
  }, []);

  return (
    <div
      className="h-[100vh] w-[200vw] flex flex-row overflow-y-hidden"
      ref={scrollRef}
    >
      <div
        className="h-[100vh] bg-green-800 w-[100vw]"
        style={{
          backgroundImage: "url(./webp/painting2.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="h-[100vh] bg-blue-800 w-[100vw]"
        style={{
          backgroundImage: "url(./webp/interstellar.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}
