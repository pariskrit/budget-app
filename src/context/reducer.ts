import { transactionInterface } from "../modules/LatestTransactions";

export interface reducerStateInterface {
  showAddModal: boolean;
  showDetailModal: boolean;
  showIncomeModal: boolean;
  transactions: transactionInterface[];
  totalIncome: number;
  expense: number;
}

export const defaultReducerState = {
  showAddModal: false,
  showDetailModal: false,
  showIncomeModal: false,
  transactions: [
    { id: 1, description: "Recharge", date: "july 7, 2021", amount: 50 },
    { id: 3, description: "Chicken", date: "july 7, 2021", amount: 100 },
    { id: 4, description: "Shoes", date: "july 7, 2021", amount: 800 },
  ],
  totalIncome: 0,
  expense: 950,
};

export type actionType =
  | { type: "TOGGLE_ADD_MODAL" }
  | { type: "TOGGLE_DETAIL_MODAL" }
  | { type: "TOGGLE_INCOME_MODAL" }
  | { type: "ADD_TRANSACTION"; payload: transactionInterface }
  | { type: "ADD_INCOME"; payload: number };

export const reducer = (state: reducerStateInterface, action: actionType) => {
  const { showAddModal, showDetailModal, showIncomeModal, transactions } =
    state;
  switch (action.type) {
    case "TOGGLE_ADD_MODAL":
      return { ...state, showAddModal: !showAddModal };

    case "TOGGLE_DETAIL_MODAL":
      return { ...state, showDetailModal: !showDetailModal };

    case "TOGGLE_INCOME_MODAL":
      return { ...state, showIncomeModal: !showIncomeModal };

    case "ADD_INCOME":
      return { ...state, totalIncome: action.payload };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...transactions],
        expense:
          state.transactions.reduce((acc, curr) => curr.amount + acc, 0) +
          action.payload.amount,
      };

    default:
      return state;
  }
};
