import React, {useState} from 'react';
import JBDateInput from '../../../../../react-component/jb-date-input/lib/JBDateInput';
function JBDateInputTimeStampTest(props) {
    const [setValue, setValueSetter] = useState("");
    return (
        <div>
            <JBDateInput label={props.label} valueType={props.valueType} min={props.min} max={props.max} onSelect={e => {setValueSetter(e.target.value);}}></JBDateInput>
            <div>
                <br /><br />valueType is {props.valueType}
                <br /><br />Min date is: {props.min? props.min:"Unlimited"}
                <br /><br />Max date is: {props.max? props.max:"Unlimited"}
                <br /><br />Your chosen date is: {setValue}
            </div>
        </div>
    );
}
export default JBDateInputTimeStampTest;