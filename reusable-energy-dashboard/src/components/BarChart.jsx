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

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ title, dataPoints, labels }) {
  const data = {
    labels: labels,
    datasets: dataPoints,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex items-center justify-center w-full h-2/3 rounded-lg">
      <div className="max-w-[800px] w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
        <div className="h-[400px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default BarChart;
