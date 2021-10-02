import React, {useState} from 'react';
import JBDateInput from '../../../../react-component/jb-date-input/JBDateInput';
function JBDateInputGregorianTest(props) {
    const [setValue, setValueSetter] = useState("");
    return (
        <div>
            <JBDateInput direction={props.direction} inputType={props.inputType} label={props.label} min={props.min} max={props.max} valueType={props.valueType} onChange={e => {setValueSetter(e.target.value);}}></JBDateInput>
            <div>
                <br /><br />valueType is {props.valueType}
                <br /><br />inputType is {props.inputType}
                <br /><br />Min date is: {props.min? props.min:"Unlimited"}
                <br /><br />Max date is: {props.max? props.max:"Unlimited"}
                <br /><br />Your chosen date is: {setValue}
            </div>
        </div>
    );
}
export default JBDateInputGregorianTest;