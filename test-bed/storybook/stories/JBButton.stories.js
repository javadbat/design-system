import React from 'react';

import JBButton from '../../../react-component/jb-button/lib/JBButton';

export default {
    title: 'Example/JBButton',
    component: JBButton
};

const Template = (args) => <JBButton {...args}>{args.buttonText}</JBButton>;

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    buttonText:'ثبت محتوی',
    loadingText:'',
    disabled:false,
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secendary',
    buttonText:'ثبت اطلاعات',
    loadingText:''

};
export const Disabled = Template.bind({});
Disabled.args = {
    type: 'secendary',
    buttonText:'ثبت اطلاعات',
    loadingText:'',
    disabled:true

};
export const Loading = Template.bind({});
Loading.args = {
    type: 'primary',
    buttonText:'ثبت محتوی',
    isLoading:true,
    loadingText:'لطفا صبر کنید'
};
export const LoadingSecondary = Template.bind({});
LoadingSecondary.args = {
    type: 'secendary',
    buttonText:'ثبت اطلاعات',
    isLoading:true,
    loadingText:'لطفا صبر کنید'
};

