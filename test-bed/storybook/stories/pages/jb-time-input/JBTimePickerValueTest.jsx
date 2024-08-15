import React, { useRef, useState, useEffect } from 'react';
import 'jb-time-picker';
function JBTimePickerValueTest(props) {
  const elem = useRef();
  const [value,setValue] = useState({});
  function setTime(hour,minute,second){
    elem.current.value = {
      hour:hour,
      minute:minute,
      second:second
    };
  }
  const onChange = function(e){
    setValue({...e.target.value});
  };
  useEffect(() => {
    elem.current.addEventListener('change',onChange);
  }, [elem.current]);
  return (
    <div>
      <jb-time-picker ref={elem}></jb-time-picker>
      <button onClick={()=>{setTime(12,30,12);}}>set 12:30:12</button>
      <button onClick={()=>{setTime(24,10,59);}}>set 24:10:59</button>
      <div>
        <label>selected value is:</label>
        <h3>{`${value.hour}:${value.minute}:${value.second}`}</h3>
      </div>
    </div>
  );
}

export default JBTimePickerValueTest;

