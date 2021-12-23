import React from "react";
import Siderbar from "../../modules/Sidebar";
import Topbar from "../../components/Topbar";
import "./style.scss";
import HomeContainer from "../../modules/HomeContainer";

function Home() {
  return (
    <div className="home">
      <Siderbar />
      <div className="right_container">
        <Topbar />
        <HomeContainer />
      </div>
    </div>
  );
}

export default Home;
