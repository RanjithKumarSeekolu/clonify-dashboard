import React from "react";
import InstalledApps from "./InstalledAppsTable.jsx";
import Info from "./Info.jsx";
import PerformanceGraph from "./PerformanceGraph.jsx";
import Cards from "./Cards.jsx";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <Info />
      <Cards />
      <PerformanceGraph />
      <InstalledApps />
    </div>
  );
};

export default Dashboard;
