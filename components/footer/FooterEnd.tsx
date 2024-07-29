"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function FooterEnd() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col text-xs font-thin"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"} // Use isInView to control the animation
      >
        <motion.span variants={child} className={``}>
          <Link href="/">http://carlwicker.co.uk</Link>
        </motion.span>

        <motion.a variants={child} href="mailto:carlwicker@gmail.com">
          carlwicker@gmail.com
        </motion.a>

        <motion.a variants={child} href="tel:44 7810 830237">
          44 7810 830237
        </motion.a>
      </motion.div>
    </div>
  );
}
