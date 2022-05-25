import React from "react";
import * as THREE from "three"
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { MeshBasicMaterial } from "three";


function SphereAnimation() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#AE67FA"
          attach="material"
          distort={0.8}
          speed={2.5}
        />
      </Sphere>
    </mesh>
  );
}

export default SphereAnimation;
