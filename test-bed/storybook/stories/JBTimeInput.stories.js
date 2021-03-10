import React from 'react';
import '../../../web-component/jb-time-input';
import JBTimeInputEventTestPage from './pages/JBTimeInputEventTestPage';
export default {
    title: 'Example/JBTimeInput',
};
const Template = (args) => <jb-time-input {...args}></jb-time-input>;
export const Normal = Template.bind({});
Normal.args = {
    label:'time',
};
const RTLTemplate = (args) => <div style={{direction:'rtl'}}><jb-time-input {...args}></jb-time-input></div>;
export const RTLSample = RTLTemplate.bind({});
RTLSample.args = {
    label:'زمان',
};
const EventTestPageTemplate = ()=> <JBTimeInputEventTestPage></JBTimeInputEventTestPage>;
export const EventTestPage = EventTestPageTemplate.bind({});