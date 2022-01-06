import React from "react";
import "./App.scss";
import TransactionContextProvider from "./context/TransactionContextProvider";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <TransactionContextProvider>
        <Home />
      </TransactionContextProvider>
    </div>
  );
}

export default App;
