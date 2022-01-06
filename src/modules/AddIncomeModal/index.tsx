import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { TransactionContext } from "../../context/TransactionContextProvider";

function AddIncomeModal() {
  const { state, dispatch } = useContext(TransactionContext);
  const [income, setIncome] = useState<number | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  const closeModal = () => dispatch({ type: "TOGGLE_INCOME_MODAL" });
  const handleAddClick = () => {
    dispatch({ type: "ADD_INCOME", payload: income as number });
    setIncome(0);
    closeModal();
  };

  useEffect(() => {
    if (inputRef.current && state.showIncomeModal) {
      inputRef.current.focus();
    }
  }, [state.showIncomeModal]);

  return (
    <Modal
      open={state.showIncomeModal}
      handleClose={closeModal}
      title="Add Income"
    >
      <div className="fieldsContainer">
        <label>
          <strong>Month:</strong>
        </label>
        <br />
        <span>January</span>
      </div>
      <div className="fieldsContainer">
        <label>
          <strong>Amount:</strong>
        </label>
        <br />
        <input
          type="number"
          placeholder="0"
          name="description"
          value={income}
          onChange={(e) => setIncome(+e.target.value)}
          ref={inputRef}
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

export default AddIncomeModal;
