import React from 'react';
import JBImageInput from '../../../react-component/jb-image-input/JBImageInput';
export default {
    title: 'Example/JBImageInput',
    component: JBImageInput
  };
  const Template = (args) => <JBImageInput {...args}></JBImageInput>;
  export const Normal = Template.bind({});
  Normal.args = {
    acceptTypes:"image/jpeg,image/jpg,image/png,image/svg+xml"
};