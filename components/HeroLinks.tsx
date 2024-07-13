import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroLinks() {
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

  return (
    <div ref={ref} className="">
      <motion.div
        className="flex flex-col max-w-min lg:text-3xl text-xl uppercase font-semibold tracking-tighter leading-none "
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

        <Link href="/alpha" target="_top">
          <button className="bg-black hover:text-black hover:bg-white">
            ALPHA
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
