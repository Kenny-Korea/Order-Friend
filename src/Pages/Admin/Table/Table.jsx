import React from "react";
import "./Table.scss";
import { addDoc, getDoc, doc } from "firebase/firestore";
import { colRef, db } from "../../../firebaseConfig";

const Table = ({ mockData }) => {
  // 왜 아래의 함수가 작동하지 않는지 모르겠음
  const returnTableRow = () => {
    mockData.map((element) => {
      return (
        <>
          <tr key={element.menuIdx}>
            <td>{element.menuIdx}</td>
            <td>{element.menuImage}</td>
            <td>{element.menuTitle}</td>
            <td>{element.menuCategory}</td>
            <td>{element.menuPrice}</td>
          </tr>
        </>
      );
    });
  };

  const addMenuHandler = () => {
    addDoc(colRef, { title: "test", price: "$12" }).then(() => {
      console.log("success");
    });
  };
  const docRef = doc(db, "menu", "fYSYzrqcOulPUxkQwW7R");

  const testHandler = () => {
    getDoc(docRef).then((doc) => {
      console.log(doc.data().test);
    });
  };

  return (
    <>
      {mockData ? (
        <div className="Table">
          <table>
            {mockData.map((element, i) => {
              return (
                <tr className="tr" key={i}>
                  <td>{element.menuIdx}</td>
                  <td>
                    <img
                      alt="thumbnail"
                      src={element.menuImage}
                      style={{ width: "2rem", height: "2rem" }}
                    />
                  </td>
                  <td>{element.menuTitle}</td>
                  <td>{element.menuCategory}</td>
                  <td>{element.menuPrice}</td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : null}
      <div onClick={addMenuHandler}>+ 메뉴 추가</div>
    </>
  );
};

export default Table;
