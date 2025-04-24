import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Room } from './Optimized-room.jsx';
import HeroLight from './HeroLight.jsx';
const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas camera={{ position: [5, 5, 14.2], fov: 45 }}>
      <HeroLight />
      <group
        scale={isMobile ? 0.7 : isTablet ? 0.6 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <Room />
      </group>
      <OrbitControls
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        enablePan={false}
        enableZoom={isTablet}
      />
    </Canvas>
  );
};

export default HeroExperience;
