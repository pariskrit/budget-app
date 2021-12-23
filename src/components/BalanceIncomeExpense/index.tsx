import React from "react";
import "./style.scss";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import IconData from "../IconData";

function BalanceIncomeExpense() {
  return (
    <div className="balanceincomeexpense">
      <div className="balanceincomeexpense_top">
        <h1>July</h1>
        <div>
          <p className="balance">Balance</p>
          <p className="amount">Rs 18000</p>
        </div>
      </div>
      <div className="balanceincomeexpense_bottom">
        <IconData
          Icon={GiPayMoney}
          primaryText="Expense"
          secondaryText="Rs 2000"
        />
        <IconData
          Icon={GiReceiveMoney}
          primaryText="Income"
          secondaryText="Rs 20000"
        />
      </div>
    </div>
  );
}

export default BalanceIncomeExpense;
