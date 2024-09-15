import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useState } from "react";
import { Points, PointsMaterial, BoxGeometry, Vector3 } from "three";

function PointsComponent() {
  const pointsRef = useRef<Points>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  useFrame((state) => {
    const { pointer } = state;

    if (pointsRef.current) {
      // Rotate the points mesh
      pointsRef.current.rotation.y += 0.01;
      pointsRef.current.rotation.z = 0.45;
      pointsRef.current.rotation.x = 0.45;

      const points = pointsRef.current.geometry.attributes.position;
      const pointCount = points.count;
      let closestPoint = null;
      let minDistance = Infinity;

      for (let i = 0; i < pointCount; i++) {
        const point = new Vector3(
          points.getX(i),
          points.getY(i),
          points.getZ(i)
        );
        const distance = point.distanceTo(new Vector3(pointer.x, pointer.y, 0));

        if (distance < minDistance) {
          minDistance = distance;
          closestPoint = i;
        }
      }

      if (minDistance < 0.1) {
        setHoveredPoint(closestPoint);
      } else {
        setHoveredPoint(null);
      }
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <boxGeometry args={[1, 1, 1, 25, 25, 25]} />
        <pointsMaterial
          size={0.01}
          color="red"
          onBeforeCompile={(shader) => {
            shader.uniforms.hoveredPoint = { value: hoveredPoint };
            shader.vertexShader = `
        uniform float hoveredPoint;
        ${shader.vertexShader}
      `;
          }}
        />
      </points>
      <EffectComposer>
        <Bloom
          luminanceThreshold={30.3}
          luminanceSmoothing={30.9}
          height={300}
        />
      </EffectComposer>
    </>
  );
}

export default function TheCube() {
  return (
    <Canvas
      style={{ height: "100vh", width: "100vw" }}
      camera={{ position: [0, 0, -1] }} // Move the camera closer
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} />
      <PointsComponent />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
