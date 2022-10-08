import React from "react";
import Main from "../src/Pages/Main/Main";
import Menu from "./Pages/Menu/Menu";
import Detail from "./Pages/Detail/Detail";
import Login from "../src/Pages/Login/Login";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Payment from "./Pages/Payment/Payment";

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
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
