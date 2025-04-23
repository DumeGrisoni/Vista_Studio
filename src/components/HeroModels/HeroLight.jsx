import React from 'react';
import * as THREE from 'three';

const HeroLight = () => {
  return (
    <>
      <spotLight
        position={[6, 40, 8]}
        intensity={500}
        angle={0.05}
        penumbra={0.25}
        color="#4cc9f0"
      />
      <spotLight
        position={[4, 5, -3]}
        intensity={40}
        angle={0.3}
        penumbra={1}
        color="#F3B178"
      />
      <spotLight
        position={[-30, 50, 50]}
        intensity={800}
        angle={0.02}
        penumbra={0.3}
        color="#A4D1DF"
      />
      <primitive
        object={new THREE.RectAreaLight('#F3B178', 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={10}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
      <pointLight position={[0, 1, 0]} intensity={5} color={'#F3B178'} />
      <pointLight position={[1, 2, -2]} intensity={1} color="#0d00a4" />
    </>
  );
};

export default HeroLight;
