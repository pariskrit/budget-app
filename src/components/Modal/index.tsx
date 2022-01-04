import React from "react";
import "./style.scss";

interface modalInterface {
  open: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
}
function Modal({ open, handleClose, title, children }: modalInterface) {
  const handleClickOutside = (e: React.SyntheticEvent) => {
    if ((e.target as Element).className.split(" ")[0] === "modal_background") {
      handleClose();
    }
  };

  return (
    <div
      className={`modal_background ${open ? "open" : ""}`}
      onClick={handleClickOutside}
    >
      <div className="modal_container">
        <div className="transactionModal_header">
          <h1>{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
