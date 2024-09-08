import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function SpinningCube() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const donutRefs = useRef<THREE.Mesh<THREE.TorusGeometry>[]>([]);

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

    // Set up OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = false; // Enable damping (inertia)
    controls.dampingFactor = 0.25; // Damping factor
    controls.screenSpacePanning = false; // Disable screen space panning
    controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation

    // Set up post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5, // strength
      0.4, // radius
      0.15 // threshold
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
          (donut.material as THREE.MeshStandardMaterial).emissiveIntensity = 5;
        } else {
          (donut.material as THREE.MeshStandardMaterial).emissiveIntensity = 3;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the donuts on the x-axis only
      donutRefs.current.forEach((donut) => {
        donut.rotation.y += 0.01;
      });

      // Update controls
      controls.update();

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

  return <div ref={mountRef} className="m-0 p-0 flex-1"></div>;
}
