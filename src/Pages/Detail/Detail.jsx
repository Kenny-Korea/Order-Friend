import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { breakfast, dinner, lunch, sides } from "../../Modules/Buttons/Buttons";
import "./Detail.scss";

const Detail = () => {
  const { fetchedData } = useOutletContext();
  const { id } = useParams();

  const returnValue = (type) => {
    const currentElement = fetchedData.filter((element) => {
      return element.menuIdx === parseInt(id);
    });
    switch (type) {
      case "image":
        return currentElement[0].menuImage;
      case "name":
        return currentElement[0].menuTitle;
      case "description":
        return currentElement[0].menuContent;
      case "availability":
        return currentElement[0].menuAvailability;
      default:
        break;
    }
  };

  const returnAvailability = () => {
    const array = [];
    if (returnValue("availability").includes("breakfast")) {
      array.push(breakfast());
    }
    if (returnValue("availability").includes("lunch")) {
      array.push(lunch());
    }
    if (returnValue("availability").includes("dinner")) {
      array.push(dinner());
    }
    if (returnValue("availability").includes("sides")) {
      array.push(sides());
    }
    return array.map((a, i) => {
      return a;
    });
  };
  returnAvailability();
  return (
    <>
      <div className="Detail">
        <div className="titleArea">
          {returnValue("name")}
          <div className="items">{returnAvailability()}</div>
        </div>
        <div className="imageArea">
          <img
            className="thumbnail"
            alt="thumbnail"
            src={returnValue("image")}
          />
          <div className="images">
            <div className="image"></div>
            <div className="image"></div>
            <div className="image"></div>
            <div className="image"></div>
          </div>
        </div>
        <div className="description">{returnValue("description")}</div>
      </div>
    </>
  );
};

export default Detail;
