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
    <main data-scroll-section className="text-white bg-transition">
      <Hero />
      <CyberCortexVideo />
      <Footer />
    </main>
  );
}
