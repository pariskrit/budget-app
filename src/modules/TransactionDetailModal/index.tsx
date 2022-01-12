import React, { useContext } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { months } from "../../constants";
import { TransactionContext } from "../../context/TransactionContextProvider";
import { useMutateTransaction } from "../../hooks/useMutateTransaction";
import { transactionInterface } from "../AllTransactions";
import "./style.scss";

type TransactionType = { transaction: transactionInterface | null };

function TransactionDetailModal({ transaction }: TransactionType) {
  const { state, dispatch } = useContext(TransactionContext);
  const mutation = useMutateTransaction(() => onClose());

  const onDeleteTransaction = () => {
    const updatedMonthlyExpense = [
      ...state.monthlyExpenses.map((monthlyExpense) =>
        monthlyExpense.month === months[new Date().getMonth()]
          ? {
              ...monthlyExpense,
              amount: monthlyExpense.amount - +transaction!.amount,
            }
          : monthlyExpense
      ),
    ];
    mutation.mutate({
      monthlyExpenses: updatedMonthlyExpense,
      transactions: [
        ...state.transactions.filter(
          (oldTransaction) => oldTransaction.id !== transaction?.id
        ),
      ],
    });
  };

  const onClose = () => dispatch({ type: "TOGGLE_DETAIL_MODAL" });
  return (
    <Modal open={state.showDetailModal} handleClose={onClose} title="Details">
      <div className="fieldsContainer">
        <label>
          <strong>Date:</strong>
        </label>
        <br />
        <span>{transaction?.date}</span>
      </div>
      <div className="fieldsContainer">
        <label>
          <strong>Description:</strong>
        </label>
        <br />
        <input
          type="text"
          placeholder="description"
          name="description"
          value={transaction?.description}
          readOnly
        />
      </div>
      <div className="fieldsContainer">
        <label>
          <strong>Amount:</strong>
        </label>
        <br />
        <input
          type="number"
          placeholder="amount"
          name="amount"
          value={transaction?.amount}
          readOnly
        />
      </div>
      <div className="buttonsContainer">
        <Button type="button" onClick={() => {}}>
          Save
        </Button>
        <Button type="button" onClick={onDeleteTransaction} isDeleteButton>
          {mutation.isLoading ? "Loading..." : "Delete"}
        </Button>
      </div>
    </Modal>
  );
}

export default TransactionDetailModal;
