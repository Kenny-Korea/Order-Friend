import React from "react";
import Main from "./Pages/Client/Main/Main";
import Menu from "./Pages/Client/Menu/Menu";
import Detail from "./Pages/Client/Detail/Detail";
import Login from "../src/Pages/Login/Login";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Payment from "./Pages/Client/Payment/Payment";
import Admin from "./Pages/Admin/Admin/Admin";

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Main />}>
            <Route path="menu" element={<Menu />} />
            <Route path="menu/:id" element={<Detail />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
