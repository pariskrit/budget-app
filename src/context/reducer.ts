import { transactionInterface } from "../modules/AllTransactions";

export interface responseDataInterface {
  transactionsList: { month: string; transactions: transactionInterface[] }[];
  transactions: transactionInterface[];
  income: number;
  monthlyExpenses: any[];
}
export interface reducerStateInterface extends responseDataInterface {
  showAddModal: boolean;
  showDetailModal: boolean;
  showIncomeModal: boolean;
  expense: number;
}

export const defaultReducerState = {
  showAddModal: false,
  showDetailModal: false,
  showIncomeModal: false,
  transactions: [],
  transactionsList: [],
  monthlyExpenses: [],
  income: 0,
  expense: 0,
};

export type actionType =
  | { type: "TOGGLE_ADD_MODAL" }
  | { type: "TOGGLE_DETAIL_MODAL" }
  | { type: "TOGGLE_INCOME_MODAL" }
  | { type: "ADD_TRANSACTION"; payload: transactionInterface }
  | { type: "ADD_INCOME"; payload: number }
  | {
      type: "SET_TRANSACTIONS";
      payload: responseDataInterface;
    };

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
      return { ...state, income: action.payload };

    case "SET_TRANSACTIONS":
      return {
        ...state,
        income: action.payload.income,
        monthlyExpenses: action.payload.monthlyExpenses,
        transactions: action.payload.transactions,
        transactionsList: action.payload.transactionsList,
        expense: action.payload.transactions.reduce(
          (acc, curr) => curr.amount + acc,
          0
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...transactions],
        expense: state.expense + action.payload.amount,
      };

    default:
      return state;
  }
};
