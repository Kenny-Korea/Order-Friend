import React from "react";
import { useRef } from "react";
import "./Count.scss";

const Count = ({ menuInfo, cart, setCart }) => {
  const numberRef = useRef();
  const onIncrease = () => {
    if (numberRef.current.value > 0) {
      numberRef.current.value++;
      let copy = [...cart];
      let index = cart.findIndex((a) => {
        return a.id === menuInfo[0];
      });
      copy[index].count++;
      setCart(copy);
    } else {
      numberRef.current.value++;
      let copy = [...cart];
      copy.push({
        id: menuInfo[0],
        name: menuInfo[1],
        count: numberRef.current.value,
        price: menuInfo[3],
      });
      console.log(menuInfo[3]);
      setCart(copy);
    }
  };
  const onDecrease = () => {
    if (numberRef.current.value > 1) {
      numberRef.current.value--;
      let copy = [...cart];
      let index = cart.findIndex((a) => {
        return a.id === menuInfo[0];
      });
      copy[index].count--;
      setCart(copy);
    } else if (numberRef.current.value == 1) {
      numberRef.current.value--;
      let copy = [...cart];
      let index = cart.findIndex((a) => {
        return a.id === menuInfo[0];
      });
      copy.splice(index, 1);
      setCart(copy);
    } else {
      console.log("0 미만으로 설정 불가");
    }
  };

  return (
    <>
      <div className="Count">
        <div className="counter">
          <div id="plus" onClick={onIncrease}>
            +
          </div>
          <input
            type="number"
            id="number"
            ref={numberRef}
            value={
              // cart가 빈 배열이면 value를 0으로 초기화
              Array.isArray(cart) && cart.length === 0 ? menuInfo[2] : undefined
            }
            onChange={() => {}}
            contentEditable="none"
          />

          <div id="minus" onClick={onDecrease}>
            -
          </div>
        </div>
        <div className="orderBtn">Order</div>
      </div>
    </>
  );
};

export default Count;
