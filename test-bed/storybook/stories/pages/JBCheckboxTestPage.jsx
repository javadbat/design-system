import React, {useState} from 'react';
import JBCheckbox from '../../../../react-component/jb-checkbox';
function JBCheckboxTest (props){
    const [value, inputValueSetter] = useState("");
    return (
        <JBCheckbox label={props.label} value={value} onChange={e => {inputValueSetter(e.target.value);}}></JBCheckbox>
    );
}
export default JBCheckboxTest;