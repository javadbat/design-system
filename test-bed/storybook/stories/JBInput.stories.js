import React from 'react';
import JBInput from '../../../react-component/jb-input';
export default {
    title: 'Example/JBInput',
    component: JBInput
  };
  const Template = (args) => <JBInput {...args}></JBInput>;
  export const Normal = Template.bind({});
  Normal.args = {
      label:'متن ساده'
};