import React from 'react';
import JBDateInput from '../../../react-component/jb-date-input/JBDateInput';
import JBDateInputGregorianTest from './pages/JBDateInputGregorianTestPage';
import JBDateInputJalaliTest from './pages/JBDateInputJalaliTestPage';
import JBDateInputTimeStampTest from './pages/JBDateInputTimeStampTestPage';

export default {
    title: 'Example/JBDateInput',
    component: JBDateInput
};
const Template = (args) => <JBDateInput {...args}></JBDateInput>;
export const Normal = Template.bind({});
Normal.args = {
    label:'تاریخ',
    valueType:"GREGORIAN",
    inputType:"JALALI"
};
export const CustomFormat = Template.bind({});
CustomFormat.args = {
    label:'تاریخ',
    valueType:"GREGORIAN",
    inputType:"JALALI",
    format:"YYYY/MM/DD"
};
const GregorianTestTemplate = (args) => <JBDateInputGregorianTest {...args}></JBDateInputGregorianTest>;
export const GregorianTest = GregorianTestTemplate.bind({});
GregorianTest.args = {
    label:'date',
    valueType:"GREGORIAN",
    inputType:'GREGORIAN'
};
export const GregorianMinMaxTest = GregorianTestTemplate.bind({});
GregorianMinMaxTest.args = {
    label:'تاریخ',
    valueType:"GREGORIAN",
    min:"2020-09-05T08:51:23.176Z",
    max:"2020-10-15T08:51:23.176Z",
    inputType:'JALALI'
};
const JalaliTestTemplate = (args) => <div style={{direction:'rtl'}}><JBDateInputJalaliTest format={args.format?args.format:undefined} label={args.label} min={args.min} max={args.max} valueType={args.valueType}></JBDateInputJalaliTest></div>;
export const JalaliTest = JalaliTestTemplate.bind({});
JalaliTest.args = {
    label:'تاریخ',
    valueType:"JALALI",
};
export const JalaliMinMaxTest = JalaliTestTemplate.bind({});
JalaliMinMaxTest.args = {
    label:'تاریخ',
    valueType:"JALALI",
    min:"1399-05-01T12:05:39.530Z",
    max:"1400-08-01T12:05:39.530Z",
};
export const JalaliMinMaxTestWithCustomFormat = JalaliTestTemplate.bind({});
JalaliMinMaxTestWithCustomFormat.args = {
    label:'تاریخ',
    valueType:"JALALI",
    min:"1399/05/01",
    max:"1400/08/01",
    format:"YYYY/MM/DD"
};

const TimeStampTestTemplate = (args) => <JBDateInputTimeStampTest label={args.label} min={args.min} max={args.max} valueType={args.valueType}></JBDateInputTimeStampTest>;
export const TimeStampTest = TimeStampTestTemplate.bind({});
TimeStampTest.args = {
    label:'تاریخ',
    valueType:"TIME_STAMP",
};
export const TimeStampMinMaxTest = TimeStampTestTemplate.bind({});
TimeStampMinMaxTest.args = {
    label:'تاریخ',
    valueType:"TIME_STAMP",
    min:"1596291030322",
    max:"1696291030322",
};

export const GregorianInputTest = Template.bind({});
GregorianInputTest.args = {
    label:'تاریخ',
    valueType:"GREGORIAN",
    inputType:"GREGORIAN"
};
export const LeftToRightTest = Template.bind({});
LeftToRightTest.args = {
    label:'date',
    valueType:"GREGORIAN",
    inputType:"GREGORIAN",
    direction: 'ltr'
};