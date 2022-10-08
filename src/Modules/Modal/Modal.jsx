import React, { useState } from "react";
import "./Modal.scss";

const Modal = ({ modal, setModal, type }) => {
  if (modal) {
    let timeout = setTimeout(() => {
      clearTimeout(timeout);
      setModal(!modal);
    }, 1000);
  }

  const returnModalContent = () => {
    switch (type) {
      case "addToCart":
        return "주문이 완료되었습니다";
      case "payAtTheCounter":
        return "카운터에서 직접 결제하시면 됩니다";
      default:
        break;
    }
  };
  return (
    <>
      <div className="Modal">
        <div className="content">{returnModalContent()}</div>
      </div>
    </>
  );
};

export default Modal;
