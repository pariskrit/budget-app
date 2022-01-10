import React from "react";
import SidebarElement from "../../components/SidebarElement";
import { AiOutlineMenu } from "react-icons/ai";
import "./style.scss";
import { useLocation } from "react-router-dom";

function Siderbar() {
  const { pathname } = useLocation();
  return (
    <div className="sidebar">
      <div className="header">
        <h1>BUDGET TRACK</h1>
      </div>
      <div>
        <SidebarElement
          Icon={AiOutlineMenu}
          title="Overview"
          path="/overview"
          selected={pathname === "/overview" || pathname === "/"}
        />
        <SidebarElement
          Icon={AiOutlineMenu}
          title="Transactions"
          path="/transactions"
          selected={pathname === "/transactions"}
        />
        <SidebarElement
          Icon={AiOutlineMenu}
          title="Overview"
          path=""
          selected={pathname === "/settings"}
        />
      </div>
    </div>
  );
}

export default Siderbar;
