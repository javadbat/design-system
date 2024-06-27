import React from 'react';
import 'jb-time-picker';
import JBTimePickerValueTest from './pages/JBTimePickerValueTest';
export default {
    title: 'Example/JBTimePicker',
    // component:
};
const Template = (args) => <jb-time-picker {...args}></jb-time-picker>;
export const Normal = Template.bind({});
Normal.args = {
};
const RTLTemplate = (args) => <div style={{direction:'rtl'}}><jb-time-picker {...args}></jb-time-picker></div>;
export const RTLSample = RTLTemplate.bind({});
RTLSample.args = {
};
const ValueTestTemplate = (args) => <JBTimePickerValueTest {...args}></JBTimePickerValueTest>;
export const ValueTest = ValueTestTemplate.bind({});
Normal.args = {
    hour:0,
    minute:0,
    second:0
};
