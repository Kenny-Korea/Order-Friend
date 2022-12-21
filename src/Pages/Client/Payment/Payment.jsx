import React from "react";
import { useOutletContext } from "react-router-dom";
import "./Payment.scss";
import counter from "../../../Images/counter.svg";
import kakaopay from "../../../Images/kakaopay.png";
import tosspay from "../../../Images/tosspay.png";
import creditcard from "../../../Images/credit_card.svg";
import banktransfer from "../../../Images/bank_transfer.svg";
import { paymentWords } from "../../../languages";

const Payment = () => {
  const { orderedList, modal, setModal, setModalContent, language } =
    useOutletContext();

  // --------------------------------아임포트 시작--------------------------------

  function onClickPayment(paymentInfo, itemInfo) {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp78005172");

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: paymentInfo[0], // PG사
      pay_method: paymentInfo[1], // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: getTotalPrice(), // 결제금액
      name: "아임포트 결제 데이터 분석", // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }
  // --------------------------------아임포트 끝--------------------------------

  // 주문 내역 리턴하는 함수
  const returnOrderedList = (element, idx) => {
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

  // 그외 다른 결제 수단 클릭
  const onClickPayAtTheTable = (e) => {
    let paymentInfo;
    switch (e.target.id) {
      case "kakao":
        paymentInfo = ["kakaopay.TC0ONETIME", "kakaopay"];
        break;
      case "toss":
        paymentInfo = ["tosspay.tosstest", "tosspay"];
        break;
      case "card":
        paymentInfo = ["html5_inicis.INIpayTest", "card"];
        break;
      case "transfer":
        paymentInfo = ["html5_inicis.INIpayTest", "trans"];
        break;
      default:
        break;
    }
    onClickPayment(paymentInfo);
  };

  return (
    <>
      <div className="Payment">
        <div className="top">
          <div className="table">
            <div className="row" id="thead">
              <div className="menu">{paymentWords[0].language[language]}</div>
              <div className="count">{paymentWords[1].language[language]}</div>
              <div className="price">{paymentWords[2].language[language]}</div>
              <div className="totalPrice">
                {paymentWords[3].language[language]}
              </div>
            </div>
            {Array.isArray(orderedList) && orderedList.length === 0
              ? paymentWords[4].language[language]
              : orderedList.map((a, i) => {
                  return returnOrderedList(a);
                })}
          </div>
          <div className="sum">
            {paymentWords[5].language[language]} : $ {getTotalPrice()}
          </div>
        </div>
        <div className="bottom">
          <div id="counter">
            <img src={counter} alt="counter" onClick={onClickPayAtTheCounter} />
            {paymentWords[6].language[language]}
          </div>
          <div id="kakao">
            <img
              src={kakaopay}
              alt="kakao"
              id="kakao"
              onClick={onClickPayAtTheTable}
            />
            {paymentWords[7].language[language]}{" "}
          </div>
          <div id="toss">
            <img
              src={tosspay}
              alt="toss"
              id="toss"
              onClick={onClickPayAtTheTable}
            />
            {paymentWords[8].language[language]}{" "}
          </div>
          <div id="card">
            <img
              src={creditcard}
              alt="card"
              id="card"
              onClick={onClickPayAtTheTable}
            />
            {paymentWords[9].language[language]}{" "}
          </div>
          <div id="transfer">
            <img
              src={banktransfer}
              alt="transfer"
              id="transfer"
              onClick={onClickPayAtTheTable}
            />
            {paymentWords[10].language[language]}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
