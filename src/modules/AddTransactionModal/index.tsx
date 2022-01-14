import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { months } from "../../constants";
import { TransactionContext } from "../../context/TransactionContextProvider";
import { useMutateTransaction } from "../../hooks/useMutateTransaction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import { formatDate } from "../../helpers";

const defaultTransactionDetail = {
  date: "",
  description: "",
  amount: 0,
};

function AddTransactionModal() {
  const { state, dispatch } = useContext(TransactionContext);
  const [transactionDetail, setTransactionDetail] = useState(
    defaultTransactionDetail
  );
  let inputRef = useRef<HTMLInputElement>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const mutation = useMutateTransaction(() => onClose());

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

    const updatedMonthlyExpense = [
      ...state.monthlyExpenses.map((monthlyExpense) =>
        monthlyExpense.month === months[new Date().getMonth()]
          ? {
              ...monthlyExpense,
              amount: monthlyExpense.amount + +transactionDetail.amount,
            }
          : monthlyExpense
      ),
    ];
    mutation.mutate({
      income: state.income,
      monthlyExpenses: updatedMonthlyExpense,
      transactions: [
        {
          ...transactionDetail,
          id: Date.now(),
          date: formatDate(selectedDate),
        },
        ...state.transactions,
      ],
    });
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
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
        />
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
