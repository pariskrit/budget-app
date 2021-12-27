import React from "react";
import "./style.scss";

interface modalPropType {
  open: boolean;
  close: (e: any) => void;
}
function Modal({ open, close }: modalPropType) {
  return (
    <div className={`modal_background ${open ? "open" : ""}`} onClick={close}>
      <div className="modal_container">
        <h1>Add Modal</h1>
      </div>
    </div>
  );
}

export default Modal;
