import React, { useEffect } from 'react';
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useMediaQuery } from 'react-responsive';

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  useEffect(() => {
    if (model.name === 'Three.js') {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({ color: 'white' });
        }
      });
    }
  }, [scene, model.name]);
  return (
    <Canvas>
      <Environment files="./images/hdr/lobby.hdr" />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      {!isMobile && <OrbitControls enableZoom={false} />}
      <Float
        rotation={[0, 0, 0]}
        speed={5.5}
        rotationIntensity={1.5}
        floatIntensity={0.9}
      >
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
