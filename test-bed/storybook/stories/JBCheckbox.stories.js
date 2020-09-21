import React from 'react';
import JBCheckbox from '../../../react-component/jb-checkbox';
import { action } from '@storybook/addon-actions';
export default {
    title: 'Example/JBCheckbox',
    component: JBCheckbox
};

const Template = (args) => <JBCheckbox label={args.label} value={args.value} onChange={args.onChange}></JBCheckbox>;

export const Normal = Template.bind({});
Normal.args = {
    label:'چک',
    value:false,
    onChange:(e)=>{action('onChange')(e.target.value)}
};