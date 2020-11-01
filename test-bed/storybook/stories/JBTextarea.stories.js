import React from 'react';
import JBTextarea from '../../../react-component/jb-textarea/JBTextarea';
import JBTextAreaTestPage from './pages/JBTextAreaTestPage';
export default {
    title: 'Example/JBTextarea',
    component: JBTextarea
};
const Template = (args) => <JBTextarea {...args}></JBTextarea>;
export const Normal = Template.bind({});
Normal.args = {
    label:'متن',
    placeholder:'لطفا وارد کنید'
};
const TestPageTemplate = (args) => <JBTextAreaTestPage {...args}></JBTextAreaTestPage>;
export const Examples = TestPageTemplate.bind({});