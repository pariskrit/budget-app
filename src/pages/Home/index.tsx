import React, { useEffect } from "react";
import Siderbar from "../../modules/Sidebar";
import Topbar from "../../components/Topbar";
import "./style.scss";
import HomeContainer from "../../modules/HomeContainer";
import AddModal from "../../modules/AddTransactionModal";
import AddIncomeModal from "../../modules/AddIncomeModal";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

function Home() {
  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = collection(db, "cities");
      console.log(transactions);
      await setDoc(doc(transactions, "SF"), {
        name: "San Francisco",
        state: "CA",
        country: "USA",
        capital: false,
        population: 860000,
        regions: ["west_coast", "norcal"],
      });
    };

    fetchTransactions();
  }, []);
  return (
    <div className="home home-skeleton">
      <Siderbar />
      <div className="right_container">
        <Topbar />
        <HomeContainer />
      </div>
      <AddModal />
      <AddIncomeModal />
    </div>
  );
}

export default Home;
