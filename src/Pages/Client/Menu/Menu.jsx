import React from "react";
import "./Menu.scss";
import { useNavigate, useOutletContext } from "react-router-dom";
import Count from "../../../Modules/Count/Count";
import { sidebarWords } from "../../../languages";

const Menu = () => {
  const {
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
    language,
  } = useOutletContext();
  const navigate = useNavigate();

  // 메뉴 클릭하면 Detail Page로 이동
  const onClickMenu = (e) => {
    let id = e.target.id;
    navigate(`/menu/${id}`);
  };

  // menuAvailability에 따라 조건에 맞는 메뉴만 리턴할 수 있도록 하는 함수
  const onReturnMenu = (element, category, keyword) => {
    if (element.menuAvailability.includes(category) && !keyword) {
      return (
        <div className="item" key={element.menuIdx + category}>
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
            menuInfo={[
              element.menuIdx,
              element.menuTitle,
              element.menuCount,
              element.menuPrice,
            ]}
            cart={cart}
            setCart={setCart}
          />
        </div>
      );
    } else if (element.menuAvailability.includes(category) && keyword) {
      if (element.menuTitle.includes(keyword)) {
        return (
          <div className="item" key={element.menuIdx + category}>
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
              menuInfo={[
                element.menuIdx,
                element.menuTitle,
                element.menuCount,
                element.menuPrice,
              ]}
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
          {sidebarWords[0].language[language]} (06:00am ~ 11:00am)
        </div>
        {Array.isArray(fetchedData) && fetchedData.length === 0 ? null : (
          <div className="items" id="breakfast">
            {fetchedData.map((menu) => {
              return onReturnMenu(menu, "breakfast", keyword);
            })}
          </div>
        )}
        <div className="category" ref={lunchRef}>
          {sidebarWords[1].language[language]}
        </div>
        {Array.isArray(fetchedData) && fetchedData.length === 0 ? null : (
          <div className="items" id="lunch">
            {fetchedData.map((menu) => {
              return onReturnMenu(menu, "lunch", keyword);
            })}
          </div>
        )}
        <div className="category" ref={dinnerRef}>
          {sidebarWords[2].language[language]}
        </div>
        {Array.isArray(fetchedData) && fetchedData.length === 0 ? null : (
          <div className="items" id="dinner">
            {fetchedData.map((menu) => {
              return onReturnMenu(menu, "dinner", keyword);
            })}
          </div>
        )}
        <div className="category" ref={sidesRef}>
          {sidebarWords[3].language[language]}
        </div>
        {Array.isArray(fetchedData) && fetchedData.length === 0 ? null : (
          <div className="items" id="sides">
            {fetchedData.map((menu) => {
              return onReturnMenu(menu, "sides", keyword);
            })}
          </div>
        )}
        <div className="category" ref={beveragesRef}>
          {sidebarWords[4].language[language]}
        </div>
        <div className="category" ref={liquorsRef}>
          {sidebarWords[5].language[language]}
        </div>
        <div className="category" ref={othersRef}>
          {sidebarWords[6].language[language]}
        </div>
      </div>
    </>
  );
};

export default Menu;
