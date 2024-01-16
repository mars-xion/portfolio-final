import React from "react";
import { useGLTF } from "@react-three/drei";

const ReadingGadget = ({ isMobile }) => {
  const gadget = useGLTF("public/full-screen/scene.gltf"); //cgadget //full-screen

  return (
    <mesh scale={isMobile ? 0.3 : 0.45}>
      {/* first of, create a light to see smth */}
      <hemisphereLight intensity={20} groundColor="black" />
      <pointLight intensity={50} />
      <primitive
        object={gadget.scene}
        scale={isMobile ? 0.5 : 1.6} // is it mobile page? then make size to 0.3. is it not mobile? then make the size tp 0.65
        position={isMobile ? [0, -3, 0] : [-200, -28.25, -150]}
        rotation={[0.1, 20, -0.1]}
        onClick={() => (window.location.href = "/ProjectDetail")}
      />
    </mesh>
  );
};

{
  /* Cube component */
}
// const GadgetCanvas = () => {
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
//         <ReadingGadget isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

export default ReadingGadget;
