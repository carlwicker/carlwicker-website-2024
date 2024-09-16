import { useEffect, useRef, useState } from "react";
import { Points, Float32BufferAttribute } from "three";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export default function ParticleCloud() {
  const pointsRef = useRef<Points>(null);
  const [color, setColor] = useState("#222");

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002;
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scale = 1 + scrollY * 0.001; // Adjust the multiplier to control scaling speed
      if (pointsRef.current) {
        gsap.to(pointsRef.current.scale, {
          x: scale,
          y: scale,
          z: scale,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
