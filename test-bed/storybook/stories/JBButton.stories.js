import React from 'react';

import JBButton from '../../../react-component/jb-button/JBButton';

export default {
  title: 'Example/JBButton',
  component: JBButton
};

const Template = (args) => <JBButton {...args} >ثبت محتوی</JBButton>;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secendary',
};

