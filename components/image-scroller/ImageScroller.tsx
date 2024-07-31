import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ImageScroller() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll(scrollRef);

  const x = useTransform(scrollYProgress, [0.5, 1], ["0vw", "-100vw"]);

  useEffect(() => {
    console.log(x);
  }, [x]);

  return (
    <motion.div
      ref={scrollRef}
      className="h-[100vh] w-[200vw]  flex flex-row"
      style={{ x: x }}
    >
      <motion.div
        className="h-[100vh] bg-green-800 w-[100vw]"
        style={{
          backgroundImage: "url(./webp/painting2.webp)",
          backgroundSize: "cover",
        }}
      ></motion.div>
      <motion.div
        className="h-[100vh] bg-blue-800 w-[100vw]"
        style={{
          backgroundImage: "url(./webp/interstellar.webp)",
          backgroundSize: "cover",
        }}
      ></motion.div>
    </motion.div>
  );
}
