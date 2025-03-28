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

function BarChart({ title, dataPoints, labels, keyLabel }) {
  // Sample data for the bar graph
  const data = {
    labels: labels,
    datasets: [
      {
        label: keyLabel,
        data: dataPoints,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
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
    <div className="flex items-center justify-center w-full h-2/3 bg-gray-300">
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
