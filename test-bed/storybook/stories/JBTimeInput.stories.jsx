import React from 'react';
import {JBTimeInput} from 'jb-time-input/react';
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
export const withValue = Template.bind({});
withValue.args = {
  label:'with value',
  value:"13:24:48"
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
  label:'time:',
  validationList: [
    {
      validator: /^[1][1234].*$/g,
      message:"hour  must be between 11 and 14"
    },{
      validator:({displayValue,value,valueObject})=>{
        if(valueObject.minute<30){
          return false;
        }
        return true;
      },
      message:'minute must be 30 to 60'
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