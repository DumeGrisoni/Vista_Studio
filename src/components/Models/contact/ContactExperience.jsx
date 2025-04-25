import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Macbook } from './MacbookProAN';

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 30 }}>
      <ambientLight intensity={0.5} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="lightblue"
      />
      <Environment files="./images/hdr/lobby.hdr" />

      <group scale={0.02} position={[0, 0, 0]} castShadow>
        <Macbook />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
