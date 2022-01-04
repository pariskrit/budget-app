import React, { useContext, useState } from "react";
import TransactionDetailRow from "../../components/TransactionDetailRow";
import { TransactionContext } from "../../context/TransactionContextProvider";
import TransactionDetailModal from "../TransactionDetailModal";
import "./style.scss";

export interface transactionInterface {
  id: number;
  description: string;
  date: string;
  amount: number;
}

function LatestTransactions() {
  const { state, dispatch } = useContext(TransactionContext);
  const [selectedTransaction, setSelectedTransaction] =
    useState<transactionInterface>({
      id: 0,
      description: "",
      date: "",
      amount: 0,
    });

  const handleTransactionRowClick = (transaction: transactionInterface) => {
    dispatch({ type: "TOGGLE_DETAIL_MODAL" });
    setSelectedTransaction(transaction);
  };

  return (
    <>
      <TransactionDetailModal transaction={selectedTransaction} />
      <div className="latesttransactions">
        <div className="latesttransactions_headercontainer">
          <strong className="latesttransactions_header">
            Latest Transactions
          </strong>
          <p>view all</p>
        </div>
        {state.transactions.slice(0, 3).map((detail) => (
          <TransactionDetailRow
            key={detail.id}
            transaction={detail}
            onClick={handleTransactionRowClick}
          />
        ))}
      </div>
    </>
  );
}

export default LatestTransactions;
