"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useScroll } from "framer-motion";

export default function SpinningCube() {
  const mountRef = useRef<any>(null);
  const { scrollYProgress } = useScroll() as any; // Get scroll progress
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // Track mouse position

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Cube setup
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Mouse move event listener
    const onDocumentMouseMove = (event: any) => {
      event.preventDefault();
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };
    document.addEventListener("mousemove", onDocumentMouseMove);

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x -= mousePosition.x;
      cube.rotation.y -= mousePosition.y;
      cube.scale.x = scrollYProgress?.current * 4.5;
      cube.scale.y = scrollYProgress?.current * 4.5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [scrollYProgress]); // Add scrollYProgress as a dependency

  return <div ref={mountRef} className="m-0 p-0 flex-1"></div>;
}
