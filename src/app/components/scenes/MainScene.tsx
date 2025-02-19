"use client"

import { Canvas } from "@react-three/fiber"
import { PrimitiveShapeRender } from "../shapes"
import { Color } from "three"
import { OrbitControls } from "@react-three/drei"

export const MainScene = () => {
  return (
    <Canvas
      camera={{
        near: 0.0001,
        far: 10000,
      }}
      style={{
        marginLeft: "300px",
        width: "100%",
      }}
    >
      <PrimitiveShapeRender
        shape={{
          id: 0,
          wireframe: { type: "box", width: 7, height: 10, length: 7 },
          color: new Color("#3030FF"),
        }}
      />
      <OrbitControls makeDefault />
    </Canvas>
  )
}
