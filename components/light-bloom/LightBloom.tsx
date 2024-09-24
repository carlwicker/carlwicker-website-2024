import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export default function LightBloom() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const donutRefs = useRef<THREE.Mesh<THREE.TorusGeometry>[]>([]);

  const browserInfo = {
    userAgent: (navigator as any).userAgentData?.userAgent,
    platform: (navigator as any).userAgentData?.platform,
    language: navigator.language,
    vendor: (navigator as any).userAgentData?.vendor,
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(ambientLight);

    const redPointLight = new THREE.PointLight(0xff0000, 2, 50); // Red point light to enhance glow
    redPointLight.position.set(5, 5, 5);
    scene.add(redPointLight);

    const greenPointLight = new THREE.PointLight(0x00ff00, 2, 50); // Green point light to enhance glow
    greenPointLight.position.set(-5, 5, 5);
    scene.add(greenPointLight);

    const bluePointLight = new THREE.PointLight(0x0000ff, 2, 50); // Blue point light to enhance glow
    bluePointLight.position.set(0, 5, 5); // Adjusted position
    scene.add(bluePointLight);

    // Create a red donut with a specific color and opacity
    const redGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const redMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0xff0000, // Red emissive color for glow effect
      emissiveIntensity: 1,
      side: THREE.DoubleSide,
      transparent: false,
      opacity: 0.25,
    });
    const redDonut = new THREE.Mesh(redGeometry, redMaterial);
    scene.add(redDonut);
    donutRefs.current.push(redDonut);

    // Create a green donut with a specific color and opacity
    const greenGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const greenMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      emissive: 0x00ff00, // Green emissive color for glow effect
      emissiveIntensity: 1,
      side: THREE.DoubleSide,
      transparent: false,
      opacity: 0.25,
    });
    const greenDonut = new THREE.Mesh(greenGeometry, greenMaterial);
    greenDonut.position.x = 2; // Offset the green donut to avoid overlap
    scene.add(greenDonut);
    donutRefs.current.push(greenDonut);

    // Create a blue donut with a specific color and opacity
    const blueGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const blueMaterial = new THREE.MeshStandardMaterial({
      color: 0x0000ff,
      emissive: 0x0000ff, // Blue emissive color for glow effect
      emissiveIntensity: 1,
      side: THREE.DoubleSide,
      transparent: false,
      opacity: 0.25,
    });
    const blueDonut = new THREE.Mesh(blueGeometry, blueMaterial);
    blueDonut.position.x = -2; // Offset the blue donut to avoid overlap
    scene.add(blueDonut);
    donutRefs.current.push(blueDonut);

    // Position the camera
    camera.position.z = 5;

    // Set up post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5, // strength
      0.4, // radius
      0.1 // threshold
    );
    composer.addPass(bloomPass);

    // Raycaster for detecting mouse hover
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(donutRefs.current);

      donutRefs.current.forEach((donut) => {
        if (intersects.find((intersect) => intersect.object === donut)) {
          gsap.to(donut.material as THREE.MeshStandardMaterial, {
            emissiveIntensity: 5,
            duration: 2.5,
          });
        } else {
          gsap.to(donut.material as THREE.MeshStandardMaterial, {
            emissiveIntensity: 3,
            duration: 2.5,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // GSAP ScrollTrigger to move donuts on z-axis
    donutRefs.current.forEach((donut, index) => {
      gsap.to(donut.position, {
        z: () => {
          return window.innerWidth < 500 ? 1.2 : 2.8;
        }, // Target z position
        scrollTrigger: {
          trigger: mountRef.current,
          start: "top 20%",
          end: "bottom 90%",
          scrub: true,
        },
      });
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the donuts on the x-axis only
      donutRefs.current.forEach((donut) => {
        donut.rotation.y += 0.008;
      });

      // Render the scene with bloom effect
      composer.render();
    };

    animate();

    // Handle window resizing
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);

      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="relative">
      <div className="container mx-auto">
        {/* <div className="absolute h-full flex flex-col justify-end lg:w-1/3 p-5 py-40">
          <p>
            User Agent:{" "}
            <div className="font-extrabold">{browserInfo.userAgent}</div>
          </p>
          <p>
            Platform:{" "}
            <div className="font-extrabold">{browserInfo.platform}</div>
          </p>
          <p>
            Language:{" "}
            <div className="font-extrabold">{browserInfo.language}</div>
          </p>
          <p>
            Vendor: <div className="font-extrabold">{browserInfo.vendor}</div>
          </p>
        </div> */}
      </div>
    </div>
  );
}
