import React from "react";
import Siderbar from "../../modules/Sidebar";
import Topbar from "../../components/Topbar";
import "./style.scss";
import HomeContainer from "../../modules/HomeContainer";
import TransactionContextProvider from "../../context/TransactionContextProvider";
import AddModal from "../../modules/AddTransactionModal";
import TransactionDetailModal from "../../modules/TransactionDetailModal";

function Home() {
  return (
    <TransactionContextProvider>
      <div className="home">
        <Siderbar />
        <div className="right_container">
          <Topbar />
          <HomeContainer />
        </div>
        <AddModal />
        <TransactionDetailModal />
      </div>
    </TransactionContextProvider>
  );
}

export default Home;
