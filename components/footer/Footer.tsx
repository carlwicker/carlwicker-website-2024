import FooterStart from "./FooterStart";
import FooterEnd from "./FooterEnd";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      className={`bg-[#111] relative lg:h-[400px] h-[600px] ${inter.className}`}
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
      ref={ref}
    >
      <div className="fixed bottom-0 lg:h-[400px] h-[600px] w-full">
        <div className="container flex lg:flex-row flex-col lg:gap-20 gap-10 px-5 mx-auto font-thin py-20 tracking-tight">
          <div className="lg:w-3/12">
            <FooterStart isInView />
          </div>
          <div className="lg:w-3/12">
            <FooterEnd isInView />
          </div>
        </div>
      </div>
    </div>
  );
}
