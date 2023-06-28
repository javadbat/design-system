import React from 'react';
import {JBInput} from '../../../react-component/jb-input';
import JBInputNumberTest from './pages/JBInput/JBInputNumberTest';
import JBInputStylingTest from './pages/JBInput/JBInputStylingTest';
import JBInputTest from './pages/JBInput/JBInputTest';
import JBInputValidationList from './pages/JBInput/JBInputValidationList';
export default {
    title: 'Example/JBInput',
    component: JBInput
};
const Template = (args) => <JBInput {...args}></JBInput>;
export const Normal = Template.bind({});
Normal.args = {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    disabled: false
};
export const Large = Template.bind({});
Large.args = {
    label: 'متن ساختگی جهت نمایش در لیبل برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد',
    message: 'متن ساختگی جهت نمایش در پیام برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد',
};
export const Password = Template.bind({});
Password.args = {
    label: 'متن ساده',
    message: 'متن ثابت زیر کادر متن',
    type: 'password'
};
export const Number = Template.bind({});
Number.args = {
    label: 'تعداد به عدد',
    message: 'متن ثابت زیر کادر متن',
    type: 'number',
    onChange: (e) => { console.log(`new number is ${e.target.value}`); }
};
export const NumberWithComma = Template.bind({});
NumberWithComma.args = {
    label: 'تعداد به عدد',
    message: 'هر سه رقم با کاما جدا میگردند',
    type: 'number',
    numberFieldParameter: {
        step: 1,
        decimalPrecision: 2,
        invalidNumberReplacement: '',
        useThousandSeparator: true
    },
    onChange: (e) => { console.log(`new number is ${e.target.value}`); }
};
export const NumberWithMinMax = Template.bind({});
NumberWithMinMax.args = {
    label: 'تعداد به عدد',
    message: 'عدد بین 1 تا 10000',
    type: 'number',
    numberFieldParameter: {
        step: 1,
        decimalPrecision: 2,
        invalidNumberReplacement: '',
        useThousandSeparator: true,
        maxValue: 10000,
        minValue: 1,
    },
    onChange: (e) => { console.log(`new number is ${e.target.value}`); }
};
export const NonNegativeNumberWithComma = Template.bind({});
NonNegativeNumberWithComma.args = {
    label: 'تعداد به عدد',
    message: 'هر سه رقم با کاما جدا میگردند',
    type: 'number',
    value: '1000000',
    numberFieldParameter: {
        step: 1,
        decimalPrecision: 2,
        invalidNumberReplacement: '',
        useThousandSeparator: true,
        thousandSeparator: '_',
        acceptNegative: false,
    },

    onChange: (e) => { console.log(`new number is ${e.target.value}`); }
};
export const NumberWithoutButtons = Template.bind({});
NumberWithoutButtons.args = {
    label: 'عددی بدون دکمه',
    message: 'دکمه های +- حذف',
    type: 'number',
    numberFieldParameter: {
        showButtons:false
    },
    onChange: (e) => { console.log(`new number is ${e.target.value}`); }
};
export const NumberWithPersianChar = Template.bind({});
NumberWithPersianChar.args = {
    label: 'type number',
    message: 'type en number but user see persian char number',
    type: 'number',
    numberFieldParameter: {
        showPersianNumber:true
    },
    onChange: (e) => { console.log(`new number is ${e.target.value}`); }
};
const testActionsTemplate = () => <JBInputTest></JBInputTest>;
export const testActions = testActionsTemplate.bind({});

const testStyleTemplate = () => <JBInputStylingTest></JBInputStylingTest>;
export const testStyles = testStyleTemplate.bind({});

const numberTestTemplate = () => <JBInputNumberTest></JBInputNumberTest>;
export const numberTest = numberTestTemplate.bind({});

const ValidationTemplate = (args) => <JBInputValidationList inputRegex={args.inputRegex} inputMessage={args.inputMessage} passwordRegex={args.passwordRegex} passwordMessage={args.passwordMessage} emailRegex={args.emailRegex} emailMessage={args.emailMessage} mobileRegex={args.mobileRegex} mobileMessage={args.mobileMessage}></JBInputValidationList>;
export const ValidationList = ValidationTemplate.bind({});
ValidationList.args = {
    inputRegex: /^.{8,}$/g,
    inputMessage: 'ورودی باید حداقل 8 کاراکتر باشد',
    passwordRegex: /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,
    passwordMessage: 'رمز باید حداقل 8 کاراکتر و حداقل شامل یک حرف انگلیسی و حداقل شامل یک عدد باشد',
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/g,
    emailMessage: 'آدرس ایمیل معتبر نیست ',
    mobileRegex: /^(\+98|0|0098)?9\d{9}$/g,
    mobileMessage: 'شماره موبایل معتبر نیست ',
};
const WithStartSectionTemplate = (args) => {
    return (
        <JBInput direction='ltr' label={args.label} message={args.message} type={args.type} validationList={args.validationList} placeholder={args.placeholder}>
            <jb-input-inbox-element slot="start-section">
                <div style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
            </jb-input-inbox-element>
        </JBInput>
    );
};
export const WithStartSection = WithStartSectionTemplate.bind({});
WithStartSection.args = {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
};


const WithEndSectionTemplate = (args) => {
    return (
        <JBInput direction='ltr' label={args.label} message={args.message} type={args.type} validationList={args.validationList} placeholder={args.placeholder}>
            <jb-input-inbox-element slot="end-section">
                <div style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
            </jb-input-inbox-element>
        </JBInput>
    );
};
export const WithEndSection = WithEndSectionTemplate.bind({});

WithEndSection.args = {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
};
const WithStartAndEndSectionTemplate = (args) => {
    return (
        <JBInput direction='ltr' label={args.label} message={args.message} type={args.type} validationList={args.validationList} placeholder={args.placeholder}>
            <jb-input-inbox-element slot="end-section">
                <div style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
            </jb-input-inbox-element>
            <jb-input-inbox-element slot="start-section">
                <div style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
            </jb-input-inbox-element>
        </JBInput>
    );
};
export const WithStartAndEndSection = WithStartAndEndSectionTemplate.bind({});

WithStartAndEndSection.args = {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
};

export const CustomMobileKeyboard = Template.bind({});
CustomMobileKeyboard.args = {
    'label': 'number keyboard',
    'inputmode': 'numeric'
}