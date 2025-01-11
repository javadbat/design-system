import React, {useState} from 'react';
import {JBCalendar} from 'jb-calendar/react';
function JBCalendarTest (){
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
      <JBCalendar onSelect={e => {setValue(e.target.value);}}></JBCalendar>
      <div>
        <br /><br />Your date is: {selectedValueYear} /{selectedValueMonth} /{selectedValueDay}
      </div>
    </div>
  );
}
export default JBCalendarTest;