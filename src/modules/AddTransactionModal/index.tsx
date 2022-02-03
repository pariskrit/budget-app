import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { months } from "../../constants";
import { TransactionContext } from "../../context/TransactionContextProvider";
import { useMutateTransaction } from "../../hooks/useMutateTransaction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import { currentUserId, formatDate } from "../../helpers";

const defaultTransactionDetail = {
  date: "",
  description: "",
  amount: 0,
  type: "",
};

const defaultMonthlyExpense = [
  ...months.map((month) => ({ month, amount: 0 })),
];

const defaultDate = new Date();

function AddTransactionModal() {
  const { state, dispatch } = useContext(TransactionContext);
  const [transactionDetail, setTransactionDetail] = useState(
    defaultTransactionDetail
  );
  let inputRef = useRef<HTMLInputElement>(null);
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const mutation = useMutateTransaction(() => onClose());

  const onClose = () => {
    setTransactionDetail(defaultTransactionDetail);
    setSelectedDate(defaultDate);

    dispatch({ type: "TOGGLE_ADD_MODAL" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) =>
    setTransactionDetail({
      ...transactionDetail,
      [e.target.name]:
        e.target.type === "number" ? +e.target.value : e.target.value,
    });

  const handleAddClick = () => {
    const isDescriptionEmpty = transactionDetail.description === "";
    const isTypeEmpty = transactionDetail.type === "";
    const isAmountEmpty =
      transactionDetail.amount === 0 ||
      transactionDetail.amount.toString() === "";

    if (isDescriptionEmpty || isAmountEmpty || isTypeEmpty) {
      return;
    }

    const monthlyExpenses = state.monthlyExpenses.length
      ? state.monthlyExpenses
      : defaultMonthlyExpense;

    const updatedMonthlyExpense = [
      ...monthlyExpenses.map((monthlyExpense) =>
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
      transactions: [...state.transactions],
      transactionsList: [
        ...state.transactionsList.map((transaction) =>
          transaction.month === months[selectedDate.getMonth()]
            ? {
                ...transaction,
                transactions: [
                  {
                    ...transactionDetail,
                    id: Date.now(),
                    date: formatDate(selectedDate),
                  },
                  ...transaction.transactions,
                ],
              }
            : transaction
        ),
      ],

      id: currentUserId()!,
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
          <strong>Type:</strong>
        </label>
        <br />
        <select
          name="type"
          value={transactionDetail.type}
          onChange={handleInputChange}
        >
          <option value=""></option>
          <option value="personal">Personal</option>
          <option value="home">Home</option>
        </select>
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
          placeholder="0"
          name="amount"
          value={transactionDetail.amount || ""}
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
