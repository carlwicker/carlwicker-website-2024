"use client";

import { useEffect, useRef, useState } from "react";
import heroData from "../json/hero.json";
import SplitType from "split-type";
import HeroLinks from "./HeroLinks";

export default function Hero() {
  const titleRef = useRef(null);
  const [text, setText] = useState(heroData?.hero[0]?.title);

  useEffect(() => {
    const options = {
      types: ["lines", "words"],
      split: ["lines", "words"],
    };

    const text = new SplitType(titleRef.current, options);
  }, []);

  return (
    <div
      data-scroll
      data-scroll-speed="2"
      className="container mx-auto flex min-h-screen flex-col justify-center p-5 "
    >
      <h1 ref={titleRef} className="text-9xl font-bold">
        {text}
      </h1>
      <HeroLinks />
    </div>
  );
}
