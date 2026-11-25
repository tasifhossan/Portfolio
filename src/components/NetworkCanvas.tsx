"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const nodeCount = 110;

  const [nodePositions, linePositions] = useMemo(() => {
    const coords: [number, number, number][] = [];
    // Spread roughly x±5, y±2.5, z±2.5
    for (let i = 0; i < nodeCount; i++) {
      coords.push([
        (Math.random() - 0.5) * 10, // x ± 5
        (Math.random() - 0.5) * 5,  // y ± 2.5
        (Math.random() - 0.5) * 5,  // z ± 2.5
      ]);
    }

    const flatNodes = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      flatNodes[i * 3] = coords[i][0];
      flatNodes[i * 3 + 1] = coords[i][1];
      flatNodes[i * 3 + 2] = coords[i][2];
    }

    // LineSegments connecting every node pair closer than 1.6 units
    const lineCoords: number[] = [];
    const maxDistSq = 1.6 * 1.6;
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = coords[i][0] - coords[j][0];
        const dy = coords[i][1] - coords[j][1];
        const dz = coords[i][2] - coords[j][2];
        const distSq = dx * dx + dy * dy + dz * dz;
        if (distSq < maxDistSq) {
          lineCoords.push(
            coords[i][0], coords[i][1], coords[i][2],
            coords[j][0], coords[j][1], coords[j][2]
          );
        }
      }
    }

    const flatLines = new Float32Array(lineCoords);
    return [flatNodes, flatLines];
  }, [nodeCount]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const group = groupRef.current;

    // Rotate group.y slowly (dt * 0.05)
    group.rotation.y += delta * 0.05;

    // Lerp rotation.x toward pointer.y * 0.25 (factor 0.04)
    const targetRotX = state.pointer.y * 0.25;
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetRotX, 0.04);

    // Lerp position.x toward pointer.x * 0.4 (factor 0.04)
    const targetPosX = state.pointer.x * 0.4;
    group.position.x = THREE.MathUtils.lerp(group.position.x, targetPosX, 0.04);
  });

  return (
    <group ref={groupRef}>
      {/* 110 random nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#5EEAD4"
          size={0.05}
          sizeAttenuation
          transparent
          opacity={0.9}
        />
      </points>

      {/* Connection lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3B82F6" opacity={0.25} transparent />
      </lineSegments>
    </group>
  );
}

export default function NetworkCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <NetworkNodes />
    </Canvas>
  );
}
