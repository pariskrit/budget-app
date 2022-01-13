import React, { useContext, useEffect, useState } from "react";
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
  const [transactionToEdit, setTransactionToEdit] =
    useState<transactionInterface | null>(null);
  const [disabled, setDisabled] = useState(true);

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
      income: state.income,
      monthlyExpenses: updatedMonthlyExpense,
      transactions: [
        ...state.transactions.filter(
          (oldTransaction) => oldTransaction.id !== transaction?.id
        ),
      ],
    });
  };

  const onUpdateTransaction = () =>
    mutation.mutate({
      income: state.income,
      monthlyExpenses: state.monthlyExpenses,
      transactions: [
        ...state.transactions.map((transaction) =>
          transaction.id === transactionToEdit?.id
            ? transactionToEdit
            : transaction
        ),
      ],
    });

  const onClose = () => dispatch({ type: "TOGGLE_DETAIL_MODAL" });

  const onInputChange = (e: React.ChangeEvent) => {
    setDisabled(false);
    setTransactionToEdit({
      ...transactionToEdit!,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  useEffect(() => {
    if (!disabled) {
      setDisabled(true);
    }
    if (Object.values(transaction!).length) {
      setTransactionToEdit(transaction);
    }
  }, [transaction]);

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
          value={transactionToEdit?.description}
          onChange={onInputChange}
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
          value={transactionToEdit?.amount}
          onChange={onInputChange}
        />
      </div>
      <div className="buttonsContainer">
        <Button type="button" onClick={onUpdateTransaction} disabled={disabled}>
          {mutation.isLoading ? "Loading..." : "Save"}
        </Button>
        <Button type="button" onClick={onDeleteTransaction} isDeleteButton>
          {mutation.isLoading ? "Loading..." : "Delete"}
        </Button>
      </div>
    </Modal>
  );
}

export default TransactionDetailModal;
