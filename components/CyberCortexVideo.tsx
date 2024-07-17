"use client";

import { motion } from "framer-motion";

export default function CyberCortexVideo() {
  const textStyle: any = {
    backgroundImage: 'url("./webp/painting2.webp  ")', // background
    backgroundSize: "cover",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent", // For Safari
    position: "absolute",
    font: "900 250px sans-serif",
    lineHeight: "0.7",
    fontWeight: "900",
    leading: "-15px",
    letterSpacing: "-30px",
    overflow: "hidden",
  };

  return (
    <div className="container mx-auto flex justify-center  leading-tight tracking-[-50] w-full  object-cover">
      <motion.div
        style={textStyle}
        className="text-[#111] uppercase lg:text-5xl text-2xl font-extrabold mx-auto -z-50 w-screen  overflow-hidden h-[200vh] opacity-10"
      >
        cutting-edge technologies and jaw-dropping design catapults user
        experiences into another dimension With a relentless quest for
        perfection
      </motion.div>
    </div>
  );
}
