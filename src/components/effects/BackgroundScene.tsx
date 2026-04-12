"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NeuralMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2.2, 1]} />
      <meshBasicMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

function AmbientOrbs() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[3, 1, -2]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.15} />
      </mesh>
      <mesh position={[-2.5, -1, -1]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#3b82f6" />
      <NeuralMesh />
      <AmbientOrbs />
    </>
  );
}

export function BackgroundScene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
