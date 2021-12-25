import React from "react";
import BalanceIncomeExpense from "../BalanceIncomeExpense";
import BarPieChart from "../BarPieChart";
import LatestTransactions from "../LatestTransactions";
import "./style.scss";

function HomeContainer() {
  return (
    <div className="container">
      <BalanceIncomeExpense />
      <LatestTransactions />
      <BarPieChart />
    </div>
  );
}

export default HomeContainer;
