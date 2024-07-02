import React from 'react';
import PropTypes from 'prop-types';
import {JBCalendar} from '../../../../../react-component/jb-calendar/dist/JBCalendar';
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

