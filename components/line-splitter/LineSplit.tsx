import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LineSplit({ children }: { children: string }) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (textRef.current) {
      // Split the text into individual letters
      const splitText = new SplitType(textRef.current, {
        types: ["lines"],
      });

      // Animate each letter
      gsap.fromTo(
        splitText.lines,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "restart none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="w-full">
      <div ref={textRef}>{children}</div>
    </div>
  );
}
