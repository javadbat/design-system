import React from 'react';
import {JBTextarea} from 'jb-textarea/react';
import JBTextAreaTestPage from './pages/JBTextAreaTestPage';
export default {
  title: 'Example/JBTextarea',
  component: JBTextarea
};
const Template = (args) => <JBTextarea {...args}></JBTextarea>;
export const Normal = Template.bind({});
Normal.args = {
  label:'text',
  placeholder:'please type here'
};
export const WithValidation = Template.bind({});
WithValidation.args = {
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
};
const TestPageTemplate = (args) => <JBTextAreaTestPage {...args}></JBTextAreaTestPage>;
export const Examples = TestPageTemplate.bind({});


const RTLTemplate = (args) => <div style={{dir:'rtl'}}><JBTextarea {...args}></JBTextarea></div>;
export const RTLSample = RTLTemplate.bind({});
RTLSample.args = {
  label:'متن',
  placeholder:'لطفا وارد کنید'
};