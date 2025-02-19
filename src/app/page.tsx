import { Box } from "@mui/material"
import { MainScene } from "./components/scenes"
import { Sidebar } from "./components/ui"
import { ShapesProvider } from "@/shared/providers"

const Home = () => {
  return (
    <ShapesProvider>
      <Box sx={{ height: "100vh" }}>
        <Sidebar />
        <Box
          sx={{
            display: "flex",
            height: "100%",
          }}
        >
          <MainScene />
        </Box>
      </Box>
    </ShapesProvider>
  )
}

export default Home
