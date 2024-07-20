import React from 'react';
import {JBPasswordInput} from 'jb-password-input-react';
export default {
  title: 'Example/Input/JBPasswordInput',
  component: JBPasswordInput
};
const Template = (args) => <JBPasswordInput { ...args}></JBPasswordInput>;
export const Normal = Template.bind({});
Normal.args = {
  label:'password',
  message:"simple password input",
};
