import React from "react";
import "./style.scss";
import {
  BarChart,
  Bar,
  Label,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "August",
    expense: 4000,
  },
  {
    name: "September",
    expense: 3000,
  },
  {
    name: "October",
    expense: 2000,
  },
  {
    name: "November",
    expense: 2780,
  },
  {
    name: "December",
    expense: 1890,
  },
];

function BarPieChart() {
  return (
    <div className="barchart">
      <BarChart width={800} height={250} data={data} barSize={50}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="expense" />
        <Tooltip />
        <Legend />
        <Bar dataKey="expense" fill="#ffff">
          <LabelList dataKey="expense" position="top" fill="white" />
        </Bar>
        {/* <Bar dataKey="expense" fill="#ffff" label={{ fill: "black" }} /> */}
      </BarChart>
    </div>
  );
}

export default BarPieChart;
