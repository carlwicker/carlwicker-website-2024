import FooterStart from "./FooterStart";
import FooterMiddle from "./FooterMiddle";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Inter } from "next/font/google";
import FooterEnd from "./FooterEnd";

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
      <div className="fixed bottom-0 lg:h-[400px] h-[600px] w-full flex items-center justify-center ">
        <div className="container mx-auto px-5 flex gap-10 lg:gap-5 flex-col lg:flex-row font-extralight">
          <div className="lg:w-[25vw]">
            <FooterStart isInView />
          </div>
          <div className="lg:w-[25vw]">
            <FooterMiddle isInView />
          </div>
          <div className="lg:w-[25vw]"></div>
          <div className="lg:w-[25vw]">
            <FooterEnd />
          </div>
        </div>
      </div>
    </div>
  );
}
