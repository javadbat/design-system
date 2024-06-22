import React from 'react';
import {JBTextarea} from '../../../react-component/jb-textarea';
import JBTextAreaTestPage from './pages/JBTextAreaTestPage';
export default {
    title: 'Example/JBTextarea',
    component: JBTextarea
};
const Template = (args) => <JBTextarea {...args}></JBTextarea>;
export const Normal = Template.bind({});
Normal.args = {
    label:'text',
    placeholder:'please type here'
};
const TestPageTemplate = (args) => <JBTextAreaTestPage {...args}></JBTextAreaTestPage>;
export const Examples = TestPageTemplate.bind({});


const RTLTemplate = (args) => <div style={{dir:'rtl'}}><JBTextarea {...args}></JBTextarea></div>;
export const RTLSample = RTLTemplate.bind({});
RTLTemplate.args = {
    label:'متن',
    placeholder:'لطفا وارد کنید'
};