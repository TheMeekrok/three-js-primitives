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

  const vertices = [
    [-halfWidth, -halfHeight, -halfLength],
    [halfWidth, -halfHeight, -halfLength],
    [halfWidth, -halfHeight, halfLength],
    [-halfWidth, -halfHeight, halfLength],

    [-halfWidth, halfHeight, -halfLength],
    [halfWidth, halfHeight, -halfLength],
    [halfWidth, halfHeight, halfLength],
    [-halfWidth, halfHeight, halfLength],
  ]

  return [
    vertices[0],
    vertices[1],
    vertices[5],
    vertices[4],
    vertices[3],
    vertices[2],
    vertices[6],
    vertices[7],
    vertices[0],
    vertices[4],
    vertices[7],
    vertices[3],
    vertices[1],
    vertices[5],
    vertices[6],
    vertices[2],
    vertices[4],
    vertices[5],
    vertices[6],
    vertices[7],
    vertices[0],
    vertices[1],
    vertices[2],
    vertices[3],
  ]
}

export const getPyramidVertices = (wireframe: PrimitiveShapeWireframe) => {
  const halfLength = wireframe.length / 2
  const halfWidth = wireframe.width / 2
  const halfHeight = wireframe.height / 2

  const vertices = [
    [-halfWidth, -halfHeight, -halfLength],
    [halfWidth, -halfHeight, -halfLength],
    [halfWidth, -halfHeight, halfLength],
    [-halfWidth, -halfHeight, halfLength],

    [0, halfHeight, 0],
  ]

  return [
    vertices[0],
    vertices[1],
    vertices[4],
    vertices[1],
    vertices[2],
    vertices[4],
    vertices[2],
    vertices[3],
    vertices[4],
    vertices[3],
    vertices[0],
    vertices[4],
    vertices[0],
    vertices[1],
    vertices[2],
    vertices[3],
  ]
}
