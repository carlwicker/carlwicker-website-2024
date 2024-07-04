"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, motionValue } from "framer-motion";
import * as THREE from "three";

export default function CyberCortexVideo({ bgColor }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const cubeRotationRef = useRef({ x: 0, y: 0 });

  const variants = {
    hidden: { y: 0 },
    visible: { y: 0, transition: { duration: 0 } },
  };

  const textStyle: any = {
    backgroundImage: 'url("./jpg/painting2.jpg")', // Example background
    backgroundSize: "cover",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent", // For Safari
    position: motionValue("absolute"),
    font: motionValue("900 248px sans-serif"),
    lineHeight: motionValue("0.7"),
    fontWeight: motionValue("900"),
    // margin: motionValue("600px"),
    leading: motionValue("-15px"),
    letterSpacing: motionValue("-30px"),
  };

  useEffect(() => {
    const width = ref.current?.clientWidth ?? 0;
    const height = ref.current?.clientHeight ?? 0;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true; // Enable shadow rendering

    if (canvasRef.current) {
      canvasRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshBasicMaterial({ color: bgColor });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true; // Enable the cube to cast shadows
    cube.receiveShadow = true; // Enable the cube to receive shadows
    scene.add(cube);

    const light = new THREE.DirectionalLight(0xffffff, 1); // Add directional light
    light.position.set(2, 5, 2); // Adjust light position
    light.castShadow = true; // Enable the light to cast shadows
    scene.add(light);

    camera.position.z = 5;

    let rotationSpeedX = 0.01;
    let rotationSpeedY = 0.01;
    const inertia = 0.99; // Inertia factor, where 1 means no inertia and 0 means immediate stop

    // Define target rotation variables
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onMouseMove = (event: any) => {
      // Calculate target rotation based on mouse position
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update target rotation instead of direct rotation
      targetRotationX = mouseY * Math.PI; // Adjust as needed
      targetRotationY = mouseX * Math.PI; // Adjust as needed
    };

    // Add the event listener for mousemove
    window.addEventListener("mousemove", onMouseMove);

    const animate = function () {
      requestAnimationFrame(animate);
      // Use the ref for rotation
      cube.rotation.x = cubeRotationRef.current.x;
      cube.rotation.y = cubeRotationRef.current.y;
      renderer.render(scene, camera);
    };

    animate();

    // Existing animation code...

    return () => {
      // Cleanup function to remove the renderer's DOM element and the event listener
      if (canvasRef.current && renderer.domElement) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [bgColor]);

  return (
    <div
      className="container mx-auto min-h-max flex items-center justify-center leading-tight tracking-[-50]"
      ref={canvasRef}
      // style={{ backgroundColor: bgColor }}
    >
      <motion.span
        style={textStyle} // Apply the masking style here
        className="text-[#111] uppercase text-5xl font-extrabold mx-auto  -z-50"
      >
        cutting-edge technologies and jaw-dropping design catapults user
        experiences into another dimension With a relentless quest for
        perfection
      </motion.span>
    </div>
  );
}
