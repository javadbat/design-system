import React from 'react';
import {JBCheckbox} from 'jb-checkbox/react';
import { action } from '@storybook/addon-actions';
import JBCheckboxTest from '../stories/pages/JBCheckboxTestPage';
export default {
  title: 'Example/JBCheckbox',
  component: JBCheckbox
};

const Template = ({children,...args}) => <JBCheckbox {...args}>{children}</JBCheckbox>;

export const Normal = Template.bind({});
Normal.args = {
  label:'چک',
  onChange:(e)=>{action('onChange')(e.target.value);}
};

export const Disabled = Template.bind({});
Disabled.args = {
  label:'disabled',
  disabled:true,
  onChange:(e)=>{action('onChange')(e.target.value);}
};

export const DisabledTrue = Template.bind({});
DisabledTrue.args = {
  label:'disabled with true value',
  value:true,
  disabled:true,
  onChange:(e)=>{action('onChange')(e.target.value);}
};

export const ChildrenLabel = Template.bind({});
ChildrenLabel.args = {
  children:<div style={{color:'blue'}} slot="label">label in children</div>,
  onChange:(e)=>{action('onChange')(e.target.value);}
};

const TestTemplate = (args) => <JBCheckboxTest label={args.label} value={args.value} onChange={args.onChange}></JBCheckboxTest>;
export const TestCheckbox = TestTemplate.bind({});
TestCheckbox.args = {
  label:'چک باکس',
};