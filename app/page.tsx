import Head from "next/head";
import CyberCortexVideo from "@/components/CyberCortexVideo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata = {
  title: "CYBER//CORTEX//X21",
  description: "CYBER//CORTEX//X21",
};

export default function Home() {
  return (
    <main data-scroll-section className="relative text-white">
      <div className="absolute inset-0">
        <CyberCortexVideo />
      </div>
      <div className="relative z-10">
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
