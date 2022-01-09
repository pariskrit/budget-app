import React from "react";

import "./App.scss";
import Layout from "./modules/Layout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Overview from "./pages/Overview";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route
              path="transactions"
              element={
                <div>
                  <h1>Transactions</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
