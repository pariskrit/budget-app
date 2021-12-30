import { transactionInterface } from "../modules/LatestTransactions";

export interface reducerStateInterface {
  showAddModal: boolean;
  showDetailModal: boolean;
  transactions: transactionInterface[];
  totalIncome: number;
  expense: number;
}

export const defaultReducerState = {
  showAddModal: false,
  showDetailModal: false,
  transactions: [
    { id: 1, description: "Recharge", date: "july 7, 2021", amount: 50 },
    { id: 3, description: "Chicken", date: "july 7, 2021", amount: 100 },
    { id: 4, description: "Shoes", date: "july 7, 2021", amount: 800 },
  ],
  totalIncome: 10000,
  expense: 1000,
};

export type actionType =
  | { type: "TOGGLE_ADD_MODAL" }
  | { type: "TOGGLE_DETAIL_MODAL" }
  | { type: "ADD_TRANSACTION"; payload: transactionInterface };

export const reducer = (state: reducerStateInterface, action: actionType) => {
  const { showAddModal, showDetailModal, transactions } = state;
  switch (action.type) {
    case "TOGGLE_ADD_MODAL":
      return { ...state, showAddModal: !showAddModal };

    case "TOGGLE_DETAIL_MODAL":
      return { ...state, showDetailModal: !showDetailModal };

    case "ADD_TRANSACTION":
      return { ...state, transactions: [action.payload, ...transactions] };
    default:
      return state;
  }
};
