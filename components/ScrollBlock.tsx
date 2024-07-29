import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollBlock() {
  const { scrollYProgress } = useScroll();
  // Dynamically calculate width based on scroll progress
  const width = useTransform(scrollYProgress, [0, 1], ["0vw", "100vw"]);

  return (
    <motion.div
      style={{
        display: "flex",
        width: "100%",
        height: "50px",
        overflow: "hidden",
        alignContent: "flex-start",
        originX: 0,
      }}
    >
      <motion.div
        style={{
          scaleX: scrollYProgress,
          originX: 0,
          zIndex: 30,
          alignContent: "flex-start",
          display: "flex",
        }}
        className="bg-red-800"
        initial={{ width: "0vw", alignContent: "flex-start", display: "flex" }}
        animate={{ width: "100vw" }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
}
