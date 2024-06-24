"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FooterEnd() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // `once: true` ensures the animation only plays once

  // Variants for the container to stagger the children animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Stagger the animation of children by 0.1 second
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
    <div ref={ref}>
      <motion.span
        className="flex flex-col max-w-min"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"} // Use isInView to control the animation
      >
        <motion.span variants={child}>http://carlwicker.co.uk</motion.span>
        <motion.span variants={child}>carlwicker@gmail.com</motion.span>
        <motion.span variants={child}>{""}</motion.span>
        <motion.span variants={child}>44 (0) 7810 830237</motion.span>
      </motion.span>
    </div>
  );
}
