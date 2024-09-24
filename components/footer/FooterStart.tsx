"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface FooterStartProps {
  isInView: boolean;
}

export default function FooterStart({ isInView }: FooterStartProps) {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: false }); // `once: true` ensures the animation only plays once

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
    <div ref={ref}>
      <motion.span variants={child} className="font-extralight">
        Mail
      </motion.span>
      <motion.div className="flex flex-col font-semibold w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-col text-nowrap"
        >
          <motion.span variants={child}>Carl Wicker</motion.span>
          <motion.span variants={child}>10 Bloomsbury Place</motion.span>
          <motion.span variants={child}>Brighton</motion.span>
          <motion.span variants={child}>United Kingdom</motion.span>
          <motion.span variants={child}>BN2 1DA</motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
}
