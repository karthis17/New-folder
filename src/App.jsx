import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { ARButton, VRCanvas, XR } from "@react-three/xr"; // Remove Controllers as it's likely unnecessary

// Component to load and render the GLB model
function Model() {
  const { scene } = useGLTF("gallardo.glb"); // Load the GLB model from the public folder
  return <primitive object={scene} scale={0.5} />;
}

export default function App() {
  return (
    <>
      <h1>WebXR Three.js AR/3D Model</h1>
      {/* AR Button to enter AR Mode */}
      <ARButton />

      {/* WebXR Canvas */}
      <VRCanvas>
        <XR>
          {"Asd"}
          {/* 3D scene lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

          {/* GLB Model */}
          <Model />

          {/* Enable controls to move around the model in 3D view */}
          <OrbitControls />
        </XR>
      </VRCanvas>
    </>
  );
}
