import React from 'react';
import JBCheckbox from '../../../react-component/jb-checkbox';
import { action } from '@storybook/addon-actions';
import JBCheckboxTest from '../stories/pages/JBCheckboxTestPage';
export default {
    title: 'Example/JBCheckbox',
    component: JBCheckbox
};

const Template = (args) => <JBCheckbox label={args.label} value={args.value} onChange={args.onChange}></JBCheckbox>;

export const Normal = Template.bind({});
Normal.args = {
    label:'چک',
    value:false,
    onChange:(e)=>{action('onChange')(e.target.value);}
};
const TestTemplate = (args) => <JBCheckboxTest label={args.label} value={args.value} onChange={args.onChange}></JBCheckboxTest>;
export const TestCheckbox = TestTemplate.bind({});
TestCheckbox.args = {
    label:'چک باکس',
};