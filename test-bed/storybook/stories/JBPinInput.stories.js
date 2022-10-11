import React from 'react';
import {JBPinInput} from '../../../react-component/jb-pin-input/lib/JBPinInput';
export default {
    title: 'Example/JBPinInput',
    component: JBPinInput
};
const Template = (args) => <JBPinInput { ...args}></JBPinInput>;
export const CardNumber = Template.bind({});
CardNumber.args = {
    label:'pin input',
    message:"please input 16 digit card number",
    value:"",
};