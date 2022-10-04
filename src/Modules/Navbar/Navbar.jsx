import React from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="search_items">
          <input type="text" className="search" />
          <div className="button">
            <SearchOutlinedIcon />
          </div>
        </div>
        <div className="menu_items">
          <PaymentOutlinedIcon style={{ fontSize: "40px" }} />
          <MenuOutlinedIcon style={{ fontSize: "40px" }} />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
