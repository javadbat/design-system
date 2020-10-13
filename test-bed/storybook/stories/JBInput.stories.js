import React from 'react';
import JBInput from '../../../react-component/jb-input';
import JBInputTest from './pages/JBInputTest';
import JBInputValidationList from './pages/JBInputValidationList';
export default {
    title: 'Example/JBInput',
    component: JBInput
};
const Template = (args) => <JBInput label={args.label} message={args.message} type={args.type} validationList={args.validationList}></JBInput>;
export const Normal = Template.bind({});
Normal.args = {
    label:'متن ساده',
    message:'متن ثابت زیر کادر متن'
};
export const Large = Template.bind({});
Large.args = {
    label:'متن ساختگی جهت نمایش در لیبل برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد',
    message:'متن ساختگی جهت نمایش در پیام برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد',
};
export const Password = Template.bind({});
Password.args = {
    label:'متن ساده',
    message:'متن ثابت زیر کادر متن',
    type:'password'
};

const testActionsTemplate = () =><JBInputTest></JBInputTest>;
export const testActions = testActionsTemplate.bind({});

const ValidationTemplate = (args) => <JBInputValidationList inputRegex={args.inputRegex} inputMessage={args.inputMessage} passwordRegex={args.passwordRegex} passwordMessage={args.passwordMessage} emailRegex={args.emailRegex} emailMessage={args.emailMessage} mobileRegex={args.mobileRegex} mobileMessage={args.mobileMessage}></JBInputValidationList>;
export const ValidationList = ValidationTemplate.bind({});
ValidationList.args = {
    inputRegex:/^.{8,}$/g,
    inputMessage: 'ورودی باید حداقل 8 کاراکتر باشد',
    passwordRegex:/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,
    passwordMessage: 'رمز باید حداقل 8 کاراکتر و حداقل شامل یک حرف انگلیسی و حداقل شامل یک عدد باشد',
    emailRegex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/g,
    emailMessage:'آدرس ایمیل معتبر نیست ',
    mobileRegex:/^(\+98|0|0098)?9\d{9}$/g,
    mobileMessage: 'شماره موبایل معتبر نیست ',
};
