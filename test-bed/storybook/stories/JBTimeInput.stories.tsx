import React from 'react';
import { JBTimeInput, Props } from 'jb-time-input/react';
import JBTimeInputEventTestPage from './pages/jb-time-input/JBTimeInputEventTestPage';
import JBTimeInputWebComponentEventTestPage from './pages/jb-time-input/JBTimeInputWebComponentEventTestPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props> = {
  title: "Example/form elements/Inputs/JBTimeInput",
  component: JBTimeInput,
};
export default meta;
type Story = StoryObj<typeof JBTimeInput>;

export const Normal: Story = {
  args: {
    label: 'time',
  }
};

export const PersianNumber: Story = {
  args: {
    label: 'time',
    showPersianNumber: true
  }
};

export const withValue: Story = {
  args: {
    label: 'time',
    value: "13:24:48"
  }
};


export const RTLSample: Story = {
  args: {
    label: 'زمان',
    closeButtonText: 'بستن'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
};

export const WebComponentEventTestPage:Story = {
  render:() => <JBTimeInputWebComponentEventTestPage />
};

export const EventTestPage:Story = {
  render:() => <JBTimeInputEventTestPage />
};

export const ValidationSample:Story = {
  args:{
    label:'time:',
    validationList:[
      {
        validator:/^[1][1234].*$/g,
        message:"hour  must be between 11 and 14"
      },{
        validator:({displayValue,value,valueObject})=>{
          if(valueObject.minute && valueObject.minute<30){
            return false;
          }
          return true;
        },
        message:'minute must be 30 to 60'
      }
    ]
  }
};
export const withoutSecond:Story = {
  args:{
    label:'time',
    secondEnabled:false
  }
};

export const FrontalZero:Story = {
  args:{
    label:'time',
    closeButtonText:'بستن',
    frontalZero:true
  }
};

export const OptionalMinute:Story = {
  args:{
    label:'زمان',
    closeButtonText:'بستن',
    optionalUnits:['minute']
  }
};