import React from "react";
import BalanceIncomeExpense from "../../modules/BalanceIncomeExpense";
import BarPieChart from "../../modules/BarPieChart";
import AllTransactions from "../../modules/AllTransactions";
import "./style.scss";
import { getAuth } from "firebase/auth";

function Overview() {
  const auth = getAuth();
  console.log(auth);
  return (
    <div className="container">
      <BalanceIncomeExpense />
      <AllTransactions
        title="Latest Transactions"
        showAllTransactions={false}
      />
      <BarPieChart />
    </div>
  );
}

export default Overview;
