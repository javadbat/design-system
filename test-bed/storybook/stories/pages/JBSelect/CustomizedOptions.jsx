import React, { useState } from "react";
import PropTypes from "prop-types";
import { JBSelect } from "jb-select/react";
import "./CustomizedOptions.css";
function CustomizedOptions(props) {
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
    <div>
      <JBSelect
        optionList={colorList}
        getSelectedValueDOM={getSelectedValueDOM}
        getOptionDOM={getOptionDOM}
        getOptionTitle={getOptionTitle}
      >
      </JBSelect>
    </div>
  );
}

CustomizedOptions.propTypes = {};

export default CustomizedOptions;
