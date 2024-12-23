import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {JBTimeInput} from 'jb-time-input/react';
function JBTimeInputEventTestPage(props) {
  const element = useRef();
  const [value, setValue] = useState();
  return (
    <div>
      <JBTimeInput ref={element} label="date" value={value} onChange={(e)=>setValue(e.target.value)}></JBTimeInput>
      <span>value:{value}</span>
      <br></br>
      <button onClick={()=>setValue('12:48:00')}>set value to 12:48</button>
      <button onClick={()=>setValue('00:00:00')}>set value to 00:00</button>
    </div>
  );
}

JBTimeInputEventTestPage.propTypes = {

};

export default JBTimeInputEventTestPage;

