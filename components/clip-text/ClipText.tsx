import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ClipText() {
  const textRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
        },
        clipPath: "inset(0% 0% 0% 0%)",
      });
    }
  }, []);

  useEffect(() => {
    if (innerRef.current) {
      gsap.to(innerRef.current, {
        y: "-8.5rem",
        scrollTrigger: {
          trigger: innerRef.current,
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="py-20 bg-white">
      <div className="mx-auto container">
        <div
          className="w-fit text-9xl text-neutral-900 font-semibold tracking-tighter"
          ref={textRef}
          style={{ clipPath: "inset(0% 100%)" }}
        >
          <div className="h-[8rem] ">
            <div ref={innerRef}>
              <div>Experimental Header</div>
              <div>Experimental Header</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
