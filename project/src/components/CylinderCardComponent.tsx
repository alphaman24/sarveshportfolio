import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const SpinningCylinder = () => {
  return (
    <mesh rotation={[Math.PI / 4, 0, 0]}>
      <cylinderGeometry args={[1.5, 1.5, 2, 32]} /> {/* Cylinder shape using cylinder geometry */}
      {/* Set the cylinder color to #64ffda */}
      <meshStandardMaterial 
      //  color="#64ffda" 
        roughness={0.1} // Low roughness for shininess
        metalness={0.0} // High metalness for reflective quality
      />
    </mesh>
  );
};

const CylinderCardComponent = () => {
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
    }}>
      <h2 style={{
        textAlign: 'center',
        margin: '16px 0',
        color: '#ffffff', // White text color for contrast
      }}>3D Cylinder</h2>
      <Canvas style={{ height: '300px' }}>
        {/* Ambient light for overall illumination */}
        <ambientLight intensity={1} />
        {/* Point light to create highlights and depth */}
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <SpinningCylinder />
        <OrbitControls />
      </Canvas>
      <div style={{
        padding: '16px',
        textAlign: 'center', // Center text in the content area
      }}>
        <p style={{ marginBottom: '16px', color: '#ffffff' }}>
          This card showcases a spinning cylinder using Three.js and React Three Fiber.
        </p>
        
      </div>
    </div>
  );
};

export default CylinderCardComponent;
