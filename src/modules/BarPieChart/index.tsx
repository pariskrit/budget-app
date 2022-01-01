import React, { useContext, useEffect, useState } from "react";
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
import { TransactionContext } from "../../context/TransactionContextProvider";

const data = [
  {
    name: "August",
    expense: 0,
  },
  {
    name: "September",
    expense: 0,
  },
  {
    name: "October",
    expense: 0,
  },
  {
    name: "November",
    expense: 0,
  },
  {
    name: "December",
    expense: 950,
  },
];

function BarPieChart() {
  const [monthlyExpenses, setMonthlyExpenses] = useState(data);
  const { state, dispatch } = useContext(TransactionContext);

  useEffect(() => {
    console.log("bar chart");
    const tempExpenses = [...monthlyExpenses];
    tempExpenses[monthlyExpenses.length - 1].expense = state.expense;
    setMonthlyExpenses(tempExpenses);
  }, [state.expense]);
  console.log(monthlyExpenses);
  return (
    <div className="barchart">
      <BarChart width={800} height={250} data={monthlyExpenses} barSize={50}>
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
