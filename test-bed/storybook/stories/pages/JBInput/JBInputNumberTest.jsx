import React from "react";
import { JBNumberInput } from "jb-number-input/react";
import "./JBInputNumberTest.css";

const JBInputNumberTest = () => {
  return (
    <div className="input-wrapper">
      <JBNumberInput label="تست" message="این متن تست می باشد"></JBNumberInput>
    </div>
  );
};

export default JBInputNumberTest;
