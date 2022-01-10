import React, { useContext } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { TransactionContext } from "../../context/TransactionContextProvider";
import { transactionInterface } from "../AllTransactions";
import "./style.scss";

type TransactionType = { transaction: transactionInterface | null };

function TransactionDetailModal({ transaction }: TransactionType) {
  const { state, dispatch } = useContext(TransactionContext);
  return (
    <Modal
      open={state.showDetailModal}
      handleClose={() => dispatch({ type: "TOGGLE_DETAIL_MODAL" })}
      title="Details"
    >
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
      <div>
        <Button type="button" onClick={() => {}}>
          Save
        </Button>
      </div>
    </Modal>
  );
}

export default TransactionDetailModal;
