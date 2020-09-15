import React from 'react';
import JBInput from '../../../react-component/jb-input';
export default {
    title: 'Example/JBInput',
    component: JBInput
};
const Template = (args) => <JBInput {...args}></JBInput>;
export const Normal = Template.bind({});
Normal.args = {
    label:'متن ساده',
    message:'متن ثابت زیر کادر متن'
};
export const Large = Template.bind({});
Large.args = {
    label:'متن بزرگ با کاراکتر های بسیار بسیار بسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیار زیاد',
    message:'متن بزرگ با کاراکتر های بسیار بسیار بسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیاربسیار زیاد',
};