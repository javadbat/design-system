import React from 'react';
import {JBMobileInput} from '../../../react-component/jb-mobile-input/lib/JBMobileInput';
export default {
    title: 'Example/JBMobileInput',
    component: JBMobileInput
};
const Template = (args) => <JBMobileInput { ...args}></JBMobileInput>;
export const Normal = Template.bind({});
Normal.args = {
    label:'card number',
    message:"please input 16 digit card number",
    // placeholder:"1234 5678 9012 3456",
};
