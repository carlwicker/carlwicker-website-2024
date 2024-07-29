"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function HeroLinks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.125, // Stagger the animation of children by 0.1 second
      },
    },
  };

  // Variants for each child (span)
  const childVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  useEffect(() => {
    if (isInView) {
      console.log("In view");
    }
  }, [isInView]);

  return (
    <motion.div className="flex gap-10 lg:gap-20 text-xs flex-col lg:flex-row font-thin">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
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
      >
        <motion.div>
          <motion.div variants={childVariants}>Contact</motion.div>
          <motion.div variants={childVariants} className="flex flex-col">
            <a
              className="font-semibold hover:text-red-600  transition-all"
              href="mailto:hello@carlwicker.co.uk"
            >
              hello@carlwicker.co.uk
            </a>
            <a
              className="font-semibold hover:text-red-600  transition-all"
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
