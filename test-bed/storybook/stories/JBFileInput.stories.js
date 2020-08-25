import React from 'react';
import JBFileInput from '../../../react-component/jb-file-input/JBFileInput';
export default {
    title: 'Example/JBFileInput',
    component: JBFileInput
  };
  const Template = (args) => <JBFileInput {...args}></JBFileInput>;
  export const Normal = Template.bind({});
  Normal.args = {
};