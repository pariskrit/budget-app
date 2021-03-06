import React, { useContext } from "react";
import "./style.scss";
import {
  BarChart,
  Bar,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { TransactionContext } from "../../context/TransactionContextProvider";
import NoData from "../../components/NoData";

const currentMonthIndex = new Date().getMonth();

function BarPieChart() {
  const { state, dispatch } = useContext(TransactionContext);

  const barData = state.monthlyExpenses.slice(
    currentMonthIndex,
    currentMonthIndex + 6
  );

  return (
    <div className="barchart">
      {barData.some((data) => data.amount) ? (
        <BarChart
          width={800}
          height={250}
          data={barData}
          margin={{
            top: 18,
            right: 30,
            left: 30,
            bottom: 1,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#ffff">
            <LabelList dataKey="amount" position="top" fill="white" />
          </Bar>
        </BarChart>
      ) : (
        <NoData title="Data" fontSize={70} />
      )}
    </div>
  );
}

export default BarPieChart;
