import { Color, Euler, Vector3 } from "three"

export type PrimitiveShapeTransform = {
  position?: Vector3
  rotation?: Euler
  scale?: Vector3
}

export type ShapeType = "box" | "pyramid"

export type PrimitiveShapeWireframe = {
  type: ShapeType
  length: number
  width: number
  height: number
}

export type PrimitiveShape = {
  id: string
  wireframe: PrimitiveShapeWireframe
  transform?: PrimitiveShapeTransform
  color: Color
  isSelected?: boolean
}
