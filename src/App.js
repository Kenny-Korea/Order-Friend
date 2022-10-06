import React from "react";
import Main from "../src/Pages/Main/Main";
import Menu from "./Pages/Menu/Menu";
import Detail from "./Pages/Menu/Menu";
import Login from "../src/Pages/Login/Login";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<Main />} />
          <Route path="/menu:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
