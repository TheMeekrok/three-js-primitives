import { Canvas } from "@react-three/fiber";
import { BoxPrimitive } from "./BoxPrimitive";
import { OrbitControls } from "@react-three/drei";
import { Box } from "@mui/material";
import { PyramidPrimitive } from "./PyramidPrimitive";

export const PrimitivesCanvas = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Canvas
        camera={{
          near: 0.01,
          far: 10000,
        }}
      >
        <PyramidPrimitive />
        {/* <BoxPrimitive /> */}
        <OrbitControls makeDefault />
      </Canvas>
    </Box>
  );
};
