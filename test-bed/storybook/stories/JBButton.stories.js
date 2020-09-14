import React from 'react';

import JBButton from '../../../react-component/jb-button';

export default {
    title: 'Example/JBButton',
    component: JBButton
};

const Template = (args) => <JBButton type={args.type}>{args.buttonText}</JBButton>;

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    buttonText:'ثبت محتوی'
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secendary',
    buttonText:'ثبت اطلاعات'
};

