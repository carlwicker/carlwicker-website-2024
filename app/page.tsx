import Head from "next/head";
import CyberCortexVideo from "@/components/CyberCortexVideo";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CYBER//CORTEX//X21",
  description: "CYBER//CORTEX//X21",
};

export default function Home() {
  return (
    <>
      <main data-scroll-section>
        <div className="flex min-h-screen flex-col justify-center p-24 bg-black text-white uppercase">
          <h1 className="text-9xl font-bold uppercase">...</h1>
          <span>
            <a
              href="mailto:carlwicker@gmail.com"
              className="hover:text-red-400 text-3xl"
            >
              carlwicker@gmail.com
            </a>
          </span>
          <span className="text-3xl">44 7810 830237</span>
        </div>

        <CyberCortexVideo />

        <Footer />
      </main>
    </>
  );
}
