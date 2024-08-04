import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ImageScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      gsap.to(scrollRef.current, {
        x: "-100vw",
        ease: "none",

        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top top",
          end: "top bottom",
          scrub: 3,
          pin: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (outerRef.current) {
      gsap.to(outerRef.current, {
        scrollTrigger: {
          // trigger: outerRef.current,
          start: "top top",
        },
      });
    }
  }, []);

  return (
    <div className="h-[50vh] w-[200vw] overflow-hidden" ref={outerRef}>
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
        <Link href="/interstellar" passHref target="_top">
          <div
            className="h-[100vh] bg-blue-800 w-[100vw]"
            style={{
              backgroundImage: "url(./webp/interstellar.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </Link>
      </div>
    </div>
  );
}
