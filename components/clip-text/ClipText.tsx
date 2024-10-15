import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ClipTextProps {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
}

export default function ClipText({
  children,
  color,
  fontSize = 16,
}: ClipTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window) {
      console.log(fontSize);
    }
    // Clip mask animation
    if (textRef.current) {
      gsap.to(textRef.current, {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          end: "top 50%",
          scrub: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (innerRef.current) {
      gsap.to(innerRef.current, {
        y: -fontSize,
        scrollTrigger: {
          trigger: innerRef.current,
          start: "top 50%",
          end: "top 5%",
          scrub: true,
          markers: true,
        },
      });
    }
  }, []);

  return (
    <div
      className={`mx-auto container`}
      style={{
        color: color,
        fontSize: `${fontSize}px`,
        height: `${fontSize}px`,
      }}
    >
      <div
        className={` flex w-fit font-semibold uppercase tracking-tighter`}
        ref={textRef}
        style={{
          clipPath: "inset(0% 100% 0% 100%)",
        }}
      >
        <div
          style={{
            maxHeight: `${fontSize}px`,
            lineHeight: `${fontSize}px`,
          }}
        >
          <div ref={innerRef}>
            <div>{children}</div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
