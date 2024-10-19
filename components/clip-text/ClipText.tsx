import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ClipTextProps {
  children: React.ReactNode;
  color?: string;
  clamp?: [number, number, number];
  fontsize?: number;
}

export default function ClipText({
  children,
  color,
  clamp = [1, 50, 2],
}: ClipTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clip mask animation
    if (textRef.current) {
      gsap.to(textRef.current, {
        opacity: 1,
        height: `clamp(${clamp[0]}rem, ${clamp[1]}vw, ${clamp[2]}rem)`,
        clipPath: "inset(0% 0% 0% 0%)",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      });
    }
    console.log(textRef.current?.offsetHeight);
  }, []);

  // Roll upwards animation
  useEffect(() => {
    if (innerRef.current) {
      gsap.to(innerRef.current, {
        y: () => -(textRef.current?.clientHeight ?? -500),
        scrollTrigger: {
          trigger: innerRef.current,
          start: "top 60%",
          end: "top 40%",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div
      className={`mx-auto container`}
      style={{
        color: color,
        fontSize: `clamp(${clamp[0]}rem, ${clamp[1]}vw, ${clamp[2]}rem)`,
      }}
    >
      <div
        className={` flex w-fit font-semibold capitalize tracking-tighter`}
        ref={textRef}
        style={{
          clipPath: "inset(0% 100% 0% 100%)",
        }}
      >
        <div
          style={{
            maxHeight: `clamp(${clamp[0]}rem, ${clamp[1]}vw, ${clamp[2]}rem)`,
            lineHeight: `clamp(${clamp[0]}rem, ${clamp[1]}vw, ${clamp[2]}rem)`,
          }}
        >
          <div ref={innerRef}>
            <div className="m-0">{children}</div>
            <div className="m-0">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
