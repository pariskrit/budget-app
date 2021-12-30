import React, { useContext } from "react";
import Modal from "../../components/Modal";
import { TransactionContext } from "../../context/TransactionContextProvider";

function TransactionDetailModal() {
  const { state, dispatch } = useContext(TransactionContext);
  return (
    <Modal
      open={state.showDetailModal}
      handleClose={() => dispatch({ type: "TOGGLE_DETAIL_MODAL" })}
    >
      <h1>Details Modal</h1>
    </Modal>
  );
}

export default TransactionDetailModal;
