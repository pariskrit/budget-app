import React from "react";
import "./style.scss";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["August", "September", "October", "November", "December"];

const data = {
  labels,
  datasets: [
    {
      label: "Money Spent",
      data: [1000, 10000, 30000],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      maxHeight: 100,
      maxWidth: 10,
    },
    title: {
      display: true,
      text: "Monthly Expenditure Bar Chart",
      color: "white",
    },
  },
};

function BarPieChart() {
  return (
    <div className="barchart">
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarPieChart;
