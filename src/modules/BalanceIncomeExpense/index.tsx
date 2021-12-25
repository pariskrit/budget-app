import React from "react";
import "./style.scss";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import IconWithTexts from "../../components/IconWithTexts";

function BalanceIncomeExpense() {
  return (
    <div className="balanceincomeexpense">
      <div className="balanceincomeexpense_top">
        <h1>July</h1>
        <IconWithTexts
          Icon={GiPayMoney}
          primaryText="Balance"
          secondaryText="Rs 18000"
          showIcon={false}
        />
      </div>
      <div className="balanceincomeexpense_bottom">
        <IconWithTexts
          Icon={GiPayMoney}
          primaryText="Expense"
          secondaryText="Rs 2000"
        />
        <IconWithTexts
          Icon={GiReceiveMoney}
          primaryText="Income"
          secondaryText="Rs 20000"
        />
      </div>
    </div>
  );
}

export default BalanceIncomeExpense;
