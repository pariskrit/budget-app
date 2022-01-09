import React from "react";
import { transactionInterface } from "../../modules/LatestTransactions";
import "./style.scss";

interface transactionDetailInterface {
  transaction: transactionInterface;
  onClick: (transaction: transactionInterface) => void;
}
function TransactionDetailRow({
  transaction,
  onClick,
}: transactionDetailInterface) {
  const { description, date, amount } = transaction;
  return (
    <div className="transactiondetailrow " onClick={() => onClick(transaction)}>
      <span>&#8226;</span>
      <div className="transactiondetailrow_detail transactiondetailrow-skeleton">
        <div className="transactiondetailrow_transactiondetail ">
          <strong>{description}</strong>

          <p>{date}</p>
        </div>
        <p>-{amount}.00</p>
      </div>
    </div>
  );
}

export default TransactionDetailRow;
