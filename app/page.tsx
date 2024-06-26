import Head from "next/head";
import CyberCortexVideo from "@/components/CyberCortexVideo";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CYBER//CORTEX//X21",
  description: "CYBER//CORTEX//X21",
};

export default function Home() {
  return (
    <main data-scroll-section className="bg-black text-white ">
      <div className="container mx-auto flex min-h-screen flex-col justify-center uppercase p-5">
        <h1 className="lg:text-9xl text-4xl font-bold uppercase">
          Transforming Ideas into Digital Masterpieces
        </h1>
        <span>
          <a
            href="mailto:carlwicker@gmail.com"
            className="hover:text-red-400 lg:text-3xl text-xl"
          >
            carlwicker@gmail.com
          </a>
        </span>
        <span className="hover:text-red-400 lg:text-3xl text-xl">
          <a href="tel:44 7810 830237">44 7810 830237</a>
        </span>
      </div>

      <CyberCortexVideo />

      <Footer />
    </main>
  );
}
