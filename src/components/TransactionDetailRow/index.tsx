import React from "react";
import { addCommaInNumbers, formatLongDescriptions } from "../../helpers";
import { transactionInterface } from "../../modules/AllTransactions";
import "./style.scss";

interface transactionDetailInterface {
  transaction: transactionInterface;
  showAllTransactions: boolean;
  onClick: (transaction: transactionInterface) => void;
}
function TransactionDetailRow({
  transaction,
  showAllTransactions,
  onClick,
}: transactionDetailInterface) {
  const { description, date, amount } = transaction;
  const formattedDescription = showAllTransactions
    ? description
    : formatLongDescriptions(description);

  return (
    <div className="transactiondetailrow " onClick={() => onClick(transaction)}>
      <span>&#8226;</span>
      <div className="transactiondetailrow_detail transactiondetailrow-skeleton">
        <div className="transactiondetailrow_transactiondetail ">
          <strong>{formattedDescription}</strong>

          <p>{date}</p>
        </div>
        <p>-{addCommaInNumbers(amount)}.00</p>
      </div>
    </div>
  );
}

export default TransactionDetailRow;
