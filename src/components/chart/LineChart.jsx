import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register components from Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  // Corrected and simplified chart data
  const data = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Balance History',
        data: [150, 520, 350, 800, 200, 600, 700], // Your data points
        borderColor: 'blue',
        backgroundColor: 'rgba(128, 0, 128, 0.3)', // Purple color below the line (with some transparency)
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
        fill: true, // Ensure that the area below the line is filled
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
        labels: {
          usePointStyle: true, // Use point style for legend
        },
      },
      datalabels: {
        display: false, // This will hide data labels if you are using ChartDataLabels plugin
      },
    },
  };

  return (
    <div style={{ height: '250px', width: '100%' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
