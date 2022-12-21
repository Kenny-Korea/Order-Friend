import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Table from "../Table/Table";
import "./Admin.scss";

const Admin = () => {
  const [mockData, setMockData] = useState();
  useEffect(() => {
    // 실제로는 주문된 내역을 가져와야 함
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Menu"
      )
      .then((res) => {
        console.log("test");
        setMockData(res.data);
      });
  }, []);
  return (
    <>
      <div className="Admin">
        <div className="left"></div>
        <div className="right">
          <div className="rightTop">
            <div className="widgets">
              <div className="widget">금일 매출</div>
              <div className="widget">주문 건수</div>
              <div className="widget">금월 누적</div>
            </div>
            <div className="graph">graph</div>
          </div>
          <div className="rightBottom">
            {mockData ? <Table mockData={mockData} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
