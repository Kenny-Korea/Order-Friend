import React from "react";
import { useRef } from "react";
import "./Count.scss";

const Count = ({ menuInfo, cart, setCart }) => {
  const numberRef = useRef();
  const onIncrease = () => {
    if (numberRef.current.textContent > 0) {
      numberRef.current.textContent++;
      let copy = [...cart];
      let index = cart.findIndex((a) => {
        return a.id === menuInfo[0];
      });
      copy[index].count++;
      setCart(copy);
    } else {
      numberRef.current.textContent++;
      let copy = [...cart];
      copy.push({
        id: menuInfo[0],
        name: menuInfo[1],
        count: numberRef.current.textContent,
      });
      setCart(copy);
    }
  };
  const onDecrease = () => {
    if (numberRef.current.textContent > 1) {
      numberRef.current.textContent--;
      let copy = [...cart];
      let index = cart.findIndex((a) => {
        return a.id === menuInfo[0];
      });
      copy[index].count--;
      setCart(copy);
    } else if (numberRef.current.textContent == 1) {
      numberRef.current.textContent--;
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
          <div id="number" ref={numberRef}>
            {parseInt(0)}
          </div>
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
