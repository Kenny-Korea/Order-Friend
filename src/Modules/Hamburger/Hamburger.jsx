import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Hamburger.scss";
import axios from "axios";

const Hamburger = ({ hamburger, setHamburger }) => {
  const navigate = useNavigate();

  const onClickAdminLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="Hamburger">
        <div
          className="listItem"
          style={{
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            borderBottom: "none",
          }}
          onClick={onClickAdminLogin}
        >
          관리자 로그인
        </div>
        <div className="listItem">설정</div>
        <div
          className="listItem"
          style={{
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
            borderTop: "none",
          }}
        >
          도움말
        </div>
      </div>
    </>
  );
};

export default Hamburger;
