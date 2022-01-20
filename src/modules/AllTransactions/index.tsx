import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoData from "../../components/NoData";
import TransactionDetailRow from "../../components/TransactionDetailRow";
import { TransactionContext } from "../../context/TransactionContextProvider";
import TransactionDetailModal from "../TransactionDetailModal";
import "./style.scss";

export interface transactionInterface {
  id: number;
  description: string;
  date: string;
  amount: number;
  type: string;
}

function AllTransactions({
  title,
  showAllTransactions,
}: {
  title: string;
  showAllTransactions: boolean;
}) {
  const { state, dispatch } = useContext(TransactionContext);
  let navigate = useNavigate();
  const [selectedTransaction, setSelectedTransaction] =
    useState<transactionInterface>({
      id: 0,
      description: "",
      date: "",
      amount: 0,
      type: "",
    });

  const handleTransactionRowClick = (transaction: transactionInterface) => {
    dispatch({ type: "TOGGLE_DETAIL_MODAL" });
    setSelectedTransaction(transaction);
  };

  const goToTransactionsPage = () => navigate("/transactions");

  const transactions = showAllTransactions
    ? state.transactions
    : state.transactions.slice(0, 3);

  return (
    <>
      <TransactionDetailModal transaction={selectedTransaction} />
      <div className="latesttransactions">
        <div className="latesttransactions_headercontainer">
          <strong className="latesttransactions_header">{title}</strong>
          {!showAllTransactions ? (
            <p onClick={goToTransactionsPage}>view all</p>
          ) : null}
        </div>
        {!transactions.length ? <NoData title="Transactions" /> : null}
        {transactions.map((detail) => (
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

export default AllTransactions;
