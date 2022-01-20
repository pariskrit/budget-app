import React, { useContext, useEffect, useRef, useState } from "react";
import "./style.scss";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineUser, AiOutlineCaretDown } from "react-icons/ai";
import Button from "../Button";
import { TransactionContext } from "../../context/TransactionContextProvider";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const { state, dispatch } = useContext(TransactionContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const logoutRef = useRef<HTMLDivElement>(null);

  const toggleLogoutDropdown = () => setShowDropdown(true);

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("id");
        navigate("/login", { replace: true });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const logoutOpenBlock = document.querySelector(".topbar_rightside_right");
    document.addEventListener("click", (e) => {
      if (!logoutRef.current) {
        return;
      }
      if (
        !logoutRef.current!.contains(e.target as Node) &&
        !logoutOpenBlock?.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    });
  }, []);

  return (
    <div className="topbar">
      <div>
        <p className="topbar_name">Hi Pariskrit,</p>
        <strong className="topbar_greet">Welcome Back</strong>
        <p className="topbar_date">1 July,2021</p>
      </div>
      <Button
        type="button"
        onClick={() => dispatch({ type: "TOGGLE_ADD_MODAL" })}
      >
        Add Transaction
      </Button>
      <Button
        type="button"
        onClick={() => dispatch({ type: "TOGGLE_INCOME_MODAL" })}
      >
        Add Income
      </Button>
      <div className="topbar_rightside">
        <IoNotificationsOutline className="icon" />
        <div className="topbar_userdetail">
          <AiOutlineUser className="icon" />
          <div
            className="topbar_rightside_right"
            onClick={toggleLogoutDropdown}
          >
            <div>
              <p>Pariskrit</p>
              <p className="topbar_date">User</p>
            </div>
            <AiOutlineCaretDown />
          </div>
        </div>
      </div>
      {showDropdown && (
        <div className="logout_dropdown" ref={logoutRef} onClick={onLogout}>
          <ul>
            <li>Log out</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Topbar;
