import React from "react";
import SidebarElement from "../../components/SidebarElement";
import { AiOutlineMenu } from "react-icons/ai";
import "./style.scss";
import { useLocation } from "react-router-dom";
import title from "../../assets/title.png";

function Siderbar() {
  const { pathname } = useLocation();
  return (
    <div className="sidebar">
      <div className="header">
        <img src={title} alt="Budget Track" className="header_title" />
      </div>
      <div className="sidebar_elements">
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
      </div>
    </div>
  );
}

export default Siderbar;
