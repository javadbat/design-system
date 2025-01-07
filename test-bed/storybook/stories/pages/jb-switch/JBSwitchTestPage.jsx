import React, { useState } from 'react';
import {JBSwitch} from 'jb-switch/react';
function JBSwitchTest (props){
  const [value, inputValueSetter] = useState(false);
  return (
    <JBSwitch trueTitle={props.trueTitle} falseTitle={props.falseTitle} value={value} onChange={e => {inputValueSetter(e.target.value);}}></JBSwitch>
  );
}
export default JBSwitchTest;