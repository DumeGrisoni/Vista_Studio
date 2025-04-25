import React from 'react';
import * as THREE from 'three';

const HeroLight = () => {
  return (
    <>
      <ambientLight intensity={10} color="gray" />
      <spotLight position={[1, -2, 1]} intensity={600} color="red" />
      <spotLight
        position={[20, 0, 10]}
        intensity={400}
        angle={0.3}
        penumbra={1}
        color="#fff"
      />
      <pointLight position={[1, -2, 1]} intensity={500} color={'#FFF'} />
    </>
  );
};

export default HeroLight;
