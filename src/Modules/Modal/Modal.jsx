import React from "react";
import { modalWords } from "../../languages";
import "./Modal.scss";

const Modal = ({ modal, setModal, type, language }) => {
  if (modal) {
    let timeout = setTimeout(() => {
      clearTimeout(timeout);
      setModal(!modal);
    }, 1000);
  }

  const returnModalContent = () => {
    switch (type) {
      case "addToCart":
        return modalWords[0].language[language];
      case "payAtTheCounter":
        return modalWords[1].language[language];
      default:
        break;
    }
  };
  console.log(modalWords[0].language[language]);
  return (
    <>
      <div className="Modal">
        <div className="content">{returnModalContent()}</div>
      </div>
    </>
  );
};

export default Modal;
