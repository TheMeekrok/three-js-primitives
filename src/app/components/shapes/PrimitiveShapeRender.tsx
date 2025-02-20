import { useShapesContext } from "@/shared/providers"
import { PrimitiveShape } from "@/shared/types"
import { getIndices, getRandomColors, getVertices } from "@/shared/utils"
import { FC, useMemo } from "react"
import * as THREE from "three"

export interface PrimitiveShapeRenderProps {
  shape: PrimitiveShape
}

export const PrimitiveShapeRender: FC<PrimitiveShapeRenderProps> = ({
  shape,
}) => {
  const vertices = useMemo(
    () => getVertices(shape.wireframe),
    [shape.wireframe]
  )

  const indices = useMemo(() => getIndices(shape.wireframe), [shape.wireframe])

  const colors = useMemo(
    () => getRandomColors(shape.wireframe),
    [shape.wireframe]
  )

  const { selectOne } = useShapesContext()

  return (
    <mesh
      position={shape.transform?.position}
      rotation={shape.transform?.rotation}
      scale={shape.transform?.scale}
      onClick={() => selectOne(shape.id)}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={vertices}
          itemSize={3}
          count={vertices.length / 3}
        />
        <bufferAttribute
          attach="index"
          array={indices}
          itemSize={1}
          count={indices.length}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          itemSize={3}
          count={vertices.length / 3}
        />
      </bufferGeometry>
      <meshPhongMaterial
        vertexColors={true}
        side={THREE.DoubleSide}
        flatShading={true}
        wireframe={shape.isSelected}
      />
    </mesh>
  )
}
