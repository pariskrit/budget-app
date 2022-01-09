import React from "react";
import BalanceIncomeExpense from "../../modules/BalanceIncomeExpense";
import BarPieChart from "../../modules/BarPieChart";
import LatestTransactions from "../../modules/LatestTransactions";
import "./style.scss";

function Overview() {
  return (
    <div className="container">
      <BalanceIncomeExpense />
      <LatestTransactions />
      <BarPieChart />
    </div>
  );
}

export default Overview;
