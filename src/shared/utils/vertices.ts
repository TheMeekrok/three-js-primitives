import { PrimitiveShapeWireframe } from "../types"

export const getVertices = (wireframe: PrimitiveShapeWireframe) => {
  const vertices = (() => {
    switch (wireframe.type) {
      case "pyramid": {
        return getPyramidVertices(wireframe)
      }
      default: {
        return getBoxVertices(wireframe)
      }
    }
  })()

  return new Float32Array(vertices.flatMap((e) => e))
}

export const getBoxVertices = (wireframe: PrimitiveShapeWireframe) => {
  const halfLength = wireframe.length / 2
  const halfWidth = wireframe.width / 2
  const halfHeight = wireframe.height / 2

  return [
    [-halfWidth, -halfHeight, -halfLength],
    [halfWidth, -halfHeight, -halfLength],
    [halfWidth, -halfHeight, halfLength],
    [-halfWidth, -halfHeight, halfLength],

    [-halfWidth, halfHeight, -halfLength],
    [halfWidth, halfHeight, -halfLength],
    [halfWidth, halfHeight, halfLength],
    [-halfWidth, halfHeight, halfLength],
  ]
}

export const getPyramidVertices = (wireframe: PrimitiveShapeWireframe) => {
  const halfLength = wireframe.length / 2
  const halfWidth = wireframe.width / 2
  const halfHeight = wireframe.height / 2

  return [
    [-halfWidth, -halfHeight, -halfLength],
    [halfWidth, -halfHeight, -halfLength],
    [halfWidth, -halfHeight, halfLength],
    [-halfWidth, -halfHeight, halfLength],

    [0, wireframe.height, 0],
  ]
}
