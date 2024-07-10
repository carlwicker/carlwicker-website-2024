"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AlphaPage() {
  const [imageUrl, setImageUrl] = useState("");

  const randomNumBetween = () => {
    return Math.floor(Math.random() * (10 - 0 + 1));
  };

  useEffect(() => {
    const fetchImage = async () => {
      const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=${accessKey}`
      );
      const data = await response.json();
      setImageUrl(data[randomNumBetween()]?.urls.regular);
    };

    fetchImage();
  }, []);

  return (
    <>
      <style jsx>{`
        .masked-image-container {
          position: relative;
          z-index: 1; /* Ensure it's behind the HOME button */
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          perspective: 500px;
        }
        .text-mask {
          font-size: 50vh;
          font-weight: 800;
          letter-spacing: -0.07em;
          color: transparent;
          background: url("${imageUrl}") center / cover no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          display: flex;
          justify-content: center;
          position: relative; /* Ensure z-index is applicable */
          z-index: 2; /* Adjust as necessary to ensure visibility */
        }
        /* Ensure the HOME button is above the masked elements */
        .bg-black {
          position: relative;
          z-index: 50; /* Higher than the masked elements */
        }
      `}</style>
      <div className="masked-image-container">
        <div className="text-mask">
          <div className="flex">
            <div>UX</div>
            <div>UI</div>
          </div>
        </div>{" "}
        <Link href="/" rel="preload">
          <button className="flex hover:bg-white hover:text-black text-white text-4xl font-sans z-50 font-semibold rotate-90">
            HOME
          </button>
        </Link>
      </div>
    </>
  );
}

{
  /* <Link h</Link ref="/" rel="preload">
<button className="bg-black hover:bg-white hover:text-black text-white absolute text-4xl font-sans z-20">
  HOME
</button>
</Link> */
}
