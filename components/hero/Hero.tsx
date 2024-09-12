"use client";

import { useRef } from "react";
import HeroLinks from "./HeroLinks";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const h1Ref = useRef<any>(null);

  const { scrollY } = useScroll();

  // Use Framer Motion's useTransform hook to interpolate the scroll value into a translateY value
  // Adjust the output range (-50, 0) to control the speed and direction of the parallax effect
  const y = useTransform(scrollY, [0, -100], [100, 0]);

  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-center p-5">
      <motion.div
        ref={h1Ref}
        style={{ y }}
        className="text-[8vw] py-10 font-semibold w-full flex flex-col container tracking-tighter leading-none -mt-[100px]"
      >
        <div className="py-20">Web Developer Specialising In UI Animation</div>
      </motion.div>

      <motion.div className="z-50">
        <HeroLinks />
      </motion.div>
    </div>
  );
}
