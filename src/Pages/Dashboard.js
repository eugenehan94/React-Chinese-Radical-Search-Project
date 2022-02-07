import React from "react";
import DashboardLeftSidebar from "../components/DashboardLeftSidebar";
import DashboardAppBar from "../components/DashboardAppBar";

// Use redux toolkit
// please axios fetch here to get info early and pass down as props

const Dashboard = () => {
  return (
    <>
      <DashboardAppBar />
      <DashboardLeftSidebar />
    </>
  );
};

export default Dashboard;
