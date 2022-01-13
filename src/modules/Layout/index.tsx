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
import { Outlet } from "react-router-dom";
import { responseDataInterface } from "../../context/reducer";

function Layout() {
  const { isLoading, isFetching } = useQuery(
    "transactions",
    fetchTransactions,
    {
      onSuccess: (data: responseDataInterface) => onSuccess(data),
    }
  );
  const { state, dispatch } = useContext(TransactionContext);

  const onSuccess = (data: responseDataInterface) => {
    dispatch({
      type: "SET_TRANSACTIONS",
      payload: {
        monthlyExpenses: data.monthlyExpenses,
        transactions: data.transactions,
        income: data.income,
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
