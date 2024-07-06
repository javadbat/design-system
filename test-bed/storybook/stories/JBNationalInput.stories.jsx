import React from 'react';
import {JBNationalInput} from 'jb-national-input-react';
export default {
  title: 'Example/JBNationalInput',
  component: JBNationalInput
};
const Template = (args) => <JBNationalInput { ...args}></JBNationalInput>;
export const Normal = Template.bind({});
Normal.args = {
  label:'national id',
  message:"please enter your national code",
};
