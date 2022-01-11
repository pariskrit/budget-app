import React, { useContext } from "react";
import Siderbar from "../Sidebar";
import Topbar from "../../components/Topbar";
import "./style.scss";
import AddModal from "../AddTransactionModal";
import AddIncomeModal from "../AddIncomeModal";
import loader from "../../assets/loader.gif";
import { fetchTransactions } from "../../api/transactions";
import { useQuery } from "react-query";
import { TransactionContext } from "../../context/TransactionContextProvider";
import { transactionInterface } from "../AllTransactions";
import { Outlet } from "react-router-dom";

function Layout() {
  const { isLoading, isFetching } = useQuery(
    "transactions",
    fetchTransactions,
    {
      onSuccess: (data: {
        transactions: transactionInterface[];
        monthlyExpenses: any[];
      }) => onSuccess(data),
    }
  );
  const { state, dispatch } = useContext(TransactionContext);

  const onSuccess = (data: {
    transactions: transactionInterface[];
    monthlyExpenses: any[];
  }) => {
    dispatch({
      type: "SET_TRANSACTIONS",
      payload: {
        monthlyExpenses: data.monthlyExpenses,
        transactions: data.transactions,
      },
    });
  };

  if (isLoading) {
    return (
      <div className="loader">
        <img src={loader} alt="loader" />
      </div>
    );
  }
  return (
    <div className="layout">
      <Siderbar />
      <div className="right_container">
        <Topbar />
        <Outlet />
      </div>
      <AddModal />
      <AddIncomeModal />
    </div>
  );
}

export default Layout;
