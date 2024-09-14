import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpinningCube from "../spinning-cube/SpinningCube";
import Hero from "../hero/Hero";
import InterstellarPoster from "../interstellar-poster/InterstellarPoster";

gsap.registerPlugin(ScrollTrigger);

export default function Iracing() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "elastic.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const clipPathValue = `inset(${(1 - progress) * 50}% ${
              (1 - progress) * 50
            }% ${(1 - progress) * 50}% ${(1 - progress) * 50}%)`;
            if (imageRef.current) {
              imageRef.current.style.clipPath = clipPathValue;
            }
          },
        },
      });
    }
  }, []);

  return (
    <div className="flex h-screen w-screen relative ">
      <Image
        ref={imageRef}
        src="/jpg/iracing.jpg"
        layout="fill"
        objectFit="cover"
        alt="Iracing"
        style={{ clipPath: "inset(0% 50% 50% 50%)" }} // Initial clip-path
      />
    </div>
  );
}
