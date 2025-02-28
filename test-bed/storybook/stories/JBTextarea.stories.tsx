import React from 'react';
import {JBTextarea, Props} from 'jb-textarea/react';
import JBTextAreaTestPage from './pages/JBTextAreaTestPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props> = {
  title: "Example/form elements/JBTextarea",
  component: JBTextarea,
};
export default meta;
type Story = StoryObj<typeof JBTextarea>;

export const Normal:Story = {
  args:{
    label:'text',
    placeholder:'please type here'
  }
};
export const WithValidation:Story = {
  args:{
    label:'validation',
    placeholder:'10 char, and no f char',
    validationList:[
      {
        validator:/.{10}/g,
        message:"you must enter 10 char at least"
      },
      {
        validator:(value)=>{
          if(value.includes("f")){
            return false;
          }
          return true;
        },
        message:"you cant enter f char"
      }
    ]
  }
};

export const ActionTest:Story = {
  render: (args) => <JBTextAreaTestPage {...args}></JBTextAreaTestPage>,
  args:{
    label:'text',
    placeholder:'please type here'
  }
};

export const RTL = {
  args:{
    label:'متن',
    placeholder:'لطفا وارد کنید'
  },
  parameters: {
    themes:{
      themeOverride:'rtl'
    }
  }
};