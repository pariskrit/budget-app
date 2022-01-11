import React, { useContext } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { TransactionContext } from "../../context/TransactionContextProvider";
import { useMutateTransaction } from "../../hooks/useMutateTransaction";
import { transactionInterface } from "../AllTransactions";
import "./style.scss";

type TransactionType = { transaction: transactionInterface | null };

function TransactionDetailModal({ transaction }: TransactionType) {
  const { state, dispatch } = useContext(TransactionContext);
  const mutation = useMutateTransaction(() => onClose());

  const onDeleteTransaction = () => {
    mutation.mutate({
      monthlyExpenses: [],
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
