import { Environment, Float, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Room } from './Optimized-room.jsx';
import HeroLight from './HeroLight.jsx';
import { Vista } from './Vista.jsx';
const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas camera={{ position: [5, 5, 14.2], fov: 45 }}>
      <HeroLight />
      <group
        scale={isMobile ? 0.9 : isTablet ? 0.8 : 1.2}
        position={isMobile ? [0, -1, 0] : isTablet ? [0, -2.5, 0] : [0, 0, -1]}
        rotation={[0, 0, 0]}
      >
        <Float
          rotationIntensity={0.5}
          speed={1}
          floatIntensity={0.2}
          floatingRange={[-0.5, 0.5]}
        >
          <Vista />
          {/* <Room />
           */}
        </Float>
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
