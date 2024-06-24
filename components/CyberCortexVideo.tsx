"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

export default function CyberCortexVideo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <div
      className="relative flex min-h-screen bg-black"
      data-scroll
      data-scroll-speed="-2"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="flex min-h-screen flex-col items-center justify-center"
      >
        <source src="webm/cybercortex.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute flex flex-col h-full w-full leading-[312px] text-[400px] font-bold text-black uppercase "
        ref={ref}
      >
        <motion.span
          className="tracking-[-0.08em]"
          initial="hidden"
          variants={variants}
          animate={isInView ? "visible" : "hidden"}
        >
          CYBER
        </motion.span>
        <motion.span
          className="tracking-[-0.08em]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
        >
          CORTEX
        </motion.span>
        <motion.span
          className="tracking-[-0.08em]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
        >
          X21
        </motion.span>
      </div>
    </div>
  );
}
