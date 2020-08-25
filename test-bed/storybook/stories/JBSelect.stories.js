import React from 'react';
import JBSelect from '../../../react-component/jb-select/JBSelect';
export default {
    title: 'Example/JBSelect',
    component: JBSelect
  };
  const Template = (args) => <JBSelect {...args}></JBSelect>;
  export const Normal = Template.bind({});
  Normal.args = {
      label:'از منو انتخاب کنید'
};