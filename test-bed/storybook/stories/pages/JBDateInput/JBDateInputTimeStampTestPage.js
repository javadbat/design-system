import React, {useState, useMemo} from 'react';
import JBDateInput from '../../../../../react-component/jb-date-input/lib/JBDateInput';
function JBDateInputTimeStampTest(props) {
    const [setValue, setValueSetter] = useState(null);
    const valueInDate = useMemo(()=>{
        if(setValue){
            return new Date(parseInt(setValue)).toString();
        }else{
            return null;
        }
    },setValue);
    return (
        <div>
            <JBDateInput value={setValue} label={props.label} valueType="TIME_STAMP" min={props.min} max={props.max} onSelect={e => {setValueSetter(e.target.value);}}></JBDateInput>
            <div>
                <br /><br />valueType is {props.valueType}
                <br /><br />Min date is: {props.min? props.min:"Unlimited"}
                <br /><br />Max date is: {props.max? props.max:"Unlimited"}
                <br /><br />Your chosen date is: {setValue}
                <br /><br />Your chosen date in greg is: {valueInDate}
            </div>
        </div>
    );
}
export default JBDateInputTimeStampTest;