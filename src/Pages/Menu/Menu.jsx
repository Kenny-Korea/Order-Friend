import React from "react";
import "./Menu.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Sidebar from "../../Modules/Sidebar/Sidebar";
import Navbar from "../../Modules/Navbar/Navbar";
import Count from "../../Modules/Count/Count";

const Menu = ({
  fetchedData,
  setFetchedData,
  cart,
  setCart,
  keyword,
  setKeyword,
  breakfastRef,
  lunchRef,
  dinnerRef,
  sidesRef,
  beveragesRef,
  liquorsRef,
  othersRef,
}) => {
  const navigate = useNavigate();

  const onClickMenu = (e) => {
    navigate(e.target.id);
  };

  // menuAvailability에 따라 조건에 맞는 메뉴만 리턴할 수 있도록 하는 함수
  const onReturnMenu = (element, category, keyword) => {
    if (element.menuAvailability.includes(category) && !keyword) {
      return (
        <div className="item" key={element.menuIdx}>
          <img
            src={element.menuImage}
            alt={element.menuTitle}
            className="image"
            id={element.menuIdx}
            onClick={onClickMenu}
          />
          <div className="middle">
            <span className="title">{element.menuTitle}</span>
            <span className="price">$ {element.menuPrice}</span>
          </div>
          <Count
            menuInfo={[element.menuIdx, element.menuTitle, element.menuCount]}
            cart={cart}
            setCart={setCart}
          />
        </div>
      );
    } else if (element.menuAvailability.includes(category) && keyword) {
      if (element.menuTitle.includes(keyword)) {
        return (
          <div className="item" key={element.menuIdx}>
            <img
              src={element.menuImage}
              alt={element.menuTitle}
              className="image"
              id={element.menuIdx}
              onClick={onClickMenu}
            />
            <div className="middle">
              <span className="title">{element.menuTitle}</span>
              <span className="price">$ {element.menuPrice}</span>
            </div>
            <Count
              menuInfo={[element.menuIdx, element.menuTitle, element.menuCount]}
              cart={cart}
              setCart={setCart}
            />
          </div>
        );
      } else {
        return;
      }
    }
  };

  return (
    <>
      <div className="Menu">
        <div className="category" ref={breakfastRef}>
          Breakfast (06:00am ~ 11:00am)
        </div>
        {Array.isArray(fetchedData) && fetchedData.length === 0 ? null : (
          <div className="items" id="breakfast">
            {fetchedData.map((a, i) => {
              return onReturnMenu(a, "breakfast", keyword);
            })}
          </div>
        )}
        <div className="category" ref={lunchRef}>
          Lunch
        </div>
        {Array.isArray(fetchedData) && fetchedData.length === 0 ? null : (
          <div className="items" id="lunch">
            {fetchedData.map((a, i) => {
              return onReturnMenu(a, "lunch", keyword);
            })}
          </div>
        )}
        <div className="category" ref={dinnerRef}>
          Dinner
        </div>
        {Array.isArray(fetchedData) && fetchedData.length === 0 ? null : (
          <div className="items" id="dinner">
            {fetchedData.map((a, i) => {
              return onReturnMenu(a, "dinner", keyword);
            })}
          </div>
        )}
        <div className="category" ref={sidesRef}>
          Sides
        </div>
        {Array.isArray(fetchedData) && fetchedData.length === 0 ? null : (
          <div className="items" id="sides">
            {fetchedData.map((a, i) => {
              return onReturnMenu(a, "sides", keyword);
            })}
          </div>
        )}
        <div className="category" ref={beveragesRef}>
          Beverages
        </div>
        <div className="category" ref={liquorsRef}>
          Liquors
        </div>
        <div className="category" ref={othersRef}>
          Others
        </div>
      </div>
    </>
  );
};

export default Menu;
