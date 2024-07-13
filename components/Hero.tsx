"use client";

import { useRef, useState, useEffect } from "react";
import heroData from "../json/hero.json";
import SplitType from "split-type";
import HeroLinks from "./HeroLinks";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const h1Ref = useRef<any>(null);
  const linksRef = useRef<any>(null);
  // Use Framer Motion's useViewportScroll hook to get scroll values
  const { scrollY } = useScroll();

  // Use Framer Motion's useTransform hook to interpolate the scroll value into a translateY value
  // Adjust the output range (-50, 0) to control the speed and direction of the parallax effect
  const y = useTransform(scrollY, [0, 1000], [100, 0]);

  const randomNumBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-center p-5 ">
      <motion.div
        ref={h1Ref}
        style={{ y }}
        className="text-[10em] font-bold w-full flex flex-col container tracking-tighter leading-none -mt-[100px] uppercase "
      >
        {heroData?.hero[3]?.title}
      </motion.div>
      <motion.div ref={linksRef} style={{ y }}>
        <HeroLinks />
      </motion.div>
    </div>
  );
}
