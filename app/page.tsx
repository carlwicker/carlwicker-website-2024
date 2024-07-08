import Head from "next/head";
import dynamic from "next/dynamic";

// Lazy load components
const CyberCortexVideo = dynamic(() => import("@/components/CyberCortexVideo"));
const Footer = dynamic(() => import("@/components/Footer"));
const Hero = dynamic(() => import("@/components/Hero"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Carl Wicker - Web Developer</title>
        <meta
          name="description"
          content="Transforming Ideas Into Stunning, High-Performance Websites"
        />
        {/* Add more meta tags as needed for SEO */}
      </Head>
      <main data-scroll-section className="relative text-white">
        <div className="absolute inset-0">
          <CyberCortexVideo aria-label="Background video" />
        </div>
        <div className="relative z-10">
          <Hero />
          <Footer />
        </div>
      </main>
    </>
  );
}
