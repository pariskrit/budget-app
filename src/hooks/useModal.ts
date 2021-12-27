import React from "react";

export const useModal = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleModalOpenClose = (e: any) => {
    if (e.target.className.split(" ")[0] === "modal_background")
      setOpenModal(false);

    if (!openModal) {
      setOpenModal(true);
    }
  };

  return { openModal, handleModalOpenClose };
};
