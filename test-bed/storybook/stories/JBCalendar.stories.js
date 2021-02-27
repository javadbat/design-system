import React from 'react';
import JBCalendar from '../../../react-component/jb-calendar';
import JBCalendarTest from '../stories/pages/JBCalendarTestPage';
export default {
    title: 'Example/JBCalendar',
    component: JBCalendar
};
const Template = (args) =><JBCalendar direction="ltr" {...args}></JBCalendar>;
export const Normal = Template.bind({});
Normal.args = {
    inputType:'JALALI'
};
const TestTemplate = (args) => <JBCalendarTest></JBCalendarTest>;
export const Test = TestTemplate.bind({});
Test.args = {
};
export const Gregorian = Template.bind({});
Gregorian.args = {
    inputType:'GREGORIAN'
};
const rtlTemplate = (args) =>(<div style={{direction: 'rtl'}}><JBCalendar {...args}></JBCalendar></div>);
export const RTLGregorian = rtlTemplate.bind({});
RTLGregorian.args = {
    inputType:'GREGORIAN'
};