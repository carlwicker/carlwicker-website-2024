"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // `once: true` ensures the animation only plays once

  // Variants for the container to stagger the children animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Stagger the animation of children by 0.1 second
      },
    },
  };

  // Variants for each child (span)
  const child = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  useEffect(() => {
    if (isInView) {
      // Trigger the animation when the component is in view
    }
  }, [isInView]);

  return (
    <div
      data-scroll
      data-scroll-speed="2"
      className="container mx-auto flex min-h-screen flex-col justify-center p-5 uppercase"
    >
      <h1 className="xl:text-9xl text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-[-0.9px] z-50 break-words">
        Transforming Ideas Into Stunning, High-Performance Websites.
      </h1>
      <div ref={ref}>
        <motion.div
          className="flex flex-col max-w-min lg:text-3xl text-xl"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"} // Use isInView to control the animation
        >
          <motion.span
            variants={child}
            className={`bg-black hover:text-black hover:bg-white`}
          >
            <Link href="/">http://carlwicker.co.uk</Link>
          </motion.span>

          <motion.a
            variants={child}
            className={`bg-black hover:text-black hover:bg-white`}
            href="mailto:carlwicker@gmail.com"
          >
            carlwicker@gmail.com
          </motion.a>

          <motion.a
            variants={child}
            className={`bg-black hover:text-black hover:bg-white`}
            href="tel:44 7810 830237"
          >
            44 7810 830237
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
