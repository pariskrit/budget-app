import React, { useState } from "react";
import "./style.scss";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineUser, AiOutlineCaretDown } from "react-icons/ai";
import Button from "../Button";
import Modal from "../Modal";
import { useModal } from "../../hooks/useModal";

function Topbar() {
  const { openModal, handleModalOpenClose } = useModal();

  return (
    <div className="topbar">
      <div>
        <p className="topbar_name">Hi Pariskrit,</p>
        <strong className="topbar_greet">Welcome Back</strong>
        <p className="topbar_date">1 July,2021</p>
      </div>
      <Button type="button" onClick={handleModalOpenClose}>
        Add Transaction
      </Button>
      <div className="topbar_rightside">
        <IoNotificationsOutline className="icon" />
        <div className="topbar_userdetail">
          <AiOutlineUser className="icon" />
          <div className="topbar_rightside_right">
            <p>Pariskrit</p>
            <p className="topbar_date">User</p>
          </div>
          <AiOutlineCaretDown />
        </div>
      </div>
      <Modal open={openModal} close={handleModalOpenClose} />
    </div>
  );
}

export default Topbar;
