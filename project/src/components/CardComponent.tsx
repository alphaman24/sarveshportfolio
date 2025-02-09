import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const SpinningCube = () => {
  return (
    <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      {/* Set the cube color to #64ffda */}
      <meshStandardMaterial 
       // color="#64ffda" 
        roughness={0.5} // Low roughness for shininess
        metalness={0.5}   // High metalness for reflective quality
      />
    </mesh>
  );
};

const CardComponent = () => {
  return (
    <div style={{
      width: '350px',
      border: '2px solid #64ffda', // Blue border
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)', // Subtle shadow
      backgroundColor: '#112240', // Dark blue background
      transition: 'transform 0.3s', // Smooth hover effect
    }}>
      <h2 style={{
        textAlign: 'center',
        margin: '16px 0',
        color: '#ffffff', // White text color for contrast
      }}>3D Cube</h2>
      <Canvas style={{ height: '300px' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <SpinningCube />
        <OrbitControls />
      </Canvas>
      <div style={{
        padding: '16px',
        textAlign: 'center', // Center text in the content area
      }}>
        <p style={{ marginBottom: '16px', color: '#ffffff' }}>
          This card showcases a spinning cube using Three.js and React Three Fiber.
        </p>
        
      </div>
    </div>
  );
};

export default CardComponent;
