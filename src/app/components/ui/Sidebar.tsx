"use client"

import { useShapesContext } from "@/shared/providers"
import {
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import { AddGroupDialog } from "./AddGroupDialog"
import { useState } from "react"

import CategoryIcon from "@mui/icons-material/Category"
import DeleteIcon from "@mui/icons-material/Delete"

export const Sidebar = () => {
  const { shapes, selectOne, removeShape, removeAll, unselectAll } =
    useShapesContext()

  const [dialogIsOpened, setDialogIsOpened] = useState(false)

  const openDialog = () => {
    setDialogIsOpened(true)
  }

  const closeDialog = () => {
    setDialogIsOpened(false)
  }

  return (
    <Drawer anchor="left" variant="permanent">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          height: "100%",
          padding: "12px 20px",
        }}
        onClick={() => unselectAll()}
      >
        <List sx={{ flexGrow: 1, overflow: "auto" }}>
          {shapes.length === 0 && (
            <Typography component="span">No primitives</Typography>
          )}
          {shapes.map((shape, index) => {
            return (
              <ListItem
                key={shape.id}
                sx={{
                  borderRadius: "12px",
                  transition: "all",
                  transitionDuration: "100ms",
                  bgcolor: shape.isSelected ? "#1976d2" : "transparent",
                  cursor: shape.isSelected ? "default" : "pointer",
                  "&:hover": {
                    bgcolor: !shape.isSelected ? "#1976d233" : "#1976d2",
                  },
                }}
                onClick={(event) => {
                  event.stopPropagation()
                  if (event) selectOne(shape.id)
                }}
                secondaryAction={
                  <IconButton
                    aria-label="delete"
                    onClick={(event) => {
                      event.stopPropagation()
                      removeShape(shape.id)
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ textTransform: "capitalize" }}
                  primary={`${index + 1}. ${shape.wireframe.type}`}
                  secondary={`position: (${shape.transform?.position
                    ?.toArray()
                    .join(", ")})`}
                />
              </ListItem>
            )
          })}
        </List>
        <Divider />
        <Container sx={{ display: "flex", gap: "20px" }}>
          <Button variant="contained" onClick={openDialog}>
            Add group
          </Button>
          <AddGroupDialog open={dialogIsOpened} onClose={closeDialog} />
          <Button variant="outlined" onClick={removeAll}>
            Clear scene
          </Button>
        </Container>
      </Container>
    </Drawer>
  )
}
