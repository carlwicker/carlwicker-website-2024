"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function FooterEnd() {
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
    <div ref={ref}>
      <motion.span
        className="flex flex-col max-w-min"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"} // Use isInView to control the animation
      >
        <motion.span variants={child}>
          <Link href="/" className="hover:text-red-400">
            http://carlwicker.co.uk
          </Link>
        </motion.span>
        <motion.a
          className="hover:text-red-400"
          href="mailto:carlwicker@gmail.com"
          variants={child}
        >
          carlwicker@gmail.com
        </motion.a>
        <motion.span variants={child}> </motion.span>
        <motion.a
          variants={child}
          className="hover:text-red-400"
          href="tel:44 7810 830237"
        >
          44 7810 830237
        </motion.a>
      </motion.span>
    </div>
  );
}
