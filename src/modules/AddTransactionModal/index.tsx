import React, { useContext, useState } from "react";
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
  const [transactionDetail, setTransactionDetail] = useState(
    defaultTransactionDetail
  );

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
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { ...transactionDetail, id: Date.now() },
    });
    setTransactionDetail(defaultTransactionDetail);
    onClose();
  };
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
          Add
        </Button>
      </div>
    </Modal>
  );
}

export default AddTransactionModal;
