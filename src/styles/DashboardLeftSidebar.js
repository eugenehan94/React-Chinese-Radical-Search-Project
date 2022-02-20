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

export const ButtonsContainer = styled("div")(({theme}) => ({
  padding: theme.spacing(1)
}))
export const ButtonIcon = styled(Button)(({theme}) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1)

}))