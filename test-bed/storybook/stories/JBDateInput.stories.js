import React from 'react';
import JBDateInput from '../../../react-component/jb-date-input/JBDateInput';
export default {
    title: 'Example/JBDateInput',
    component: JBDateInput
  };
  const Template = (args) => <JBDateInput {...args}></JBDateInput>;
  export const Normal = Template.bind({});
  Normal.args = {
    label:'تاریخ'
};