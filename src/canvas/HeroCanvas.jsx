import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../components/Loader";
import ReadingGadget from "./ReadingGadget";
import ProjectCube from "./ProjectCube";

const HeroCanvas = ({ isMobile }) => {
  return (
    <Canvas camera={{ position: [20, 20, 20], fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false}
          enableRotate={false}
          enableZoom={false}
          maxPolarAngle={
            Math.PI / 2
          } /* To only router around a spacific angle */
          minPolarAngle={Math.PI / 2}
        />
        <ReadingGadget isMobile={isMobile} />
        <ProjectCube isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default HeroCanvas;
