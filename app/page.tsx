import CyberCortexVideo from "@/components/CyberCortexVideo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TheJoker from "@/components/thejoker/TheJoker";

export default function Home() {
  return (
    <>
      <main className="relative text-white">
        <div className="absolute inset-0">
          <CyberCortexVideo aria-label="Background Typography" />
        </div>
        <div className="relative z-10">
          <Hero />
          <TheJoker />
          <Footer />
        </div>
      </main>
    </>
  );
}
