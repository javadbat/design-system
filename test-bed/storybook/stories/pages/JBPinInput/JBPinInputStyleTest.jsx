import React from 'react';
import "./JBPinInputStyleTest.css";
import { JBPinInput } from "jb-pin-input/react";

export function JBPinInputStyleTest() {
  return (
    <div className='pin-input-test-wrapper'>
      <div className='bottom-line-test'>
        <h1>pin input bottom line style test</h1>
        <JBPinInput></JBPinInput>
        <div>
          <h3>customize pin input</h3>
          <p> --jb-pin-input-bottom-line-height:10px;</p>
          <p> --jb-pin-input-bottom-line-border-radius:0px</p>
          <p> --jb-pin-input-bottom-line-color:black;</p>
          <p>--jb-pin-input-bottom-line-color-active:#ececec;</p>
        </div>
      </div>
      <div className='bottom-line-display'>
        <h1>pin input bottom line display test</h1>
        <JBPinInput></JBPinInput>
        <div>
          <h3>customize pin input</h3>
          <p> --jb-pin-input-bottom-line-height:10px;</p>
          <p> --jb-pin-input-bottom-line-border-radius:0px</p>
          <p> --jb-pin-input-bottom-line-color:black;</p>
          <p>--jb-pin-input-bottom-line-color-active:#ececec;</p>
        </div>
      </div>
      <div className='input-border-display'>
        <h1>pin input border display test</h1>
        <JBPinInput></JBPinInput>
        <div>
          <h3>customize pin input</h3>
          <p>--jb-pin-input-wrapper-border-width:4px;</p>
          <p>--jb-pin-input-wrapper-border-color:black</p>
          <p>--jb-pin-input-bottom-line-display:none;</p>
          <p>--jb-pin-input-wrapper-border-radius:5px;</p>
          <p>--jb-pin-input-wrapper-border-color-active:#ececec;</p>
          <p>--jb-pin-input-inputs-wrapper-width:500px;</p>
          <p>--jb-pin-input-pin-input-wrapper-height:25px;</p>
          <p> --jb-pin-input-pin-font-size:16px;</p>
          <p>--jb-pin-input-pin-font-weight:600;</p>
          <p>--jb-pin-input-wrapper-box-shadow:0px 0px 1px 1px #ececec;</p>
          <p>--jb-pin-input-error-message-margin:12px 24px;</p>
    

        </div>
      </div>


    </div>
  );
}

