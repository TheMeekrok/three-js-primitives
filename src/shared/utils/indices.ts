import { PrimitiveShapeWireframe } from "../types"

export const getIndices = (wireframe: PrimitiveShapeWireframe) => {
  const vertices = (() => {
    switch (wireframe.type) {
      case "pyramid": {
        return getPyramidIndices()
      }
      default: {
        return getBoxInidices()
      }
    }
  })()

  return new Uint16Array(vertices.flatMap((e) => e))
}

const getBoxInidices = () => {
  return [
    [0, 1, 2],
    [2, 3, 0],
    [4, 5, 6],
    [6, 7, 4],
    [0, 4, 7],
    [7, 3, 0],
    [0, 1, 4],
    [4, 5, 1],
    [1, 5, 6],
    [6, 2, 1],
    [6, 7, 3],
    [3, 2, 6],
  ]
}

const getPyramidIndices = () => {
  return [
    [0, 1, 2],
    [2, 3, 0],
    [0, 1, 4],
    [1, 2, 4],
    [2, 3, 4],
    [3, 0, 4],
  ]
}
