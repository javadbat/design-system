import React from 'react';
import JBTimeInput from '../../../react-component/jb-time-input/lib/JBTimeInput';
import JBTimeInputEventTestPage from './pages/JBTimeInputEventTestPage';
import JBTimeInputWebComponentEventTestPage from './pages/JBTimeInputWebComponentEventTestPage';
export default {
    title: 'Example/JBTimeInput',
    component:JBTimeInput
};
const Template = (args) => <JBTimeInput {...args}></JBTimeInput>;
export const Normal = Template.bind({});
Normal.args = {
    label:'time',
};
const RTLTemplate = (args) => <div style={{direction:'rtl'}}><JBTimeInput {...args}></JBTimeInput></div>;
export const RTLSample = RTLTemplate.bind({});
RTLSample.args = {
    label:'زمان',
    closeButtonText:'بستن'
};
const EventWebComponentTestPageTemplate = ()=> <JBTimeInputWebComponentEventTestPage></JBTimeInputWebComponentEventTestPage>;
export const WebComponentEventTestPage = EventWebComponentTestPageTemplate.bind({});

const EventTestPageTemplate = ()=> <JBTimeInputEventTestPage></JBTimeInputEventTestPage>;
export const EventTestPage = EventTestPageTemplate.bind({});

const validationSampleTemplate = (args) => <div style={{direction:'rtl'}}><JBTimeInput {...args}></JBTimeInput></div>;
export const ValidationSample = validationSampleTemplate.bind({});
ValidationSample.args = {
    label:'زمان',
    validationList: [
        {
            validator: /^[1][1234].*$/g,
            message:"ساعت انخابی شما میتواند بین 11 تا 14 باشد"
        }
    ]
};
export const withoutSecond = Template.bind({});
withoutSecond.args = {
    label:'time',
    secondEnabled:false
};

export const FrontalZero = Template.bind({});
FrontalZero.args = {
    label:'زمان',
    closeButtonText:'بستن',
    frontalZero:true,
};