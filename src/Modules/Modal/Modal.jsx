import React, { useState } from "react";
import "./Modal.scss";

const Modal = ({ modal, setModal }) => {
  if (modal) {
    let timeout = setTimeout(() => {
      clearTimeout(timeout);
      setModal(!modal);
    }, 1000);
  }
  return (
    <>
      <div className="Modal">
        <div className="content">Your order has been made</div>
      </div>
    </>
  );
};

export default Modal;
