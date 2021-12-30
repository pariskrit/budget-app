import React, { useContext, useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { TransactionContext } from "../../context/TransactionContextProvider";
import "./style.scss";

const defaultTransactionDetail = {
  date: `${new Date().getDate()} December 2021`,
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
      [e.target.name]: e.target.value,
    });

  const handleAddClick = () => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { ...transactionDetail, id: Date.now() },
    });
    setTransactionDetail(defaultTransactionDetail);
    onClose();
  };
  console.log(transactionDetail);
  return (
    <Modal open={state.showAddModal} handleClose={onClose}>
      <div className="transactionModal_header">
        <h1>Add Transaction</h1>
      </div>
      <div className="fieldsContainer">
        <label>
          <strong>Date:</strong>
        </label>
        <br />
        <span>{`${new Date().getDate()} December 2021`}</span>
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
