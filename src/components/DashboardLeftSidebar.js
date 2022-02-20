import React from "react";
// Material UI Imports
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TranslateIcon from "@mui/icons-material/Translate";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";

// React router imports
import { Link } from "react-router-dom";

// Image and SVG imports
import octopusDeploy from "../images/svg/octopusDeploy.svg";
import doli from "../images/svg/doli.svg";
import aptugo from "../images/svg/aptugo.svg";

// Redux toolkit imports
import { useSelector, useDispatch } from "react-redux";
import { selectedRadical } from "../redux/slices/characterSlice";
import { leftSidebarOpen } from "../redux/slices/characterSlice";

// Material UI styled imports
import {
  DrawerHeader,
  ToHomeButton,
  ButtonsContainer,
  ButtonIcon,
} from "../styles/DashboardLeftSidebar";
// https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
const drawerWidth = 280;

const DashboardLeftSidebar = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const reducers = useSelector((state) => state.character);
  const dispatch = useDispatch();
  const { radicalList, open } = reducers;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const listClickHandler = (radChoice) => {
    if (width <= 700) {
      dispatch(leftSidebarOpen(false));
      dispatch(selectedRadical(radChoice));
    } else {
      dispatch(selectedRadical(radChoice));
    }
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <ToHomeButton
              component={Link}
              to="/"
              variant="text"
              disableRipple
              size="small"
            >
              <HomeIcon />
            </ToHomeButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => dispatch(leftSidebarOpen(false))}>
              <ChevronLeftIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DrawerHeader>

      <Divider />
      <ButtonsContainer>
        <ButtonIcon
          variant="outlined"
          fullWidth
          href="https://octopus.com/?utm_source=materialui&utm_medium=referral"
          target="_blank"
        >
          <img src={octopusDeploy} alt="Octopus Deploy" />
        </ButtonIcon>

        <ButtonIcon
          variant="outlined"
          fullWidth
          href="https://www.doit-intl.com/flexsave/?utm_source=materialui&utm_medium=referral"
          target="_blank"
        >
          <img src={doli} alt="doli" />
        </ButtonIcon>

        <ButtonIcon
          variant="outlined"
          fullWidth
          href="https://www.aptugo.com/landing"
          target="_blank"
        >
          <img src={aptugo} alt="aptugo" />
        </ButtonIcon>
      </ButtonsContainer>
      <Divider />

      <List>
        {radicalList.map((text, index) => (
          <ListItem button onClick={() => listClickHandler(text)} key={index}>
            <ListItemIcon>
              <TranslateIcon />
            </ListItemIcon>
            <ListItemText primary={`Radical ${text}`} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DashboardLeftSidebar;
