import React from "react";
import Main from "../src/Pages/Main/Main";
import Menu from "../src/Pages/Menu/Menu";
import Detail from "../src/Pages/Menu/Menu";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
