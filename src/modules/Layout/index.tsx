import React, { useContext, useEffect } from "react";
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
  const { isLoading, data, isFetching } = useQuery(
    "transactions",
    fetchTransactions
  );
  const { state, dispatch } = useContext(TransactionContext);

  useEffect(() => {
    if (data) {
      const response = data as { transactions: transactionInterface[] };
      dispatch({ type: "SET_TRANSACTIONS", payload: response.transactions });
    }
  }, [data, dispatch]);
  console.log(isLoading, isFetching);
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
