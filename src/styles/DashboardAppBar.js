import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 300;

// Notes: "shouldForwardProp" could be called anything - but has to be there to work
// the ... (spread operator) has to be there to indicate if open is true condition to be valid
export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));