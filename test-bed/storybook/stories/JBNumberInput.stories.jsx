import React from 'react';
import {JBNumberInput} from '../../../react-component/jb-number-input';
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
const numberTestTemplate = () => <JBInputNumberTest></JBInputNumberTest>;
export const numberTest = numberTestTemplate.bind({});
const WithStartSectionTemplate = (args) => {
  return (
    <JBNumberInput {...args}>
      <jb-input-inbox-element slot="start-section">
        <div style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
      </jb-input-inbox-element>
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
      <jb-input-inbox-element slot="end-section">
        <div style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
      </jb-input-inbox-element>
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
      <jb-input-inbox-element slot="end-section">
        <div style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
      </jb-input-inbox-element>
      <jb-input-inbox-element slot="start-section">
        <div style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
      </jb-input-inbox-element>
    </JBNumberInput>
  );
};
export const WithStartAndEndSection = WithStartAndEndSectionTemplate.bind({});

WithStartAndEndSection.args = {
  label: 'label',
  message: 'static text under input show all the time',
  placeholder: 'place holder'
};