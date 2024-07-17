"use client";

import Credits from "./Credits";
import InterstellarHeader from "./InterstellarHeader";
import InterstellarImage from "./InterstellarImage";
import { motion } from "framer-motion";

export default function InterstellarPoster() {
  return (
    <div
      style={{
        backgroundColor: "rgb(234, 236, 222)",
        color: "rgb(58, 54, 53)",
      }}
      className="flex flex-col"
    >
      <div className="container mx-auto pt-10 px-5">
        <InterstellarHeader />

        <motion.div
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          style={{ opacity: 0.6 }}
        >
          <Credits />
        </motion.div>

        <motion.h1
          className="md:text-[15vw] tracking-[-0.1em] leading-[0.8em] md:py-20 text-[20vw] py-5"
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          style={{ opacity: 0.6, fontWeight: "600" }}
        >
          Interstellar
        </motion.h1>
      </div>
      <InterstellarImage />
    </div>
  );
}
