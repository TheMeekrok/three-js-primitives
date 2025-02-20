"use client"

import { createContext, PropsWithChildren, useContext, useState } from "react"
import { PrimitiveShape } from "../types"

export type ShapesContextType = {
  shapes: Array<PrimitiveShape>
  selectOne: (id: string) => void
  unselectAll: () => void
  addShape: (shape: PrimitiveShape) => void
  removeShape: (id: string) => void
  removeAll: () => void
}

export const ShapesContext = createContext<ShapesContextType>({
  shapes: [],
  selectOne: () => {},
  unselectAll: () => {},
  addShape: () => {},
  removeShape: () => {},
  removeAll: () => {},
})

export const useShapesContext = () => {
  return useContext(ShapesContext)
}

export const ShapesProvider = ({ children }: PropsWithChildren) => {
  const [shapes, setShapes] = useState<Array<PrimitiveShape>>([])

  const selectOne = (id: string) => {
    setShapes((prev) =>
      prev.map((shape) => {
        if (shape.id === id) {
          return {
            ...shape,
            isSelected: true,
          }
        }
        return {
          ...shape,
          isSelected: false,
        }
      })
    )
  }

  const unselectAll = () => {
    setShapes((prev) => prev.map((shape) => ({ ...shape, isSelected: false })))
  }

  const addShape = (shape: PrimitiveShape) => {
    setShapes((prev) => [...prev, shape])
  }

  const removeShape = (id: string) => {
    setShapes((prev) => prev.filter((shape) => shape.id !== id))
  }

  const removeAll = () => {
    setShapes([])
  }

  return (
    <ShapesContext.Provider
      value={{
        shapes: shapes,
        selectOne: selectOne,
        unselectAll: unselectAll,
        addShape: addShape,
        removeShape: removeShape,
        removeAll: removeAll,
      }}
    >
      {children}
    </ShapesContext.Provider>
  )
}
