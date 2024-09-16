import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import {
  Points,
  PointsMaterial,
  BufferGeometry,
  Float32BufferAttribute,
} from "three";
import gsap from "gsap";

function ParticleCloud() {
  const pointsRef = useRef<Points>(null);
  const [color, setColor] = useState("#222");

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

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.004;
    }
  });

  const particleCount = 100000;
  const positions = new Float32BufferAttribute(particleCount * 3, 3);

  for (let i = 0; i < particleCount; i++) {
    positions.setXYZ(
      i,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" {...positions} />
      </bufferGeometry>
      <pointsMaterial size={0.01} color={color} transparent />
    </points>
  );
}

export default function TheCube() {
  return (
    <Canvas
      style={{ height: "100vh", width: "100vw", backgroundColor: "#234" }}
      camera={{ position: [0, 0, 1] }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ParticleCloud />
    </Canvas>
  );
}
