import React from "react";
import { useEffect } from "react";
import Navbar from "../../Modules/Navbar/Navbar";
import "./Main.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const onClickMode = (e) => {
    if (e.target.className === "client") {
      navigate("/menu");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="Main">
        <div className="mode">
          <div className="client" onClick={onClickMode}>
            고객
          </div>
          <div className="admin" onClick={onClickMode}>
            관리자
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
