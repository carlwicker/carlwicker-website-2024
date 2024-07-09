"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AlphaPage() {
  const [imageUrl, setImageUrl] = useState("");

  const randomNumBetween = () => {
    return Math.floor(Math.random() * (10 - 0 + 1));
  };

  useEffect(() => {
    const fetchImage = async () => {
      const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
      console.log(accessKey);
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=${accessKey}`
      );
      const data = await response.json();
      console.log(data);
      setImageUrl(data[randomNumBetween()]?.urls.regular);
    };

    fetchImage();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {imageUrl !== "" && (
        <Image
          src={imageUrl}
          alt="Random Unsplash Image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      )}
      <Link href="/" rel="preload">
        <button
          className="bg-black hover:text-black hover:bg-white text-white absolute z-20 text-4xl"
          style={{ fontFamily: "sans-serif" }}
        >
          HOME
        </button>
      </Link>
    </div>
  );
}
