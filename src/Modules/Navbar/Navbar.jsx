import React, { useRef } from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

const Navbar = ({ keyword, setKeyword }) => {
  const keywordRef = useRef();
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
            onClick={() => {
              keywordRef.current.value = "";
              setKeyword(keywordRef.current.value);
            }}
          />
        </div>
        <div className="menu_items">
          <PaymentOutlinedIcon style={{ fontSize: "40px" }} />
          <MenuOutlinedIcon style={{ fontSize: "40px" }} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
