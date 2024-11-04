import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyActivityChart = () => {
  // Data for the bar chart
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"], // Days of the week
    datasets: [
      {
        label: "Withdraw",
        data: [300, 250, 300, 450, 215, 320, 420], // Example data for Withdraw
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Black color with some transparency
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        label: "Deposit",
        data: [205, 110, 400, 150, 315, 175, 300], // Example data for Deposit
        backgroundColor: "rgba(59, 130, 246, 0.7)", // Blue color with some transparency
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Hides grid lines on the x-axis
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false, // Hides the border grid line
        },
      },
    },
    plugins: {
      legend: {
        position: "top", // Positions the legend at the top
        align: "end", // Aligns the legend to the top-right corner
        labels: {
          usePointStyle: true, // Use point style for legend
        },
      },
      datalabels: {
        display: false, // This will hide data labels if you are using ChartDataLabels plugin
      },
    },
    layout: {
      padding: {
        top: 20, // Adds extra padding to create space between the legend and the chart
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WeeklyActivityChart;
