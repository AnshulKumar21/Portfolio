import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const EarthMesh = () => {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial
        color="#1e3a5f"
        metalness={0.1}
        roughness={0.7}
        emissive="#0a1628"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

const AtmosphereRing = () => {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2.5 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      ref.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.2, 0.08, 16, 100]} />
      <meshStandardMaterial
        color="#7c3aed"
        emissive="#7c3aed"
        emissiveIntensity={0.8}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const ContactCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 55 }} style={{ width: "100%", height: "400px" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 3, 5]} intensity={1.5} color="#7c3aed" />
        <pointLight position={[-5, -3, 5]} intensity={0.8} color="#06b6d4" />

        <Stars radius={80} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />

        <EarthMesh />
        <AtmosphereRing />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI * 2 / 3.5}
        />
      </Suspense>
    </Canvas>
  );
};

export default ContactCanvas;
