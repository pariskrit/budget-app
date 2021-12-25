import React from "react";
import "./style.scss";

function TransactionDetailRow() {
  return (
    <div className="transactiondetailrow">
      <span>&#8226;</span>
      <div className="transactiondetailrow_detail">
        <div className="transactiondetailrow_transactiondetail">
          <strong>recharge</strong>
          <p>july 7, 2021</p>
        </div>
        <p>-50.00</p>
      </div>
    </div>
  );
}

export default TransactionDetailRow;
