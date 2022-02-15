import { styled } from "@mui/system";
import Button from "@mui/material/Button";

export const ToHomeButton = styled(Button)({
    fontSize: "2rem"
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));