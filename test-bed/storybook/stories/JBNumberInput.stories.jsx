import React from 'react';
import {JBNumberInput} from 'jb-number-input/react';
import JBInputNumberTest from './pages/JBInput/JBInputNumberTest';
export default {
  title: 'Example/Input/JBNumberInput',
  component: JBNumberInput
};
const Template = (args) => <JBNumberInput {...args}></JBNumberInput>;
export const Normal = Template.bind({});
Normal.args = {
  label: 'label',
  message: 'static text under input show all the time',
  placeholder: 'place holder',
  disabled: false,
  onChange: (e) => { console.log(`new number is ${e.target.value}`); }
};
export const NumberWithComma = Template.bind({});
NumberWithComma.args = {
  label: 'تعداد به عدد',
  message: 'هر سه رقم با کاما جدا میگردند',
  showThousandSeparator: true,
  onChange: (e) => { console.log(`new number is ${e.target.value}`); }
};
export const NumberWithMinMax = Template.bind({});
NumberWithMinMax.args = {
  label: 'تعداد به عدد',
  message: 'عدد بین 100 تا 10000',
  maxValue: 10000,
  minValue: 100,
  onChange: (e) => { console.log(`new number is ${e.target.value}`); }
};
export const NonNegativeNumberWithUnderlineSeparator = Template.bind({});
NonNegativeNumberWithUnderlineSeparator.args = {
  label: 'تعداد به عدد',
  message: 'هر سه رقم با خط تیره جدا میگردند',
  acceptNegative: false,
  showThousandSeparator:true,
  thousandSeparator: '_',
  onChange: (e) => { console.log(`new number is ${e.target.value}`); }
};
export const NumberWithButtons = Template.bind({});
NumberWithButtons.args = {
  label: 'عددی با دکمه',
  message: 'دکمه های +-',
  type: 'number',
  showControlButton:true,
  step:100,
  onChange: (e) => { console.log(`new number is ${e.target.value}`); }
};
export const NumberWithPersianChar = Template.bind({});
NumberWithPersianChar.args = {
  label: 'type number',
  message: 'type en number but user see persian char number',
  type: 'number',
  showPersianNumber:true,
  onChange: (e) => { console.log(`new number is ${e.target.value}`); }
};
const numberTestTemplate = () => <JBInputNumberTest></JBInputNumberTest>;
export const numberTest = numberTestTemplate.bind({});
const WithStartSectionTemplate = (args) => {
  return (
    <JBNumberInput {...args}>
      <div slot="start-section" style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
    </JBNumberInput>
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
    <JBNumberInput {...args}>
      <div slot="end-section" style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
    </JBNumberInput>
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
    <JBNumberInput {...args}>
      <div slot="end-section" style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
      <div slot="start-section" style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
    </JBNumberInput>
  );
};
export const WithStartAndEndSection = WithStartAndEndSectionTemplate.bind({});

WithStartAndEndSection.args = {
  label: 'label',
  message: 'static text under input show all the time',
  placeholder: 'place holder'
};
