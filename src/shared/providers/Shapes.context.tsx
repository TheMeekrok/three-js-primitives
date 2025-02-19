"use client"

import { createContext, PropsWithChildren, useContext, useState } from "react"
import { PrimitiveShape } from "../types"

export type ShapesContextType = {
  shapes: Array<PrimitiveShape>
  addShape: (shape: PrimitiveShape) => void
  removeShape: (id: number) => void
  removeAll: () => void
}

export const ShapesContext = createContext<ShapesContextType>({
  shapes: [],
  addShape: () => {},
  removeShape: () => {},
  removeAll: () => {},
})

export const useShapesContext = () => {
  return useContext(ShapesContext)
}

export const ShapesProvider = ({ children }: PropsWithChildren) => {
  const [shapes, setShapes] = useState<Array<PrimitiveShape>>([])

  const addShape = (shape: PrimitiveShape) => {
    setShapes((prev) => [...prev, shape])
  }

  const removeShape = (id: number) => {
    setShapes((prev) => prev.filter((shape) => shape.id !== id))
  }

  const removeAll = () => {
    setShapes([])
  }

  return (
    <ShapesContext.Provider
      value={{
        shapes: shapes,
        addShape: addShape,
        removeShape: removeShape,
        removeAll: removeAll,
      }}
    >
      {children}
    </ShapesContext.Provider>
  )
}
