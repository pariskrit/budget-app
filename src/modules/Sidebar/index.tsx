import React from "react";
import SidebarElement from "../../components/SidebarElement";
import { AiOutlineMenu } from "react-icons/ai";
import "./style.scss";

function Siderbar() {
  return (
    <div className="sidebar">
      <div className="header">
        <h1>BUDGET TRACK</h1>
      </div>
      <div>
        <SidebarElement Icon={AiOutlineMenu} title="Overview" selected />
        <SidebarElement Icon={AiOutlineMenu} title="Transactions" />
        <SidebarElement Icon={AiOutlineMenu} title="Overview" />
      </div>
    </div>
  );
}

export default Siderbar;
