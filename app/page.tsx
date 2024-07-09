import CyberCortexVideo from "@/components/CyberCortexVideo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main data-scroll-section className="relative text-white">
      <div className="absolute inset-0">
        <CyberCortexVideo aria-label="Background Typography" />
      </div>
      <div className="relative z-10">
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
