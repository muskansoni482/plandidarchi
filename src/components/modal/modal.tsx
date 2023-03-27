import { Modal } from "@mui/material";
import React from "react";

interface SimpleModalProps {
  isOpen: boolean;
  handleClose: any;
  children: React.ReactNode;
}

function SimpleModal({ isOpen, handleClose, children }: SimpleModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>{children}</div>
    </Modal>
  );
}

export default SimpleModal;
