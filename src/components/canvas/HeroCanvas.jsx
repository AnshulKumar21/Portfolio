import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

const RotatingTorus = () => {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <mesh ref={ref} castShadow>
      <torusGeometry args={[1.8, 0.5, 32, 100]} />
      <meshStandardMaterial
        color="#7c3aed"
        wireframe
        opacity={0.6}
        transparent
      />
    </mesh>
  );
};

const FloatingSphere = ({ position, color, size = 0.5 }) => {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position} castShadow>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const FloatingIcosahedron = ({ position }) => {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <Float speed={1.5} floatIntensity={1.5}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          opacity={0.5}
          transparent
        />
      </mesh>
    </Float>
  );
};

const HeroCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 55 }} style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#7c3aed" />
        <pointLight position={[-5, -5, 5]} intensity={0.8} color="#06b6d4" />

        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <RotatingTorus />
        <FloatingSphere position={[3.5, 1.5, 0]} color="#f59e0b" size={0.4} />
        <FloatingSphere position={[-3.5, -1.5, 0]} color="#06b6d4" size={0.35} />
        <FloatingSphere position={[2, -2.5, 1]} color="#7c3aed" size={0.3} />
        <FloatingIcosahedron position={[-2.5, 2, -1]} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI * 2 / 3}
        />
      </Suspense>
    </Canvas>
  );
};

export default HeroCanvas;
