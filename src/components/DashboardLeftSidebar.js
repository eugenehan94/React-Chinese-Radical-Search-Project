import React, { useEffect } from "react";
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

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { fetchRadicals } from "../redux/slices/characterSlice";

const drawerWidth = 300;

const DashboardLeftSidebar = () => {
  const radical = useSelector((state) => state.character);
  const { radicalList, radicalLoading } = radical;
  console.log("Rad: ", radicalList)
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchRadical = async () => {
      const response = await axios.get(
        "http://ccdb.hemiola.com/characters/radicals"
      );
        // converted array to Set to remove duplicates
        const uniqueSet = new Set(response.data.map((o) => o.radical));
        // converted Set back to array
        const uniqueArray = Array.from(uniqueSet);
      dispatch(fetchRadicals(uniqueArray));
    };
    fetchRadical();
  }, []);

  // if (radicalLoading) {
  //   return <></>;
  // }
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
    >
      <Toolbar>
        <Grid container>
          <Grid item>黄</Grid>
        </Grid>
      </Toolbar>
      <Divider />
      <Grid container spacing={2} p={1}>
        <Grid item sm={12}>
          <Button variant="outlined" fullWidth>
            Octopus Deploy
          </Button>
        </Grid>
        <Grid item sm={12}>
          <Button variant="outlined" fullWidth>
            Doil
          </Button>
        </Grid>
        <Grid item sm={12}>
          <Button variant="outlined" fullWidth>
            Aptugo
          </Button>
        </Grid>
      </Grid>

      <Divider />
      {radicalLoading === false ? (
        <List>
          {radicalList.map((text, index) => (
            <ListItem button onClick={()=>console.log("clicked: ", text)} key={index}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={`Radical ${text}`} />
            </ListItem>
          ))}
        </List>
      ) : null}
    </Drawer>
  );
};

export default DashboardLeftSidebar;
