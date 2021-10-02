import React, {useState} from 'react';
import JBDateInput from '../../../../react-component/jb-date-input/JBDateInput';
function JBDateInputJalaliTest(props) {
    const [value, valueSetter] = useState("");
    const validationList = [
        {
            validator:/^13.*$/g,
            message:'تاریخ باید قبل از تنها در قرن 13 شمسی باشد'
        },
        {
            validator:(inputedText, valueObject, valueText)=>{
                debugger;
            },
            message:'باید تاریخ بعد از  15 ماه انتخاب شود'
        }
    ];
    return (
        <div>
            <JBDateInput value={value} label={props.label} min={props.min} max={props.max} valueType={props.valueType} onSelect={e => {valueSetter(e.target.value);}} format={props.format}></JBDateInput>
            <div>
                <br /><br />valueType is {props.valueType}
                <br /><br />Min date is: {props.min? props.min:"Unlimited"}
                <br /><br />Max date is: {props.max? props.max:"Unlimited"}
                <br /><br />Your chosen date is: {value}
                <br /><button onClick={()=>{valueSetter("1400-06-18T00:00:00.000Z");}}>set value to 1400-06-18T00:00:00.000Z</button>
            </div>
            <h3>Center Aligned</h3>
            <div style={{'--jb-date-input-text-align':'center'}}>
                <JBDateInput></JBDateInput>
            </div>
            <h3>test custom validation</h3>
            <JBDateInput validationList={validationList} value={value} label={props.label} valueType={props.valueType} onSelect={e => {valueSetter(e.target.value);}} format={props.format}></JBDateInput>
        </div>
    );
}
export default JBDateInputJalaliTest;