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
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          perspective: 500px; /* Adds perspective to the container */
        }
        .text-mask {
          font-size: 130vh;
          font-weight: 800;
          letter-spacing: -0.07em;
          color: transparent;
          background: url("${imageUrl}") center / cover no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          transform: rotateY(20deg) rotateX(42deg) rotateZ(25deg) scale(1.1); /* Crazy perspective effect */
          transform-style: preserve-3d; /* Ensures the 3D effect is rendered properly */
        }
      `}</style>
      <div className="masked-image-container">
        <div className="">
          <div className="text-mask">UX:UI</div>
        </div>
      </div>
    </>
  );
}

{
  /* <Link h</Link>ref="/" rel="preload">
<button className="bg-black hover:bg-white hover:text-black text-white absolute text-4xl font-sans z-20">
  HOME
</button>
</Link> */
}
