import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { JBSelect } from "jb-select/react";
function JBSelectDynamicList() {
  const [optionList, setOptionList] = useState([]);
  function fillList(text = "") {
    const newList = [];
    for (let i = 0; i < 20; i++) {
      newList.push(`${text} - ${i}`);
    }
    setOptionList(newList);
  }
  useEffect(() => {
    fillList();
  }, []);
  const onKeyup = function (e) {
    const text = e.target.textValue;
    fillList(text);
  };
  return (
    <div>
      <JBSelect
        label="please type and see resault change"
        optionList={optionList}
        onKeyup={onKeyup}
      >
      </JBSelect>
    </div>
  );
}

JBSelectDynamicList.propTypes = {};

export default JBSelectDynamicList;
