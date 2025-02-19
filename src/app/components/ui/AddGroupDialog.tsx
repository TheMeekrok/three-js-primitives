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

export const AddGroupDialog = (props: DialogProps) => {
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
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="box"
            label="Type"
            onChange={() => {}}
          >
            <MenuItem value="box">Box</MenuItem>
            <MenuItem value="pyramid">Pyramid</MenuItem>
          </Select>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Length"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Width"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Height"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Number"
            variant="outlined"
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose()}>Cancel</Button>
        <Button onClick={() => {}}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}
