import React from "react";
import "./Main.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Sidebar from "../../Modules/Sidebar/Sidebar";
import Navbar from "../../Modules/Navbar/Navbar";
import Menu from "../../Pages/Menu/Menu";
import Modal from "../../Modules/Modal/Modal";

const Main = () => {
  const [rawData, setRawData] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const [keyword, setKeyword] = useState("");

  const breakfastRef = useRef();
  const lunchRef = useRef();
  const dinnerRef = useRef();
  const sidesRef = useRef();
  const beveragesRef = useRef();
  const liquorsRef = useRef();
  const othersRef = useRef();

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Menu"
      )
      .then((res) => {
        console.log("fetching data");
        setFetchedData(res.data);
        setRawData(res.data);
      });
  }, []);

  return (
    <>
      <div className="Main">
        {modal ? <Modal modal={modal} setModal={setModal} /> : null}
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
            setFetchedData={setFetchedData}
            rawData={rawData}
          />
        </div>
        <div className="right">
          <Navbar keyword={keyword} setKeyword={setKeyword} />
          <Menu
            fetchedData={fetchedData}
            setFetchedData={setFetchedData}
            cart={cart}
            setCart={setCart}
            keyword={keyword}
            setKeyword={setKeyword}
            breakfastRef={breakfastRef}
            lunchRef={lunchRef}
            dinnerRef={dinnerRef}
            sidesRef={sidesRef}
            beveragesRef={beveragesRef}
            liquorsRef={liquorsRef}
            othersRef={othersRef}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
