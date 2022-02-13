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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";

import { ToHomeButton } from "../styles/DashboardLeftSidebar";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import octopusDeploy from "../images/svg/octopusDeploy.svg"
import doli from "../images/svg/doli.svg";
import aptugo from "../images/svg/aptugo.svg"
import { selectedRadical } from "../redux/slices/characterSlice";
const drawerWidth = 300;

const DashboardLeftSidebar = () => {
  const radical = useSelector((state) => state.character);
  const dispatch = useDispatch();
  const { radicalList  } = radical;
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
      variant="permanent"
      anchor="left"
      // open={false}
    >
      <Toolbar>
        <Grid container justifyContent="center">
          <Grid item>
            <ToHomeButton
              component={Link}
              to="/"
              variant="text"
              disableRipple
              size="small"
            >
              黄
            </ToHomeButton>
          </Grid>
        </Grid>
      </Toolbar>
      <Divider />
      <Grid container spacing={2} p={1}>
        <Grid item sm={12}>
          <Button
            variant="outlined"
            fullWidth
            href="https://octopus.com/?utm_source=materialui&utm_medium=referral"
            target="_blank"
          >
            <img src={octopusDeploy} alt="Octopus Deploy" />
          </Button>
        </Grid>
        <Grid item sm={12}>
          <Button
            variant="outlined"
            fullWidth
            href="https://www.doit-intl.com/flexsave/?utm_source=materialui&utm_medium=referral"
            target="_blank"
          >
            <img src={doli} alt="doli" />
          </Button>
        </Grid>
        <Grid item sm={12}>
          <Button
            variant="outlined"
            fullWidth
            href="https://www.aptugo.com/landing"
            target="_blank"
          >
            <img src={aptugo} alt="aptugo" />
          </Button>
        </Grid>
      </Grid>

      <Divider />

      <List>
        {radicalList.map((text, index) => (
          <ListItem
            button
            onClick={() => dispatch(selectedRadical(text))}
            key={index}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={`Radical ${text}`} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DashboardLeftSidebar;
