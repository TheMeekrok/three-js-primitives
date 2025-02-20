"use client"

import { Canvas } from "@react-three/fiber"
import { PrimitiveShapeRender } from "../shapes"
import { OrbitControls } from "@react-three/drei"
import { useShapesContext } from "@/shared/providers"

export const MainScene = () => {
  const { shapes } = useShapesContext()

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
      {shapes.map((shape) => (
        <PrimitiveShapeRender key={shape.id} shape={shape} />
      ))}
      <ambientLight />
      <directionalLight
        position={[1000, 1000, 1000]}
        castShadow
        intensity={Math.PI * 2}
      />
      <OrbitControls makeDefault />
    </Canvas>
  )
}
