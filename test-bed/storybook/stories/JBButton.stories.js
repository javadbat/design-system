import React from 'react';

import JBButton from '../../../react-component/jb-button';

export default {
    title: 'Example/JBButton',
    component: JBButton
};

const Template = (args) => <JBButton type={args.type} isLoading={args.isLoading} loadingText={args.loadingText}>{args.buttonText}</JBButton>;

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    buttonText:'ثبت محتوی',
    loadingText:''
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secendary',
    buttonText:'ثبت اطلاعات',
    loadingText:''

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

