import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // Import ScrollTrigger from the correct path

export default function FadeComp() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      const text = new SplitType(textRef.current);

      gsap.set(textRef.current, { visibility: "visible" });

      gsap.from(text.lines, {
        scrub: true,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          toggleActions: "restart none none none",
        },
        opacity: 0,
        stagger: {
          from: "start",
          each: 0.125,
          ease: "none",
        },
        duration: 2,
      });
    }
  }, [textRef]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-red-800">
      <div
        id="text"
        className="container mx-auto p-5 text-[5vw] tracking-tighter leading-none lg:text-[3vw] text-white "
      >
        <div ref={textRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo
          fuga, commodi earum, ut deleniti aperiam nobis natus odio distinctio
          pariatur qui eius atque illum esse quae ipsa eligendi tempore?
          Mollitia voluptatem nostrum at neque doloremque ipsam labore quis
          nobis odio aut, architecto recusandae perspiciatis enim totam
          exercitationem, quisquam corporis ab, vel aliquid! Ullam, architecto.
          Quam soluta nulla ducimus vitae?
        </div>
      </div>
    </div>
  );
}
