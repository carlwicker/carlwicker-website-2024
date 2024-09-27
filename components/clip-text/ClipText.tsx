import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ClipText({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        y: "-200px",
        scrollTrigger: {
          trigger: innerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="mx-auto container">
      <div
        className="w-fit text-[200px] text-neutral-900 font-extrabold tracking-tighter"
        ref={textRef}
        style={{ clipPath: "inset(0% 100%)" }}
      >
        <div className="h-[200px] uppercase text-neutral-800 leading-none">
          <div ref={innerRef}>
            <div>{children}</div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
