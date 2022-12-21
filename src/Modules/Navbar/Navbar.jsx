import React, { useRef, useState } from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import TranslateIcon from "@mui/icons-material/Translate";
import { useNavigate } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

const Navbar = ({
  keyword,
  setKeyword,
  keywordRef,
  orderedList,
  language,
  setLanguage,
}) => {
  const navigate = useNavigate();
  const [hamburger, setHamburger] = useState(false);

  // 새로고침 버튼 클릭
  const onClickRefresh = () => {
    keywordRef.current.value = "";
    setKeyword(keywordRef.current.value);
  };

  // 뒤로가기 버튼 클릭
  const onClickBack = () => {
    navigate("/menu");
  };

  // 한/영 전환 버튼 클릭
  const onClickLanguage = () => {
    if (language === 0) {
      setLanguage(1);
    } else {
      setLanguage(0);
    }
  };

  // 결제 버튼 클릭
  const onClickPayment = () => {
    navigate("/payment");
  };

  // 햄버거 버튼 클릭
  const onClickHamburger = () => {
    console.log("onClickHamburger");
    setHamburger(!hamburger);
  };
  return (
    <>
      <div className="Navbar">
        <div className="search_items">
          <input
            type="text"
            className="search"
            ref={keywordRef}
            onKeyUp={() => {
              if (window.event.keyCode === 13)
                setKeyword(keywordRef.current.value);
            }}
          />
          <div
            className="button"
            onClick={() => {
              setKeyword(keywordRef.current.value);
            }}
          >
            <HighlightOffIcon
              onClick={onClickRefresh}
              style={{ fontSize: "large" }}
            />
            <SearchOutlinedIcon />
          </div>
          <ArrowBackOutlinedIcon
            style={{ marginLeft: "1rem" }}
            onClick={onClickBack}
          />
        </div>
        <div className="menu_items">
          <TranslateIcon onClick={onClickLanguage} />
          <PaymentOutlinedIcon
            style={{ fontSize: "40px" }}
            onClick={onClickPayment}
          />
          <MenuOutlinedIcon
            style={{ fontSize: "40px" }}
            onClick={onClickHamburger}
          />
          {hamburger ? (
            <Hamburger hamburger={hamburger} setHamburger={setHamburger} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
