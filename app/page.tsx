"use client";

import Head from "next/head";
import CyberCortexVideo from "@/components/CyberCortexVideo";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "CYBER//CORTEX//X21",
//   description: "CYBER//CORTEX//X21",
// };

export default function Home() {
  // Function to generate random darker color
  const generateRandomColor = () => {
    const letters = "01234567"; // Limit to darker spectrum
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  // Initialize bgColor with a static value to match server and client initial render
  const [bgColor, setBgColor] = useState("#655666"); // Example static color

  useEffect(() => {
    // Set the background color to a random color only on the client side
    setBgColor(generateRandomColor());

    const intervalId = setInterval(() => {
      // Update the state with a new random color
      setBgColor(generateRandomColor());
    }, 5000); // Change color every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <main
      data-scroll-section
      className="text-white bg-transition"
      // style={{
      //   backgroundImage: 'url("./jpg/painting2.jpg")', // Add your image path here
      //   backgroundSize: "cover", // Ensure the background covers the element
      //   backgroundPosition: "center 50%", // Adjusted for vertical centering
      // }}
    >
      {/* <Ticker /> */}
      <div
        data-scroll
        data-scroll-speed="2"
        className="container mx-auto flex min-h-screen flex-col justify-center uppercase  gap-4 "
      >
        <h1 className="xl:text-9xl text-4xl md:text-4xl lg:text-6xl font-bold uppercase tracking-0 z-50">
          Break standard practice // make cool shit
        </h1>
        <span className="flex flex-col gap-2 w-fit">
          <a
            href="mailto:carlwicker@gmail.com"
            className={`lg:text-3xl text-xl bg-black p-2 hover:text-black hover:bg-white`}
          >
            carlwicker@gmail.com
          </a>

          <a
            className={`lg:text-3xl text-xl bg-black p-2 hover:text-black hover:bg-white`}
            href="tel:44 7810 830237"
          >
            44 7810 830237
          </a>
        </span>
      </div>
      <div className="-z-10">
        <CyberCortexVideo bgColor={bgColor} />
      </div>

      <Footer />
    </main>
  );
}
