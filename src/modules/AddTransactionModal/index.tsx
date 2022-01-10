import React, { useContext, useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import { addTransaction } from "../../api/transactions";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { TransactionContext } from "../../context/TransactionContextProvider";
import "./style.scss";

const defaultTransactionDetail = {
  date: `${new Date().getDate()} January 2022`,
  description: "",
  amount: 0,
};

function AddTransactionModal() {
  const { state, dispatch } = useContext(TransactionContext);
  const mutation = useMutation(addTransaction, { onSuccess: () => onClose() });
  const [transactionDetail, setTransactionDetail] = useState(
    defaultTransactionDetail
  );
  let inputRef = useRef<HTMLInputElement>(null);

  const onClose = () => {
    setTransactionDetail(defaultTransactionDetail);

    dispatch({ type: "TOGGLE_ADD_MODAL" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTransactionDetail({
      ...transactionDetail,
      [e.target.name]:
        e.target.type === "number" ? +e.target.value : e.target.value,
    });

  const handleAddClick = () => {
    const isDescriptionEmpty = transactionDetail.description === "";
    const isAmountEmpty =
      transactionDetail.amount === 0 ||
      transactionDetail.amount.toString() === "";

    if (isDescriptionEmpty || isAmountEmpty) {
      return;
    }

    mutation.mutate([
      { ...transactionDetail, id: Date.now() },
      ...state.transactions,
    ]);
  };

  useEffect(() => {
    if (inputRef.current && state.showAddModal) {
      inputRef.current.focus();
    }
  }, [state.showAddModal]);

  return (
    <Modal
      open={state.showAddModal}
      handleClose={onClose}
      title="Add Transaction"
    >
      <div className="fieldsContainer">
        <label>
          <strong>Date:</strong>
        </label>
        <br />
        <span>{`${new Date().getDate()} January 2022`}</span>
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
          value={transactionDetail.description}
          onChange={handleInputChange}
          ref={inputRef}
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
          value={transactionDetail.amount}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Button type="button" onClick={handleAddClick}>
          {mutation.isLoading ? "Loading..." : "Add"}
        </Button>
      </div>
    </Modal>
  );
}

export default AddTransactionModal;
