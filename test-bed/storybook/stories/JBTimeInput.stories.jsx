import React from 'react';
import JBTimeInput from '../../../react-component/jb-time-input/dist/JBTimeInput';
import JBTimeInputEventTestPage from './pages/jb-time-input/JBTimeInputEventTestPage';
import JBTimeInputWebComponentEventTestPage from './pages/jb-time-input/JBTimeInputWebComponentEventTestPage';
export default {
  title: 'Example/Input/JBTimeInput',
  component:JBTimeInput
};
const Template = (args) => <JBTimeInput {...args}></JBTimeInput>;
export const Normal = Template.bind({});
Normal.args = {
  label:'time',
};
export const PersianNumber = Template.bind({});
PersianNumber.args = {
  label:'Persian number',
  showPersianNumber:true
};
const RTLTemplate = (args) => <div style={{direction:'rtl'}}><JBTimeInput {...args}></JBTimeInput></div>;
export const RTLSample = RTLTemplate.bind({});
RTLSample.args = {
  label:'زمان',
  closeButtonText:'بستن'
};
const EventWebComponentTestPageTemplate = ()=> <JBTimeInputWebComponentEventTestPage></JBTimeInputWebComponentEventTestPage>;
export const WebComponentEventTestPage = EventWebComponentTestPageTemplate.bind({});

const EventTestPageTemplate = ()=> <JBTimeInputEventTestPage></JBTimeInputEventTestPage>;
export const EventTestPage = EventTestPageTemplate.bind({});

export const ValidationSample = Template.bind({});
ValidationSample.args = {
  label:'زمان',
  validationList: [
    {
      validator: /^[1][1234].*$/g,
      message:"ساعت انتخابی شما می‌تواند بین 11 تا 14 باشد"
    }
  ]
};
export const withoutSecond = Template.bind({});
withoutSecond.args = {
  label:'time',
  secondEnabled:false
};

export const FrontalZero = Template.bind({});
FrontalZero.args = {
  label:'زمان',
  closeButtonText:'بستن',
  frontalZero:true,
};
export const OptionalMinute = Template.bind({});
OptionalMinute.args = {
  label:'زمان',
  closeButtonText:'بستن',
  optionalUnits:['minute']
};