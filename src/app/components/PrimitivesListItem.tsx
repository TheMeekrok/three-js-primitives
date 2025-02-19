import { ListItem, ListItemText } from "@mui/material";

export interface PrimitivesListItemProps {
  number: number;
}

export const PrimitivesListItem = ({ number }: PrimitivesListItemProps) => {
  return (
    <ListItem key={number}>
      <ListItemText primary={`Line item ${number}`} />
    </ListItem>
  );
};
