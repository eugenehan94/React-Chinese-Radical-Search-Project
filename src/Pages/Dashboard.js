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
  // console.log("radical reducer: ", radical)

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
