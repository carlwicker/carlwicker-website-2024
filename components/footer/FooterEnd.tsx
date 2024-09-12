"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface FooterEndProps {
  isInView: boolean;
}

export default function FooterEnd({ isInView }: FooterEndProps) {
  const ref = useRef(null);

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
    <div ref={ref} className="font-normal">
      <motion.div className="font-thin">Digital</motion.div>
      <motion.div
        className="flex flex-col border-t-[#333] border-t pt-10"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"} // Use isInView to control the animation
      >
        <motion.span variants={child} className={``}>
          <Link href="/" className="hover:text-red-400">
            http://carlwicker.co.uk
          </Link>
        </motion.span>

        <motion.a
          variants={child}
          className="hover:text-red-400"
          href="mailto:carlwicker@gmail.com"
        >
          carlwicker@gmail.com
        </motion.a>

        <motion.a
          variants={child}
          href="tel:44 7810 830237"
          className="hover:text-red-400"
        >
          44 7810 830237
        </motion.a>
      </motion.div>
    </div>
  );
}
