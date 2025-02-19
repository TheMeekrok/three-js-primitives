"use client";

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { PrimitivesCanvas } from "./components/PrimitivesCanvas";

const Home = () => {
  return (
    <Box>
      <Drawer anchor="left" variant="permanent">
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {[1, 2, 3].map((value) => (
            <ListItem
              key={value}
              disableGutters
              secondaryAction={<IconButton aria-label="comment"></IconButton>}
            >
              <ListItemText primary={`Line item ${value}`} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <PrimitivesCanvas />
    </Box>
  );
};

export default Home;
