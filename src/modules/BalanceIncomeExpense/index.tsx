import React, { useContext } from "react";
import "./style.scss";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import IconWithTexts from "../../components/IconWithTexts";
import { TransactionContext } from "../../context/TransactionContextProvider";

function BalanceIncomeExpense() {
  const { state, dispatch } = useContext(TransactionContext);

  return (
    <div className="balanceincomeexpense">
      <div className="balanceincomeexpense_top">
        <h1>July</h1>
        <IconWithTexts
          Icon={GiPayMoney}
          primaryText="Balance"
          secondaryText={`Rs ${state.totalIncome - state.expense}`}
          showIcon={false}
        />
      </div>
      <div className="balanceincomeexpense_bottom">
        <IconWithTexts
          Icon={GiPayMoney}
          primaryText="Expense"
          secondaryText={`Rs ${state.expense}`}
        />
        <IconWithTexts
          Icon={GiReceiveMoney}
          primaryText="Income"
          secondaryText={`Rs ${state.totalIncome}`}
        />
      </div>
    </div>
  );
}

export default BalanceIncomeExpense;
