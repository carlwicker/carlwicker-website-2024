import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

export default function CyberCortexVideo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  const variants = {
    hidden: { y: 0, scale: 1 },
    visible: { y: 0, transition: { duration: 0.25 } },
  };

  return (
    <motion.span
      className="text-[#111] uppercase text-5xl font-extrabold mx-auto"
      initial="hidden"
      variants={variants}
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto lg:text-9xl text-3xl md:text-5xl">
        cutting-edge technologies and jaw-dropping design catapults user
        experiences into another dimension. With a relentless quest for
        perfection.
      </div>
    </motion.span>
  );
}
