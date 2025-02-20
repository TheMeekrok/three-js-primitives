import { useShapesContext } from "@/shared/providers"
import { PrimitiveShapeWireframe, ShapeType } from "@/shared/types"
import { randomHexColor, randomInt } from "@/shared/utils"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { useState } from "react"
import { Color, Vector3 } from "three"
import { v4 } from "uuid"

export const AddGroupDialog = (props: DialogProps) => {
  const [formData, setFormData] = useState<
    PrimitiveShapeWireframe & { number: number }
  >({
    type: "box",
    length: 0,
    width: 0,
    height: 0,
    number: 0,
  })

  const { addShape } = useShapesContext()

  const onClose = () => {
    if (props.onClose) props.onClose({}, "backdropClick")
  }

  const onOk = () => {
    for (let i = 0; i < formData.number; ++i) {
      const id = v4()
      const color = randomHexColor()
      const position = new Vector3(
        randomInt(-50, 50),
        randomInt(-50, 50),
        randomInt(-50, 50)
      )

      addShape({
        id: id,
        wireframe: {
          type: formData.type,
          length: formData.length,
          height: formData.height,
          width: formData.width,
        },
        transform: {
          position: position,
        },
        color: new Color(color),
      })
    }

    onClose()
  }

  return (
    <Dialog fullWidth={true} {...props}>
      <DialogTitle>Add primitives group</DialogTitle>
      <DialogContent>
        <FormControl
          fullWidth
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <InputLabel id="type-select-label">Type</InputLabel>
          <Select
            labelId="type-select-label"
            id="type-select"
            value={formData.type}
            label="Type"
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                type: event.target.value as ShapeType,
              }))
            }}
          >
            <MenuItem value="box">Box</MenuItem>
            <MenuItem value="pyramid">Pyramid</MenuItem>
          </Select>
          <TextField
            fullWidth
            label="Length"
            variant="outlined"
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                length: Number(event.target.value),
              }))
            }}
            type="number"
          />
          <TextField
            fullWidth
            label="Width"
            variant="outlined"
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                width: Number(event.target.value),
              }))
            }}
            type="number"
          />
          <TextField
            fullWidth
            label="Height"
            variant="outlined"
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                height: Number(event.target.value),
              }))
            }}
            type="number"
          />
          <TextField
            fullWidth
            label="Number"
            variant="outlined"
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                number: Number(event.target.value),
              }))
            }}
            type="number"
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}
