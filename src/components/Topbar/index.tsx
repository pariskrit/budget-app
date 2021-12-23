import React from "react";
import "./style.scss";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineUser, AiOutlineCaretDown } from "react-icons/ai";

function Topbar() {
  return (
    <div className="topbar">
      <div>
        <p className="topbar_name">Hi Pariskrit,</p>
        <strong className="topbar_greet">Welcome Back</strong>
        <p className="topbar_date">1 July,2021</p>
      </div>
      <div className="topbar_rightside">
        <IoNotificationsOutline className="icon" />
        <AiOutlineUser className="icon" />
        <div className="topbar_rightside_right">
          <p>Pariskrit</p>
          <p className="topbar_date">User</p>
        </div>
        <AiOutlineCaretDown />
      </div>
    </div>
  );
}

export default Topbar;
