import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import DashboardLeftSidebar from "../components/DashboardLeftSidebar";
import DashboardAppBar from "../components/DashboardAppBar";
import DashboardContent from "../components/DashboardContent";

import Typography from "@mui/material/Typography";
// Use redux toolkit
// please axios fetch here to get info early and pass down as props
import { useSelector, useDispatch } from "react-redux";
import { fetchRadicals } from "../redux/slices/characterSlice";
import axios from "axios";
const Dashboard = () => {
  const radical = useSelector((state) => state.character);
  const { radicalLoading } = radical;
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
  }, [dispatch]);

  if (radicalLoading) {
    return <></>;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <DashboardAppBar />
      <DashboardLeftSidebar />
      <DashboardContent/>
    </Box>
  );
};

export default Dashboard;

// --------------------------------------------------------------------------------------

// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// const drawerWidth = 300;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       marginLeft: 10,
//       // Run this segment only when open is true
//       color: "red"
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   RandomNameWorksHere: (prop) => prop !== "open",
// })(({ open }) => ({
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     color:"red"
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

// const Dashboard = () => {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: "none" }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Persistent drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {" "}
//             HEAD HERE
//             {theme.direction === "ltr" ? (
//               <ChevronLeftIcon />
//             ) : (
//               <ChevronRightIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         {/* <List>Was here</List> */}
//       </Drawer>
//       <Main open={open}>
//         <DrawerHeader />
//         <Typography paragraph>Lorem ipsum dolor sit amet,</Typography>
//       </Main>
//     </Box>
//   );
// };
// export default Dashboard;
