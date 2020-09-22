import React from 'react';
import JBCalendar from '../../../react-component/jb-calendar';
import JBCalendarTest from '../stories/pages/JBCalendarTestPage';
export default {
    title: 'Example/JBCalendar',
    component: JBCalendar
};
const Template = (args) => <JBCalendar></JBCalendar>;
export const Normal = Template.bind({});
Normal.args = {
};
const TestTemplate = (args) => <JBCalendarTest></JBCalendarTest>;
export const Test = TestTemplate.bind({});
Test.args = {
};