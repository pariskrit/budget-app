import React from "react";
import TransactionDetailRow from "../../components/TransactionDetailRow";
import "./style.scss";

function LatestTransactions() {
  return (
    <div className="latesttransactions">
      <div className="latesttransactions_headercontainer">
        <strong className="latesttransactions_header">
          Latest Transactions
        </strong>
        <p>view all</p>
      </div>
      <TransactionDetailRow />
      <TransactionDetailRow />
      <TransactionDetailRow />
    </div>
  );
}

export default LatestTransactions;
