import React, {useState} from 'react';
import JBDateInput from '../../../../react-component/jb-date-input/JBDateInput';
function JBDateInputTest (){
    const [selectedValueYear, selectedValueYearSetter] = useState("");
    const [selectedValueMonth, selectedValueMonthSetter] = useState("");
    const [selectedValueDay, selectedValueDaySetter] = useState("");
    function setValue(value){
        selectedValueYearSetter(value.year);
        selectedValueMonthSetter(value.month);
        selectedValueDaySetter(value.day);
    }
    return (
        <div>
            <JBDateInput onSelect={e => {setValue(e.target.value);}}></JBDateInput>
            <div>
                <br /><br />Your date is: {selectedValueYear} /{selectedValueMonth} /{selectedValueDay}
            </div>
        </div>
    );
}
export default JBDateInputTest;