"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

export default function CyberCortexVideo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  const variants = {
    hidden: { scale: 1 },
    visible: { scale: 1 },
  };

  return (
    <div
      className="relative flex min-h-screen bg-black -z-10"
      data-scroll
      data-scroll-speed="-2"
    >
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="flex min-h-screen flex-col items-center justify-center"
      >
        <source src="webm/cybercortex.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video> */}

      <div className="container absolute left-0 right-0 mx-auto flex self-center justify-self-center ">
        <div
          className="flex flex-col h-full leading-[212px] text-[200px] font-bold text-white uppercase "
          ref={ref}
        >
          <motion.span
            className="tracking-[-0.08em] text-[#111] "
            initial="hidden"
            variants={variants}
            animate={isInView ? "visible" : "hidden"}
          >
            cutting-edge technologies and jaw-dropping design catapults user
            experiences into another dimension. With a relentless quest for
            perfection.
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
    </div>
  );
}
