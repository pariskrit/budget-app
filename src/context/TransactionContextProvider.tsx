import React, { createContext, useReducer } from "react";
import {
  actionType,
  defaultReducerState,
  reducer,
  reducerStateInterface,
} from "./reducer";

interface transactionContextInterface {
  state: reducerStateInterface;
  dispatch: React.Dispatch<actionType>;
}

const defaultContextValue: transactionContextInterface = {
  state: defaultReducerState,
  dispatch: () => {},
};

export const TransactionContext =
  createContext<transactionContextInterface>(defaultContextValue);

function TransactionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, defaultReducerState);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionContextProvider;
