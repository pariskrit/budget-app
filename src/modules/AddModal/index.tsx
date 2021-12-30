import React, { useContext } from "react";
import Modal from "../../components/Modal";
import { TransactionContext } from "../../context/TransactionContextProvider";

function AddModal() {
  const { state, dispatch } = useContext(TransactionContext);

  const onClose = () => {
    dispatch({ type: "TOGGLE_ADD_MODAL" });
  };
  return (
    <Modal open={state.showAddModal} handleClose={onClose}>
      <h1>Add Modal</h1>
    </Modal>
  );
}

export default AddModal;
