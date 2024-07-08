import CyberCortexVideo from "@/components/CyberCortexVideo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Carl Wicker - Web Developer",
  description: "Transforming Ideas Into Stunning, High-Performance Websites.",
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
