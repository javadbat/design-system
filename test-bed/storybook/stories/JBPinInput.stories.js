import React from 'react';
import {JBPinInput} from '../../../react-component/jb-pin-input';
import {JBPinInputStyleTest} from './pages/JBPinInput/JBPinInputStyleTest';
export default {
    title: 'Example/JBPinInput',
    component: JBPinInput
};
const Template = (args) => <JBPinInput { ...args}></JBPinInput>;
export const Normal = Template.bind({});
Normal.args = {
    label:'pin input',
    message:"please input 16 digit card number",
    value:"",
};
export const AutoFocus = Template.bind({});
AutoFocus.args = {
    label:'autofocus',
    autofocus:true,
    value:"",
};
export const charLength = Template.bind({});
charLength.args = {
    label:'8 digit pin',
    value:"",
    charLength:8
};
const PinInputStyleTemplate = () => <JBPinInputStyleTest></JBPinInputStyleTest>;
export const PinInputStyle = PinInputStyleTemplate.bind({});
