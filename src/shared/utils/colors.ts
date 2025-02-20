import { PrimitiveShapeWireframe } from "../types"
import { randomRgbColor } from "./random"

export const getRandomColors = (wireframe: PrimitiveShapeWireframe) => {
  const colors = (() => {
    switch (wireframe.type) {
      case "pyramid": {
        return getPyramidColors()
      }
      default: {
        return getBoxColors()
      }
    }
  })()

  return new Float32Array(colors.flat().flat())
}

const getBoxColors = () => {
  const faces = [
    randomRgbColor(),
    randomRgbColor(),
    randomRgbColor(),
    randomRgbColor(),
    randomRgbColor(),
    randomRgbColor(),
  ]

  return [
    [faces[0], faces[0], faces[0], faces[0]],
    [faces[1], faces[1], faces[1], faces[1]],
    [faces[2], faces[2], faces[2], faces[2]],
    [faces[3], faces[3], faces[3], faces[3]],

    [faces[4], faces[4], faces[4], faces[4]],
    [faces[5], faces[5], faces[5], faces[5]],
  ]
}

const getPyramidColors = () => {
  const faces = [
    randomRgbColor(),
    randomRgbColor(),
    randomRgbColor(),
    randomRgbColor(),
    randomRgbColor(),
  ]

  return [
    [faces[0], faces[0], faces[0], faces[0]],
    [faces[1], faces[1], faces[1], faces[1]],
    [faces[2], faces[2], faces[2], faces[2]],
    [faces[3], faces[3], faces[3], faces[3]],

    [faces[4], faces[4], faces[4], faces[4]],
  ]
}
