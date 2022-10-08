import React from "react";
import { useOutletContext } from "react-router-dom";
import "./Payment.scss";
import counter from "../../Images/counter.svg";
import kakaopay from "../../Images/kakaopay.png";
import tosspay from "../../Images/tosspay.png";
import creditcard from "../../Images/credit_card.svg";
import banktransfer from "../../Images/bank_transfer.svg";

const Payment = () => {
  const { orderedList, modal, setModal, setModalContent } = useOutletContext();

  // 주문 내역 리턴하는 함수
  const returnOrderedList = (element) => {
    return (
      <div className="row" key={element.id}>
        <div className="menu">{element.name}</div>
        <div className="count">{element.count}</div>
        <div className="price">$ {element.price}</div>
        <div className="totalPrice">
          $ {parseInt(element.count) * parseInt(element.price)}
        </div>
      </div>
    );
  };

  // 총액 구하는 함수
  const getTotalPrice = () => {
    let sum = 0;
    for (let x of orderedList) {
      sum += x.price * x.count;
    }
    return sum;
  };

  // 카운터에서 결제하기 클릭
  const onClickPayAtTheCounter = () => {
    setModalContent("payAtTheCounter");
    setModal(!modal);
  };

  return (
    <>
      <div className="Payment">
        <div className="top">
          <div className="table">
            <div className="row" id="thead">
              <div className="menu">메뉴</div>
              <div className="count">수량</div>
              <div className="price">가격</div>
              <div className="totalPrice">합계</div>
            </div>
            {Array.isArray(orderedList) && orderedList.length === 0
              ? "주문한 내역이 없습니다"
              : orderedList.map((a, i) => {
                  return returnOrderedList(a);
                })}
          </div>
          <div className="sum">Total Price : $ {getTotalPrice()}</div>
        </div>
        <div className="bottom">
          <div id="counter">
            <img src={counter} alt="counter" onClick={onClickPayAtTheCounter} />
            카운터 직접 결제
          </div>
          <div id="kakao">
            <img src={kakaopay} alt="kakao" />
            카카오 간편결제
          </div>
          <div id="toss">
            <img src={tosspay} alt="toss" />
            토스 간편결제
          </div>
          <div id="card">
            <img src={creditcard} alt="card" />
            카드결제
          </div>
          <div id="transfer">
            <img src={banktransfer} alt="transfer" />
            실시간 계좌이체
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
