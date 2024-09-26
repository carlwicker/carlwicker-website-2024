"use client";

import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export default function SplitText() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      const text = new SplitType(textRef.current);

      gsap.set(textRef.current, { visibility: "visible" });

      gsap.from(text.lines, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "restart none none none",
          // markers: true,
        },
        opacity: 0,
        x: 400,
        stagger: {
          from: "start",
          each: 0.25,
          ease: "none",
        },
        duration: 1,
      });
    }
  }, [textRef]);

  return (
    <div className="w-full h-fit flex justify-center items-center">
      <div
        id="text"
        className="container mx-auto p-5 text-[8vw] tracking-tighter leading-none lg:text-[4vw] text-white pb-40 pt-20"
        data-scroll
        data-scroll-speed="0.25"
      >
        <motion.div ref={textRef}>
          Delivering cutting-edge UI animations, I transform static designs into
          captivating interactive experiences using CSS, JavaScript, GSAP, and
          Framer Motion. With a keen eye for detail and a passion for
          performance optimization, I elevate user engagement, bringing
          interfaces to life with seamless, dynamic motion and unrivaled
          precision.
        </motion.div>
      </div>
    </div>
  );
}
