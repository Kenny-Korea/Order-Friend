import React, { useRef } from "react";
import "./Sidebar.scss";
import BreakfastDiningOutlinedIcon from "@mui/icons-material/BreakfastDiningOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import LocalDrinkOutlinedIcon from "@mui/icons-material/LocalDrinkOutlined";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  breakfastRef,
  lunchRef,
  dinnerRef,
  sidesRef,
  beveragesRef,
  liquorsRef,
  othersRef,
  cart,
  setCart,
  orderedList,
  setOrderedList,
  modal,
  setModal,
  modalContent,
  setModalContent,
  setFetchedData,
  rawData,
  keywordRef,
  setKeyword,
}) => {
  const navigate = useNavigate();

  // 로고 클릭 시 메뉴로 이동
  const onClickLogo = () => {
    keywordRef.current.value = "";
    setKeyword(keywordRef.current.value);
    navigate("/menu");
  };

  // 카테고리 클릭 시 해당 메뉴 항목으로 스크롤
  const onClickCategory = (e) => {
    switch (e.target.id) {
      case "breakfast":
        breakfastRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "lunch":
        lunchRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "dinner":
        dinnerRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "sides":
        sidesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "beverages":
        beveragesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "liquors":
        liquorsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "others":
        othersRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  // 주문 버튼 클릭
  const onClickOrder = () => {
    if (Array.isArray(cart) && cart.length !== 0) {
      setModalContent("addToCart");
      setModal(!modal);
      // 그냥 orderedList에 push 하게 되면 Array 안에 Array가 들어가게 되므로 아래와 같이 선언
      setOrderedList([...orderedList, ...cart]);
      setCart([]);
      let copy = [...rawData];
      setFetchedData(copy);
    }
  };

  return (
    <>
      <div className="Sidebar">
        <span onClick={onClickLogo}>Kenny Resto</span>
        <ul className="lists">
          <li id="breakfast" onClick={onClickCategory}>
            <BreakfastDiningOutlinedIcon />
            <span id="breakfast" onClick={onClickCategory}>
              Breakfast
            </span>
          </li>
          <li id="lunch" onClick={onClickCategory}>
            <LunchDiningOutlinedIcon />
            <span id="lunch" onClick={onClickCategory}>
              Lunch
            </span>
          </li>
          <li id="dinner" onClick={onClickCategory}>
            <RestaurantOutlinedIcon />
            <span id="dinner" onClick={onClickCategory}>
              Dinner
            </span>
          </li>
          <li id="sides" onClick={onClickCategory}>
            <BakeryDiningOutlinedIcon />
            <span id="sides" onClick={onClickCategory}>
              Sides
            </span>
          </li>
          <li id="beverages" onClick={onClickCategory}>
            <LocalDrinkOutlinedIcon />
            <span id="beverages" onClick={onClickCategory}>
              Beverages
            </span>
          </li>
          <li id="liquors" onClick={onClickCategory}>
            <SportsBarOutlinedIcon />
            <span id="liquors" onClick={onClickCategory}>
              Liquors
            </span>
          </li>
          <li id="others" onClick={onClickCategory}>
            <PanToolOutlinedIcon />
            <span id="others" onClick={onClickCategory}>
              Others
            </span>
          </li>
        </ul>
        <div className="cart">
          <span id="cartList">- Cart List -</span>
          {cart.map((a, i) => {
            return (
              <div className="cartItem" key={a.id}>
                <span>{a.name}</span>
                <span>{a.count}</span>
              </div>
            );
          })}
        </div>
        <div className="orderBtn" onClick={onClickOrder}>
          Order
        </div>
      </div>
    </>
  );
};

export default Sidebar;
