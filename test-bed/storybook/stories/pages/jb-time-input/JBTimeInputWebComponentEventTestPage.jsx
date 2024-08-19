import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import 'jb-time-input';
function JBTimeInputWebComponentEventTestPage(props) {
  const element = useRef();
  const withoutSecondElement = useRef();
  const [value, setValue] = useState();
  const [wsvalue, setwsValue] = useState();
  useEffect(()=>{
    if(element.current){
      element.current.addEventListener("change",(e)=>{setValue(e.target.value);});
    }
  },[element.current]);
  useEffect(()=>{
    if(withoutSecondElement.current){
      withoutSecondElement.current.addEventListener("change",(e)=>{setwsValue(e.target.value);});
      withoutSecondElement.current.secondEnabled = false;
    }
  },[withoutSecondElement.current]);
  return (
    <div>
      <jb-time-input ref={element} label="date"></jb-time-input>
      <span>value:{value}</span>
      <h3>without second</h3>
      <jb-time-input ref={withoutSecondElement}></jb-time-input>
      <span>value:{wsvalue}</span>
    </div>
  );
}

JBTimeInputWebComponentEventTestPage.propTypes = {

};

export default JBTimeInputWebComponentEventTestPage;

