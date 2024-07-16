"use client";

import { motion } from "framer-motion";

export default function Credits() {
  // Variants for the container to stagger the children's animation
  const containerVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.25, // Stagger the children fade in by 0.2 seconds
      },
    },
  };

  // Variants for each child
  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 py-20 text-sm">
        <motion.div
          style={{ color: "rgb(58, 54, 53)" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants}>Story by</motion.div>
          <motion.div variants={childVariants} className="font-bold">
            Jonathan Nolan
          </motion.div>
          <motion.div variants={childVariants} className="font-bold">
            Christopher Nolan
          </motion.div>
        </motion.div>

        <motion.div
          style={{ color: "rgb(58, 54, 53)" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants}>Directed by</motion.div>
          <motion.div variants={childVariants} className="font-bold">
            Christopher Nolan
          </motion.div>
        </motion.div>

        <motion.div
          style={{ color: "rgb(58, 54, 53)" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants}>Starring</motion.div>
          <motion.div variants={childVariants} className="font-bold">
            Matthew McConaughey
          </motion.div>
          <motion.div variants={childVariants} className="font-bold">
            Anne Hathaway
          </motion.div>
          <motion.div variants={childVariants} className="font-bold">
            Jessica Chastain
          </motion.div>
          <motion.div variants={childVariants} className="font-bold">
            Mackenzie Foy
          </motion.div>
          <motion.div variants={childVariants} className="font-bold">
            Michael Caine
          </motion.div>
        </motion.div>

        <motion.div
          style={{ color: "rgb(58, 54, 53)" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants}>Music by</motion.div>
          <motion.div variants={childVariants} className="font-bold">
            Hans Zimmer
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
