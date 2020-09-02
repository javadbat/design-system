import React from 'react';
import JBSwitch from '../../../react-component/jb-switch';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Example/JBSwitch',
  component: JBSwitch
};

const Template = (args) => <JBSwitch trueTitle={args.trueTitle} falseTitle={args.falseTitle} value={args.value} onChange={args.onChange} isLoading={args.isLoading}></JBSwitch>;

export const Normal = Template.bind({});
Normal.args = {
  value:false,
  trueTitle:'فعال',
  falseTitle:'غیر فعال',
  onChange:(e)=>{console.log(e);action('onChange')(e)}
};