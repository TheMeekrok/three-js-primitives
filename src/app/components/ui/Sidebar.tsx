"use client"

import { useShapesContext } from "@/shared/providers"
import {
  Button,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material"

export const Sidebar = () => {
  const { shapes } = useShapesContext()

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
      >
        <List sx={{ flexGrow: 1 }}>
          {shapes.length === 0 && (
            <Typography component="span">No primitives</Typography>
          )}
          {shapes.map((shape) => {
            return (
              <ListItem key={shape.id}>
                <ListItemText primary={`${shape.wireframe.type}`} />
              </ListItem>
            )
          })}
        </List>
        <Divider />
        <Container sx={{ display: "flex", gap: "20px" }}>
          <Button variant="contained">Add group</Button>
          <Button variant="outlined">Clear scene</Button>
        </Container>
      </Container>
    </Drawer>
  )
}
