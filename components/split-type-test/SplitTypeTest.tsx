"use client";

import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // Import ScrollTrigger from the correct path
import { motion } from "framer-motion";

export default function SplitTypeTest() {
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
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "top 30%",
          scrub: 1,
          toggleActions: "restart none none none",
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
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div
        id="text"
        className="container mx-auto p-5 text-[5vw] tracking-tighter leading-none lg:text-[3vw] text-white "
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
