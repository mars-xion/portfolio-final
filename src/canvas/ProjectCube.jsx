import React from "react";
import { useGLTF } from "@react-three/drei";

const ProjectCube = ({ isMobile }) => {
  const cube = useGLTF("public/sci-fi_crate__ammunition_box_1/scene.gltf");

  return (
    <mesh scale={isMobile ? 0.00003 : 0.059}>
      {/* first of, create a light to see smth */}
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.5} />
      <ambientLight color={0xffffff} intensity={1.0} />

      <primitive
        object={cube.scene}
        scale={isMobile ? 0.15 : 0.3} // is it mobile page? then make size to 0.3. is it not mobile? then make the size tp 0.65
        position={isMobile ? [0, -3, 0] : [-350, -90.25, -500]}
        rotation={[-0.01, 74.5, -0.1]}
        onClick={() => (window.location.href = "/projects")}
      />
    </mesh>
  );
};

{
  /* Cube component */
}
// const CubeCanvas = () => {
//   // for responsivity
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       /* camera position [x, y, z], fov for feel of view */
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate={false}
//           enableZoom={false}
//           maxPolarAngle={
//             Math.PI / 2
//           } /* To only router around a spacific angle */
//           minPolarAngle={Math.PI / 2}
//         />
//         <ProjectCube isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

export default ProjectCube;
