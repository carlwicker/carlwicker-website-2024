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
    // Fixed height must to set to achieve sticky footer effect - NO DYNAMIC HEIGHT
    <div
      className={`bg-[#111] relative sm:h-[375px] h-[600px] ${inter.className}`}
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
      ref={ref}
    >
      <div className="fixed bottom-0 sm:h-[375px] h-[600px] w-full flex items-center justify-center ">
        <div className="container mx-auto px-5 flex gap-10  flex-col sm:flex-row font-extralight sm:text-xs lg:text-base">
          <div className="sm:w-[25vw]">
            <FooterStart isInView />
          </div>
          <div className="">
            <FooterMiddle isInView />
          </div>
          <div className="w-full"></div>
          <div className="justify-self-end">
            <FooterEnd />
          </div>
        </div>
      </div>
    </div>
  );
}
