import React from 'react';
import '../../../web-component/jb-time-picker/dist/JBTimePicker';
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