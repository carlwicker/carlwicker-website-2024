"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FooterStart() {
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
      <motion.div
        className="flex flex-col"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"} // Use isInView to control the animation
      >
        <motion.span variants={child}>Carl Wicker</motion.span>
        <motion.span variants={child}>Bloomsbury Place</motion.span>
        <motion.span variants={child}>Brighton</motion.span>
        <motion.span variants={child}>United Kingdom</motion.span>
        <motion.span variants={child}>BN2 1DA</motion.span>
      </motion.div>
    </div>
  );
}
