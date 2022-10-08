import React from "react";
import "./Main.scss";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Sidebar from "../../Modules/Sidebar/Sidebar";
import Navbar from "../../Modules/Navbar/Navbar";
import Menu from "../Menu/Menu";
import Modal from "../../Modules/Modal/Modal";

const Main = () => {
  const [rawData, setRawData] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [cart, setCart] = useState([]);
  const [orderedList, setOrderedList] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [keyword, setKeyword] = useState("");

  const breakfastRef = useRef();
  const lunchRef = useRef();
  const dinnerRef = useRef();
  const sidesRef = useRef();
  const beveragesRef = useRef();
  const liquorsRef = useRef();
  const othersRef = useRef();
  const keywordRef = useRef();

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
        {modal ? (
          <Modal modal={modal} setModal={setModal} type={modalContent} />
        ) : null}
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
            orderedList={orderedList}
            setOrderedList={setOrderedList}
            modal={modal}
            setModal={setModal}
            modalContent={modalContent}
            setModalContent={setModalContent}
            setFetchedData={setFetchedData}
            rawData={rawData}
            setKeyword={setKeyword}
            keywordRef={keywordRef}
          />
        </div>
        <div className="right">
          <Navbar
            keyword={keyword}
            setKeyword={setKeyword}
            keywordRef={keywordRef}
            orderedList={orderedList}
          />
          <Outlet
            context={{
              fetchedData,
              setFetchedData,
              cart,
              setCart,
              orderedList,
              keyword,
              setKeyword,
              breakfastRef,
              lunchRef,
              dinnerRef,
              sidesRef,
              beveragesRef,
              liquorsRef,
              othersRef,
              modal,
              setModal,
              setModalContent,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
