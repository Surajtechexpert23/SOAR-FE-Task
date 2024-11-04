import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  // Data for the Pie Chart
  const data = {
    labels: ['20% Investment', '30% Entertainment', '15% Bill Expense', '35% Others'],
    datasets: [
      {
        data: [20, 30, 15, 35],
        backgroundColor: ['blue', 'gray', 'orange', 'black'],
        borderColor: ['blue', 'gray', 'orange', 'black'],
        borderWidth: 1,
      },
    ],
  };

  // Options for the Pie Chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend if not needed
      },
      datalabels: {
        anchor: 'center', // Place labels in the center of each slice
        align: 'center',  // Align labels to the center
        color: '#fff',    // Color of the labels
        font: {
          weight: 'bold',
          size: 14,
        },
        formatter: (value) => {
          // Return the label with percentage
          return `${value}%`;
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
