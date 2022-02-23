import React from "react";
//Material UI imports
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

// Material UI styled imports
import {AppBar} from "../styles/DashboardAppBar"

// Redux toolkit imports
import { useSelector, useDispatch } from "react-redux";
import { leftSidebarOpen } from "../redux/slices/characterSlice";

const DashboardAppBar = () => {
  const reducers = useSelector((state) => state.character);
  const { open } = reducers;
  const dispatch = useDispatch();
  return (
      <AppBar position="fixed" elevation={1} open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => dispatch(leftSidebarOpen(true))}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default DashboardAppBar;
