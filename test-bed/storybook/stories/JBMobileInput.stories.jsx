import React from 'react';
import {JBMobileInput} from 'jb-mobile-input/react';
export default {
  title: 'Example/Input/JBMobileInput',
  component: JBMobileInput
};
const Template = (args) => <JBMobileInput { ...args}></JBMobileInput>;
export const Normal = Template.bind({});
Normal.args = {
  label:'mobile',
  message:"please enter your mobile number",
  // placeholder:"1234 5678 9012 3456",
};
