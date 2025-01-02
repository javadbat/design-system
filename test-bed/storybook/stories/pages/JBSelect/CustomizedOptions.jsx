import React, { useState } from "react";
import { JBOptionList, JBSelect, JBOption } from "jb-select/react";
import "./CustomizedOptions.css";
function CustomizedOptions() {
  const [colorList] = useState([
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
    //it has default function who return exact same input
    optionElement.innerHTML =
      '<span part="color-box" style="background-color:' + option.value +
      ';width:16px;height:16px;display:inline-block;"></span>' + "&nbsp;" +
      option.name;
    optionElement.addEventListener("click", onOptionSelected);
    return optionElement;
  }

  function getSelectedValueDOM(option) {
    const optionElement = document.createElement("div");
    optionElement.classList.add("selected-value");
    optionElement.innerHTML =
      '<span part="color-box" style="background-color:' + option.value +
      ';width:16px;height:16px;display:inline-block;"></span>' + "&nbsp;" +
      option.name;
    return optionElement;
  }
  function getOptionTitle(option) {
    return option.name;
  }
  return (
    <div>
      <JBSelect label="normal" getSelectedValueDOM={getSelectedValueDOM}>
        {
          colorList.map((color)=>{
            return (<JBOption key={color.value} value={color}><span className="color-circle" style={{backgroundColor:color.value}}></span>{color.name}</JBOption>);
          })
        }
      </JBSelect>
      <JBSelect
        getSelectedValueDOM={getSelectedValueDOM}
        label="with option list"
      >
        <JBOptionList
          optionList={colorList}
          getTitle={getOptionTitle}
          getContentDOM={getOptionDOM}
        />
      </JBSelect>
      <JBSelect>
        <JBOption value={{ name: "ali", age: 10 }}>Ali</JBOption>
        <JBOption value={{ name: "reza", age: 12 }}>Reza</JBOption>
        <JBOption value={{ name: "joe", age: 14 }}>Joe</JBOption>
      </JBSelect>
    </div>
  );
}

CustomizedOptions.propTypes = {};

export default CustomizedOptions;
