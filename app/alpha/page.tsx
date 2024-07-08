"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function AlphaPage() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
      console.log(accessKey);
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=${accessKey}`
      );
      const data = await response.json();
      console.log(data);
      setImageUrl(data[2]?.urls.regular);
    };

    fetchImage();
  }, []);

  return (
    <div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Random Unsplash Image"
          layout="fill"
          objectFit="cover"
        />
      )}
    </div>
  );
}
