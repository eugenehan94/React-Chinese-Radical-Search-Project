import React, { useEffect } from "react";
// Material UI Imports
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";

import axios from "axios";

import {useSelector, useDispatch} from "react-redux"
import { fetchRadicals } from "../redux/slices/characterSlice";

const drawerWidth = 240;

const DashboardLeftSidebar = () => {
  const radical = useSelector((state) => state.character);
  const {radicalList, radicalLoading} = radical;
  console.log("radicalList: ", radicalList)
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const fetchRadical = async () => {
      const response = await axios.get(
        "http://ccdb.hemiola.com/characters/radicals"
      );
      dispatch(fetchRadicals(response.data));
    };
    fetchRadical();
  },[]);


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
      <Toolbar />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />

    </Drawer>
  );
};

export default DashboardLeftSidebar;
