import React, { useRef, useState } from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

const Navbar = ({ keyword, setKeyword, keywordRef, orderedList }) => {
  const navigate = useNavigate();
  const [hamburger, setHamburger] = useState(false);

  // 새로고침 버튼 클릭
  const onClickRefresh = () => {
    keywordRef.current.value = "";
    setKeyword(keywordRef.current.value);
  };

  // 뒤로가기 버튼 클릭
  const onClickBack = () => {
    navigate(-1);
  };

  // 결제 버튼 클릭
  const onClickPayment = () => {
    navigate("/payment");
  };

  // 햄버거 버튼 클릭
  const onClickHamburger = () => {
    console.log("test");
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
            <SearchOutlinedIcon />
          </div>
          <RefreshOutlinedIcon
            style={{ marginLeft: "1rem" }}
            onClick={onClickRefresh}
          />
          <ArrowBackOutlinedIcon
            style={{ marginLeft: "1rem" }}
            onClick={onClickBack}
          />
        </div>
        <div className="menu_items">
          <PaymentOutlinedIcon
            style={{ fontSize: "40px" }}
            onClick={onClickPayment}
          />
          <MenuOutlinedIcon
            style={{ fontSize: "40px" }}
            onClick={onClickHamburger}
          >
            {hamburger ? <Hamburger /> : null}
          </MenuOutlinedIcon>
        </div>
      </div>
    </>
  );
};

export default Navbar;
