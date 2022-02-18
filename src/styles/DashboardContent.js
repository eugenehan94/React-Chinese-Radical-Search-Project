import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const drawerWidth = 280;

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  width: "100%",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,

  [theme.breakpoints.down("md")]: {
    padding: 0,
  },

  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export const ContentPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  width: "100%"
}));

export const ContentTitle = styled(Typography)(({theme}) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    textAlign: "center"
  }
}))

export const ChineseCharacters = styled(Typography)(({theme}) => ({
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center"
  }
}))

export const ChineseCharactersMeaning = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down("sm")]: {
    textAlign: "center"
  }
}))