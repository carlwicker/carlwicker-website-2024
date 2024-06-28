"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import Ticker from "./Ticker";

export default function CyberCortexVideo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  const variants = {
    hidden: { y: 0, scale: 1 },
    visible: { y: 0, transition: { duration: 0.25 } },
  };

  return (
    <div
      className="relative flex h-[20em] -z-10"
      data-scroll
      data-scroll-speed="-0.75"
    >
      <Ticker />
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
          className={`flex flex-col leading-[120px] text-[150px] font-bold text-white uppercase`}
          ref={ref}
        >
          <motion.span
            className="text-[#111]"
            initial="hidden"
            variants={variants}
            animate={isInView ? "visible" : "hidden"}
          >
            <div>
              cutting-edge technologies and jaw-dropping design catapults user
              experiences into another dimension. With a relentless quest for
              perfection.
            </div>
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
