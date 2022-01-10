import React from "react";
import AllTransactions from "../../modules/AllTransactions";
import "./style.scss";

function Transactions() {
  return (
    <div className="transactionspage">
      <AllTransactions title="Transactions" showAllTransactions />
    </div>
  );
}

export default Transactions;
