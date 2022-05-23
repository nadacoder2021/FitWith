import React from "react";
import * as THREE from "three"
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

function SphereAnimation() {

  const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 	0x0000ff});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;
function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
  return (
    <></>
   
  );
}

export default SphereAnimation;


// function SphereAnimation() {
//   return (
//     <mesh rotation={[90, 0, 20]}>
//       <Sphere visible args={[1, 100, 200]} scale={2}>
//         <MeshDistortMaterial
//           color="#AE67FA"
//           attach="material"
//           distort={0.8}
//           speed={2.5}
//         />
//       </Sphere>
//     </mesh>
//   );
// }

// export default SphereAnimation;
