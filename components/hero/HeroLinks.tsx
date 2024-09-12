"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroLinks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.125,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      className="flex gap-10 lg:gap-5 flex-col lg:flex-row font-extralight z-50"
      ref={ref}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="lg:w-1/4"
      >
        <motion.div variants={childVariants}>UX/UI</motion.div>
        <motion.div className="font-semibold" variants={childVariants}>
          Adobe Creative Suite
        </motion.div>
        <motion.div className="font-semibold" variants={childVariants}>
          Figma
        </motion.div>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="lg:w-1/4"
      >
        <motion.div variants={childVariants}>Front End Development</motion.div>
        <motion.div variants={childVariants} className="font-semibold">
          NextJS
        </motion.div>
        <motion.div variants={childVariants} className="font-semibold">
          ReactJS
        </motion.div>
        <motion.div variants={childVariants} className="font-semibold">
          TypeScript
        </motion.div>
        <motion.div variants={childVariants} className="font-semibold">
          JavaScript
        </motion.div>
        <motion.div variants={childVariants} className="font-semibold">
          GSAP
        </motion.div>
        <motion.div variants={childVariants} className="font-semibold">
          Framer Motion
        </motion.div>
        <motion.div variants={childVariants} className="font-semibold">
          ThreeJS
        </motion.div>
        <motion.div variants={childVariants} className="font-semibold">
          TailwindCSS
        </motion.div>
        <motion.div variants={childVariants} className="font-semibold">
          CSS
        </motion.div>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="lg:w-1/4"
      >
        <motion.div variants={childVariants}>Cloud</motion.div>
        <motion.div variants={childVariants} className="font-semibold">
          Google Cloud Architecture
        </motion.div>
        <motion.div variants={childVariants} className="font-semibold">
          Vercel Architecture
        </motion.div>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="lg:w-1/4"
      >
        <motion.div>
          <motion.div variants={childVariants}>Contact</motion.div>
          <motion.div variants={childVariants} className="flex flex-col">
            <a
              className="font-semibold hover:text-red-400 text-white transition-all"
              href="mailto:carlwicker@gmail.com"
            >
              carlwicker@gmail.com
            </a>
            <a
              className="font-semibold hover:text-red-400  transition-all"
              href="tel:44 7810 830237"
            >
              44 7810 830237
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
