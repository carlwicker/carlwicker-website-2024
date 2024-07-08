"use client";

import { useRef } from "react";
import { motion, useInView, motionValue } from "framer-motion";

export default function CyberCortexVideo() {
  const canvasRef = useRef<HTMLDivElement>(null);

  const variants = {
    hidden: { y: 0 },
    visible: { y: 0, transition: { duration: 0 } },
  };

  const textStyle: any = {
    backgroundImage: 'url("./jpg/painting2.jpg")', // background
    backgroundSize: "cover",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent", // For Safari
    position: "absolute",
    font: motionValue("900 250px sans-serif"),
    lineHeight: motionValue("0.7"),
    fontWeight: motionValue("900"),
    leading: motionValue("-15px"),
    letterSpacing: motionValue("-30px"),
    overflow: "hidden",
  };

  return (
    <div
      className="container mx-auto flex items-center justify-center leading-tight tracking-[-50]"
      ref={canvasRef}
    >
      <motion.span
        style={textStyle} // Apply the masking style here
        className="text-[#111] uppercase lg:text-5xl text-2xl font-extrabold mx-auto -z-50"
      >
        cutting-edge technologies and jaw-dropping design catapults user
        experiences into another dimension With a relentless quest for
        perfection
      </motion.span>
    </div>
  );
}
