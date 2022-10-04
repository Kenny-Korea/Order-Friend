import React from "react";
import "./Menu.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Sidebar from "../../Modules/Sidebar/Sidebar";
import Navbar from "../../Modules/Navbar/Navbar";
import Count from "../../Modules/Count/Count";
import Modal from "../../Modules/Modal/Modal";

const Menu = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const breakfastRef = useRef();
  const lunchRef = useRef();
  const dinnerRef = useRef();
  const sidesRef = useRef();
  const beveragesRef = useRef();
  const liquorsRef = useRef();
  const othersRef = useRef();
  console.log(cart);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Menu"
      )
      .then((res) => {
        setFetchedData(res.data);
      });
  }, []);

  const onClickMenu = (e) => {
    navigate(e.target.id);
  };

  return (
    <>
      <div className="Menu">
        <div className="left">
          <Sidebar
            breakfastRef={breakfastRef}
            lunchRef={lunchRef}
            dinnerRef={dinnerRef}
            sidesRef={sidesRef}
            beveragesRef={beveragesRef}
            liquorsRef={liquorsRef}
            othersRef={othersRef}
            cart={cart}
            setCart={setCart}
            modal={modal}
            setModal={setModal}
          />
        </div>
        <div className="right">
          {modal ? <Modal modal={modal} setModal={setModal} /> : null}

          <Navbar />
          <div className="category" ref={breakfastRef}>
            Breakfast (06:00am ~ 11:00am)
          </div>
          {Array.isArray(fetchedData) && fetchedData.length === 0 ? null : (
            <div className="items">
              {fetchedData.map((a, i) => {
                return (
                  <div className="item" key={a.menuIdx}>
                    <img
                      src={a.menuImage}
                      alt="pp"
                      className="image"
                      id={a.menuIdx}
                      onClick={onClickMenu}
                    />
                    <div className="middle">
                      <span className="title">{a.menuTitle}</span>
                      <span className="price">$ {a.menuPrice}</span>
                    </div>
                    <Count
                      menuInfo={[a.menuIdx, a.menuTitle]}
                      cart={cart}
                      setCart={setCart}
                    />
                  </div>
                );
              })}
            </div>
          )}
          <div className="category" ref={lunchRef}>
            Lunch
          </div>
          {Array.isArray(fetchedData) && fetchedData.length === 0 ? null : (
            <div className="items">
              {fetchedData.map((a, i) => {
                return (
                  <div className="item" key={a.menuIdx}>
                    <img
                      src={a.menuImage}
                      alt="pp"
                      className="image"
                      id={a.menuIdx}
                      onClick={onClickMenu}
                    />
                    <div className="middle">
                      <span className="title">{a.menuTitle}</span>
                      <span className="price">${a.menuPrice}</span>
                    </div>
                    <span className="content">{a.menuContent}</span>
                  </div>
                );
              })}
            </div>
          )}
          <div className="category" ref={dinnerRef}>
            Dinner
          </div>
          <div className="category" ref={sidesRef}>
            Sides
          </div>
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
      </div>
    </>
  );
};

export default Menu;
