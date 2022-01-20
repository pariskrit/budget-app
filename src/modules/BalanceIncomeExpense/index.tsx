import React, { useContext } from "react";
import "./style.scss";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import IconWithTexts from "../../components/IconWithTexts";
import { TransactionContext } from "../../context/TransactionContextProvider";
import { months } from "../../constants";
import { addCommaInNumbers } from "../../helpers";

const currentMonth = months[new Date().getMonth()];

function BalanceIncomeExpense() {
  const { state, dispatch } = useContext(TransactionContext);

  const totalIncome = addCommaInNumbers(state.income);
  const totalExpense = addCommaInNumbers(state.expense);

  const balance = addCommaInNumbers(state.income - state.expense);

  return (
    <div className="balanceincomeexpense">
      <div className="balanceincomeexpense_top">
        <h1>{currentMonth}</h1>
        <IconWithTexts
          Icon={GiPayMoney}
          primaryText="Balance"
          secondaryText={`Rs ${balance}`}
          showIcon={false}
        />
      </div>
      <div className="balanceincomeexpense_bottom">
        <IconWithTexts
          Icon={GiPayMoney}
          primaryText="Expense"
          secondaryText={`Rs ${totalExpense}`}
        />
        <IconWithTexts
          Icon={GiReceiveMoney}
          primaryText="Income"
          secondaryText={`Rs ${totalIncome}`}
        />
      </div>
    </div>
  );
}

export default BalanceIncomeExpense;
