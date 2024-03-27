import React, { useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const PerformanceGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const gradientInstagram = ctx.createLinearGradient(0, 0, 0, 400);
      gradientInstagram.addColorStop(0, "rgba(255, 99, 132, 0.5)");
      gradientInstagram.addColorStop(1, "rgba(255, 99, 132, 0)");

      const gradientFacebook = ctx.createLinearGradient(0, 0, 0, 400);
      gradientFacebook.addColorStop(0, "rgba(54, 162, 235, 0.5)");
      gradientFacebook.addColorStop(1, "rgba(54, 162, 235, 0)");

      chart.data.datasets[0].backgroundColor = gradientInstagram;
      chart.data.datasets[1].backgroundColor = gradientFacebook;
      chart.update();
    }
  }, []);

  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Instagram",
        data: [65, 59, 80, 81, 56, 55, 65],
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.4,
      },
      {
        label: "Facebook",
        data: [28, 48, 40, 19, 86, 27, 72],
        fill: true,
        borderColor: "rgb(54, 162, 235)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 10px",
          }}
        >
          <Typography variant="h6" sx={{}}>
            Installed Apps
          </Typography>
          <IconButton aria-label="menu">
            <MoreVertIcon />
          </IconButton>
        </div>
        <Divider />
        <Line ref={chartRef} data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default PerformanceGraph;
