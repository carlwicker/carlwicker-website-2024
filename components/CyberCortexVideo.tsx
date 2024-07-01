import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import * as THREE from "three";

export default function CyberCortexVideo({ bgColor }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  const variants = {
    hidden: { y: 0 },
    visible: { y: 0, transition: { duration: 0 } },
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

    const animate = function () {
      requestAnimationFrame(animate);

      // Gradually adjust rotation to approach target rotation, applying inertia
      cube.rotation.x += (targetRotationX - cube.rotation.x) * inertia;
      cube.rotation.y += (targetRotationY - cube.rotation.y) * inertia;

      renderer.render(scene, camera);
    };

    animate();

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
      className="container mx-auto"
      ref={canvasRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <motion.span
        className="text-[#111] uppercase text-5xl font-extrabold mx-auto"
        initial="hidden"
        variants={variants}
        animate={isInView ? "visible" : "hidden"}
        style={{ position: "absolute", zIndex: 2 }}
      >
        <div
          className="container mx-auto lg:text-9xl text-3xl md:text-5xl"
          ref={ref}
        >
          cutting-edge technologies and jaw-dropping design catapults user
          experiences into another dimension. With a relentless quest for
          perfection.
        </div>
      </motion.span>
    </div>
  );
}
