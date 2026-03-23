import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text, Billboard } from "@react-three/drei";

const TECH_BALLS = [
  { label: "React", color: "#61dafb", position: [0, 0, 0] },
  { label: "Node.js", color: "#68a063", position: [2.5, 0.5, 0] },
  { label: "JS", color: "#f7df1e", position: [-2.5, 0.5, 0] },
  { label: "CSS", color: "#2965f1", position: [1.2, -2, 0] },
  { label: "MongoDB", color: "#4db33d", position: [-1.2, -2, 0] },
  { label: "Git", color: "#f05032", position: [0, 2.2, 0] },
];

const TechBall = ({ label, color, position }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} castShadow>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
      {/* Billboard ensures text always faces the camera — no mirroring */}
      <Billboard position={[position[0], position[1] - 0.92, position[2]]}>
        <Text
          fontSize={0.23}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </Billboard>
    </Float>
  );
};

const SkillsCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 5]} intensity={2} color="#7c3aed" />
        <pointLight position={[5, 5, 0]} intensity={1} color="#06b6d4" />
        <pointLight position={[-5, -5, 0]} intensity={0.8} color="#f59e0b" />

        {TECH_BALLS.map((ball, i) => (
          <TechBall key={i} {...ball} />
        ))}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI * 2 / 3}
        />
      </Suspense>
    </Canvas>
  );
};

export default SkillsCanvas;
