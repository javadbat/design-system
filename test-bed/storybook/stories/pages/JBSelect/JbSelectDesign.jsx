import React, { useState } from "react";
import PropTypes from "prop-types";
import { JBSelect } from "jb-select/react";
import "./JBSelectDesign.css";

function JBSelectDesign(props) {
  const [colorList, colorListSetter] = useState([
    {
      id: 1,
      name: "Red",
      value: "#f00",
    },
    {
      id: 2,
      name: "Green",
      value: "#0f0",
    },
    {
      id: 3,
      name: "Blue",
      value: "#00f",
    },
    {
      id: 4,
      name: "Yellow",
      value: "#ff0",
    },
  ]);
  function getOptionDOM(option, onOptionSelected) {
    const optionElement = document.createElement("div");
    optionElement.classList.add("select-option");
    //it has defualt function who return wxact same input
    optionElement.innerHTML =
      '<span part="color-box" style="background-color:' + option.value +
      ';width:16px;height:16px"></span>' + "&nbsp;" + option.name;
    optionElement.addEventListener("click", onOptionSelected);
    return optionElement;
  }
  function getSelectedValueDOM(option) {
    const optionElement = document.createElement("div");
    optionElement.classList.add("selected-value");
    optionElement.innerHTML =
      '<span part="color-box" style="background-color:' + option.value +
      ';width:16px;height:16px"></span>' + "&nbsp;" + option.name;
    return optionElement;
  }
  function getOptionTitle(option) {
    return option.name;
  }
  return (
    <div className="select-wrapper">
      <JBSelect
        searchPlaceholder="جست و جو"
        optionList={colorList}
        getSelectedValueDOM={getSelectedValueDOM}
        getOptionDOM={getOptionDOM}
        getOptionTitle={getOptionTitle}
      >
        <div style={{ height: "24px" }} slot="select-arrow-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="5" fill="#E7E7E7" />
            <path
              d="M19 8.5L12 15.5L5 8.5"
              stroke="#8B8B8B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </JBSelect>
    </div>
  );
}

JBSelectDesign.propTypes = {};

export default JBSelectDesign;
