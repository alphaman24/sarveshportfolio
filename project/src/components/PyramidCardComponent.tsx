import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const SpinningPyramid = () => {
  return (
    <mesh rotation={[Math.PI / 4, 0, 0]}>
      <coneGeometry args={[1.5, 2, 4]} /> {/* Pyramid shape using cone geometry */}
      {/* Set the pyramid color to #64ffda */}
      <meshStandardMaterial 
       // color="#64ffda" // Pyramid color
        roughness={0.4} // Low roughness for shininess
        metalness={0.4} // High metalness for reflective quality
      />
    </mesh>
  );
};

const PyramidCardComponent = () => {
  return (
    <div style={{
      width: '350px',
      border: '2px solid #64ffda', // Blue border
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)', // Subtle shadow
      backgroundColor: '#112240', // Dark blue background
      transition: 'transform 0.3s', // Smooth hover effect
      marginBottom:'10px',
      marginLeft:'5px',
     
    }}>
      <h2 style={{
        textAlign: 'center',
        margin: '16px 0',
        color: '#ffffff', // White text color for contrast
      }}>3D Pyramid</h2>
      <Canvas style={{ height: '300px' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <SpinningPyramid />
        <OrbitControls />
      </Canvas>
      <div style={{
        padding: '16px',
        textAlign: 'center', // Center text in the content area
      }}>
        <p style={{ marginBottom: '16px', color: '#ffffff' }}>
          This card showcases a spinning pyramid using Three.js and React Three Fiber.
        </p>
        
      </div>
    </div>
  );
};

export default PyramidCardComponent;
