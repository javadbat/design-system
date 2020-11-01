import React from 'react';
import JBTextarea from '../../../react-component/jb-textarea/JBTextarea';
export default {
    title: 'Example/JBTextarea',
    component: JBTextarea
};
const Template = (args) => <JBTextarea {...args}></JBTextarea>;
export const Normal = Template.bind({});
Normal.args = {
    label:'متن',
    placeholder:'ssss'
};