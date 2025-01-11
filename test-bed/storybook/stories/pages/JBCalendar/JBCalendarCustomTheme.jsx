import React from 'react';
import {JBCalendar} from 'jb-calendar/react';
import './JBCalendarCustomTheme.css';
function JBCalendarCustomTheme(props) {
  return (
    <div className="jb-calendar-theme-test-page">
      <div className="dark-theme">
        <JBCalendar></JBCalendar>
      </div>
    </div>
  );
}

JBCalendarCustomTheme.propTypes = {

};

export default JBCalendarCustomTheme;

